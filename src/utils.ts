import type { CountriesList } from "./types";

const colors = [
	"#FF0000", // Red
	"#4b870f", // Green
	"#0000FF", // Blue
	"#FFFF00", // Yellow
	"#a200ff", // Magenta
	"#00FFFF", // Cyan
	"#FF7F00", // Orange
	"#7FFF00", // Lime
	"#76b7e8", // Azure
	"#E6AA68",
	"#AFD0D6",
];

export const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

export function randomColor() {
	if (colors.length === 0) {
		const letters = "0123456789ABCDEF";

		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.round(Math.random() * 15)];
		}

		return color;
	}

	const index = Math.floor(Math.random() * (colors.length - 1));

	const color = colors[index];
	colors.splice(index, 1);

	return color;
}

export function clearColor(color: string) {
	colors.push(color);
}

export function isColorTooBright(hex: string) {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	// Calculate luminance
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
	return luminance > 0.5;
}

export function format(n: number) {
	const str = n.toString().split("");
	if (str.length <= 3) return str.join("");

	let i = str.length - 3;
	while (i > 0) {
		str.splice(i, 0, ",");

		i -= 3;
	}

	return str.join("");
}

export function fixData(countriesList: CountriesList) {
	for (const country of countriesList) {
		for (const langKey in country.languages) {
			if (country.languages[langKey] === "SwissGerman" || country.languages[langKey] === "Austro-BavarianGerman") {
				// just why...
				country.languages[langKey] = "German";
			}

			const langName = country.languages[langKey].split("");

			for (let i = 1; i < langName.length; i++) {
				if (langName[i] === langName[i].toUpperCase()) {
					langName.splice(i, 0, " ");
					i++;
				}
			}

			country.languages[langKey] = langName.join("");
		}
	}
}

export function getLanguages(countriesList: CountriesList, allLanguages: string[]) {
	for (const country of countriesList) {
		for (const language of Object.values(country.languages)) {
			if (!allLanguages.includes(language)) allLanguages.push(language);
		}
	}

	allLanguages.sort();
}

export function lightenDarkenColor(color: string) {
	if (color === "white") color = "#ffffff";
	const percent = -20;

	var R = parseInt(color.substring(1, 3), 16);
	var G = parseInt(color.substring(3, 5), 16);
	var B = parseInt(color.substring(5, 7), 16);

	R = (R * (100 + percent)) / 100;
	G = (G * (100 + percent)) / 100;
	B = (B * (100 + percent)) / 100;

	R = R < 255 ? R : 255;
	G = G < 255 ? G : 255;
	B = B < 255 ? B : 255;

	R = Math.round(R);
	G = Math.round(G);
	B = Math.round(B);

	var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
	var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
	var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

	return "#" + RR + GG + BB;
}

export function getByName(name: string, countriesList: CountriesList) {
	const nameSearch = name.replace(/\s/g, "");

	return (
		countriesList.find((country) => country.name.common === nameSearch || country.name.official === nameSearch) ?? null
	);
}

export function blendColors(colors: string[]) {
	const amount = 0.5;

	const values = colors.map((color) =>
		color
			.split(/([a-fA-F0-9]{2})/)
			.filter((v) => v !== "#" && v)
			.map((c) => parseInt(c, 16))
	);

	let { b, g, r } = values.reduce(
		(a, v) => ({
			r: Math.round(a.r + (v[0] - a.r) * amount),
			g: Math.round(a.g + (v[1] - a.g) * amount),
			b: Math.round(a.b + (v[2] - a.b) * amount),
		}),
		{
			r: 0,
			g: 0,
			b: 0,
		}
	);

	const rStr = r.toString(16).padStart(2, "0");
	const gStr = g.toString(16).padStart(2, "0");
	const bStr = b.toString(16).padStart(2, "0");
	return "#" + rStr + gStr + bStr;
}
