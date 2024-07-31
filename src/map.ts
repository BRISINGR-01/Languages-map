import { countries } from "countries-languages";
import { addDropdownOption, closeDropdown, getColorAndPill, hoverPath, loadMap, updatePopover } from "./htmlUtils";
import SelectedLanguages from "./SelectedLanguages";
import { blendColors, fixData, format, getByName, getLanguages, isColorTooBright } from "./utils";

let disappearTimeout: NodeJS.Timeout | null = null;

const countriesList = Object.values(countries);
const selectedLagnuages = new SelectedLanguages();
const allLanguages: string[] = [];

function init() {
	fixData(countriesList);
	getLanguages(countriesList, allLanguages);

	document.querySelectorAll("path").forEach((path) => {
		path.setAttribute("fill", "white");
		path.dataset.originalColor = "white";
		path.setAttribute("stroke", "#1f1f1f");
		path.setAttribute("stroke-width", "0.6");

		const name = path.getAttribute("title");

		if (!name) return;

		const country = getByName(name, countriesList);

		if (!country) console.log(name + " is not available");
	});
}

function onMove(e: MouseEvent) {
	hoverPath(e);

	if (!e.target) return;

	const name = (e.target as HTMLElement).getAttribute("title")!;
	const popover = document.getElementById("popover")!;
	if (disappearTimeout) clearTimeout(disappearTimeout);

	if (!name) {
		popover.style.opacity = "0";
		disappearTimeout = setTimeout(() => {
			popover.style.display = "none";
		}, 100);
		return;
	}

	const country = getByName(name, countriesList);

	updatePopover(popover, country, selectedLagnuages, name, e);
}

function selectLanguage(language: string) {
	const color = selectedLagnuages.addLang(language);
	updateTotalSpeakers();

	updateMap();
	addPill(language, color);

	const searchInput = document.getElementById("searchInput") as HTMLInputElement;
	searchInput.value = "";
}

function removeLanguage(pill: HTMLElement, language: string) {
	pill.style.opacity = "0";
	setTimeout(() => document.getElementById("selectedLanguages")!.removeChild(pill), 100);

	selectedLagnuages.removeLang(language);
	updateMap();
	updateTotalSpeakers();
}

function updateMap() {
	document.querySelectorAll("path").forEach((path) => {
		const name = path.getAttribute("title");
		if (!name) return;

		const country = getByName(name, countriesList);
		if (!country) return;

		const languages = Object.values(country.languages);
		if (!selectedLagnuages.contains(languages)) {
			path.setAttribute("fill", "white");
			path.dataset.originalColor = "white";
		} else {
			const colors = selectedLagnuages.getColors(languages);
			const color = colors.length === 1 ? colors[0] : blendColors(colors);
			path.setAttribute("fill", color);
			path.dataset.originalColor = color;
		}
	});
}

function addPill(language: string, color: string) {
	const pill = document.createElement("div");
	pill.addEventListener("click", () => removeLanguage(pill, language));

	pill.className = "pill";
	pill.textContent = language;
	pill.style.backgroundColor = color;
	pill.style.color = isColorTooBright(color) ? "black" : "white";

	const closeButton = document.createElement("button");
	closeButton.textContent = "x";
	closeButton.style.color = isColorTooBright(color) ? "black" : "white";
	pill.appendChild(closeButton);

	const selectedLanguagesDiv = document.getElementById("selectedLanguages")!;
	selectedLanguagesDiv.appendChild(pill);
}

window.addEventListener("DOMContentLoaded", async () => {
	await loadMap();
	init();
	window.addEventListener("mousemove", onMove);

	const dropdown = document.getElementById("dropdown")!;
	const searchInput = document.getElementById("searchInput") as HTMLInputElement;

	searchInput.addEventListener("focus", () => {
		if (searchInput.value === "") {
			dropdown.innerHTML = "";
			for (const lang of selectedLagnuages.filter(allLanguages)) {
				addDropdownOption(dropdown, lang);
			}
			dropdown.style.display = "block";
			searchInput.style.borderRadius = "10px 10px 0 0";
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			closeDropdown(true);
			searchInput.blur();
		}
	});

	searchInput.addEventListener("input", () => onInput(searchInput, dropdown));

	dropdown.addEventListener("click", (e) => {
		const target = e.target as HTMLElement;
		if (target.classList.contains("dropdown-item")) {
			selectLanguage(target.getAttribute("data-value")!);
			closeDropdown();
		}
	});
});

function onInput(searchInput: HTMLInputElement, dropdown: HTMLElement) {
	const filter = searchInput.value.toLowerCase().trim();

	dropdown.innerHTML = "";
	const shown = [];
	for (const lang of selectedLagnuages.filter(allLanguages)) {
		if (lang.toLowerCase().includes(filter)) {
			shown.push(lang);
		}
	}

	if (!shown.length) {
		closeDropdown(true);
		return;
	}

	shown.sort((a, b) => {
		let letters = filter.split("");
		for (let i = 0; i < Math.min(a.length, b.length); i++) {
			if (a[i] === letters[0]) {
				if (a[i] === b[i]) {
					letters.unshift();
					continue;
				}

				return 1;
			}

			if (b[i] === letters[0]) return -1;
		}

		return 0;
	});

	for (const lang of shown) {
		addDropdownOption(dropdown, lang);
	}

	dropdown.style.display = "block";
	searchInput.style.borderRadius = "10px 10px 0 0";
}

document.addEventListener("click", (e) => {
	const target = e.target as HTMLElement;
	const dropdown = document.getElementById("dropdown")!;
	const searchInput = document.getElementById("searchInput") as HTMLInputElement;

	if (target.nodeName !== "DIV" && target.nodeName !== "INPUT") {
		dropdown.style.display = "none";
		searchInput.style.borderRadius = "10px";
	}

	if (target.nodeName === "path") {
		const name = (e.target as HTMLElement).getAttribute("title")!;

		const country = getByName(name, countriesList);
		if (!country) return;

		const languages = Object.values(country.languages);

		if (selectedLagnuages.contains(languages)) {
			for (const lang of languages) {
				const data = getColorAndPill(lang);

				if (!data) continue;

				removeLanguage(data.pill, lang);
			}
		} else {
			for (const lang of languages) {
				selectLanguage(lang);
			}
		}

		updatePopover(null, country, selectedLagnuages, name, null);
	}
});

function updateTotalSpeakers() {
	const totalSpeakers = document.getElementById("totalSpeakers")!;
	let total = 0,
		percentage = 0;

	for (const country of countriesList) {
		if (selectedLagnuages.contains(Object.values(country.languages))) {
			total += country.population.count;
			percentage += country.population.worldPercentage;
		}
	}

	if (total === 0) {
		return (totalSpeakers.innerText = "");
	}

	totalSpeakers.innerText = `Total speakers: ${format(total)} - ${Math.round(percentage)}%`;
}
