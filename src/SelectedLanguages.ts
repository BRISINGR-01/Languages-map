import { clearColor, randomColor } from "./utils";

export default class SelectedLanguages {
	data: { language: string; color: string }[];
	constructor() {
		this.data = [];
	}

	addLang(language: string) {
		const color = randomColor();

		this.data.push({ language, color });

		return color;
	}

	removeLang(language: string) {
		const i = this.data.findIndex(({ language: l }) => l === language);
		clearColor(this.data[i].color);

		this.data.splice(i, 1);
	}

	find(language: string) {
		return this.data.find(({ language: l }) => l === language);
	}

	filter(allLanguages: string[]) {
		return allLanguages.filter((lang) => !this.find(lang));
	}

	contains(languages: string[]) {
		return languages.some((lang) => this.find(lang));
	}

	getColors(languages: string[]) {
		return this.data.filter(({ language }) => languages.includes(language)).map(({ color }) => color);
	}
}
