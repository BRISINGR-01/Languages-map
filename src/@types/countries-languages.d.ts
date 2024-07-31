declare module "countries-languages";

type countriesType = {
	[key: string]: {
		name: {
			common: string;
			official: string;
		};
		languages: {
			[key: string]: string;
		};
		population: {
			count: number;
			worldPercentage: number;
		};
		geo: {
			area: number;
		};
	};
};

export declare const countries: countriesType;
