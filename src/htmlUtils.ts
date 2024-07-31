import type { countriesType } from "countries-languages";
import type SelectedLanguages from "./SelectedLanguages";
import { format, lightenDarkenColor } from "./utils";

let prevPath: SVGPathElement | null = null;

export function getColorAndPill(language: string) {
	const el = [...document.getElementsByClassName(`pill`)].find(
		(pill) => (pill as HTMLElement).innerText === language + "\nx"
	);

	if (el instanceof HTMLElement) return { color: el.style.backgroundColor, pill: el };

	return null;
}

export async function loadMap() {
	const container = document.getElementById("map");

	if (!container) return;

	const svg = await fetch("	/map.svg");

	container.outerHTML = await svg.text();
}

export function addDropdownOption(dropdown: HTMLElement, text: string) {
	const option = document.createElement("div");
	option.classList.add("dropdown-item");
	option.setAttribute("data-value", text);
	option.innerText = text;
	dropdown.appendChild(option);
}

export function hoverPath(e: MouseEvent | null) {
	prevPath?.setAttribute("fill", prevPath.dataset.originalColor!);

	if (e?.target instanceof SVGPathElement) {
		e.target.setAttribute("fill", lightenDarkenColor(e.target.dataset.originalColor!));
		prevPath = e.target;
	}
}

export function updatePopoverLanguages(
	popover: HTMLElement | null,
	country: countriesType[keyof countriesType] | null,
	selectedLagnuages: SelectedLanguages,
	name: string,
	e: MouseEvent | null
) {
	popover ||= document.getElementById("popover")!;
	const nameDiv = document.getElementById("popover-name")!;
	const languages = document.getElementById("popover-languages")!;
	const population = document.getElementById("popover-population")!;

	popover.style.display = "flex";
	popover.style.opacity = "1";

	if (e) {
		popover.style.top = e.clientY + 10 + "px";
		popover.style.left = e.clientX + 10 + "px";

		const popoverCoord = popover.getBoundingClientRect();

		if (popoverCoord.right > window.innerWidth) {
			popover.style.left = e.clientX - popoverCoord.width - 10 + "px";
		}

		if (popoverCoord.bottom > window.innerHeight) {
			popover.style.top = e.clientY - popoverCoord.height - 10 + "px";
		}
	}

	if (!country) {
		nameDiv.innerText = name + " is not available";
		return;
	}

	nameDiv.innerText = name;
	languages.innerHTML = `Languages: ${Object.values(country.languages)
		.map((lang) => {
			const selected = selectedLagnuages.find(lang);

			if (selected) {
				return `<span style="text-decoration: underline;text-decoration-color: ${selected.color};">${lang}</span>`;
			} else {
				return lang;
			}
		})
		.join(", ")}`;

	population.innerText = `Population: ${format(country.population.count)}`;
}

export function closeDropdown(keepText = false) {
	const searchInput = document.getElementById("searchInput") as HTMLInputElement;
	const dropdown = document.getElementById("dropdown")!;

	if (!keepText) searchInput.value = "";
	searchInput.style.borderRadius = "10px";

	dropdown.style.display = "none";
}
