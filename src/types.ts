import type { countriesType } from "countries-languages";

export type CountriesList = countriesType[keyof countriesType][];
