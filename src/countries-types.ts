type iso_3166_1_alpha2Union = {
	iso_3166_1_alpha2: string;
};

type iso_3166_1_alpha3Union = {
	iso_3166_1_alpha3: string;
};

type iso_3166_1_numericUnion = {
	iso_3166_1_numeric: string;
};

type geoUnion = {
	geo: BaseName8;
};

type diallingUnion = {
	dialling: BaseName9;
};

type extraUnion = {
	extra: BaseName10;
};

type populationUnion = {
	population: BaseName11;
};

type wikiLinkUnion = {
	wikiLink: string;
};

type nldUnion = {
	nld: BaseName1 | string;
};

type deuUnion = {
	deu: BaseName1 | string;
};

type fraUnion =
	| {
			fra: BaseName1;
	  }
	| {
			fra: BaseName1 | string;
	  };

type hrvUnion = {
	hrv: BaseName1;
};

type itaUnion = {
	ita: BaseName1 | string;
};

type jpnUnion = {
	jpn: BaseName1;
};

type porUnion = {
	por: BaseName1 | string;
};

type rusUnion = {
	rus: BaseName1 | string;
};

type spaUnion = {
	spa: BaseName1 | string;
};

type finUnion = {
	fin: BaseName1;
};

type engUnion = {
	eng: BaseName1 | string;
};

type araUnion = {
	ara: BaseName1 | string;
};

type USDUnion = {
	USD: BaseName4;
};

type tsnUnion = {
	tsn: BaseName1 | string;
};

type fraengUnion = fraUnion & engUnion;

export default BaseName328;

type BaseName328 = {
	AW: BaseName12;
	AF: BaseName12;
	AO: BaseName12;
	AI: BaseName22;
	AX: BaseName22;
	AL: BaseName12;
	AD: BaseName12;
	AE: BaseName12;
	AR: BaseName12;
	AM: BaseName12;
	AS: BaseName22;
	AQ: BaseName40;
	TF: BaseName22;
	AG: BaseName22;
	AU: BaseName12;
	AT: BaseName12;
	AZ: BaseName12;
	BI: BaseName12;
	BE: BaseName12;
	BJ: BaseName12;
	BF: BaseName12;
	BD: BaseName12;
	BG: BaseName22;
	BH: BaseName12;
	BS: BaseName12;
	BA: BaseName12;
	BL: BaseName22;
	BY: BaseName12;
	BZ: BaseName12;
	BM: BaseName12;
	BO: BaseName12;
	BR: BaseName12;
	BB: BaseName12;
	BN: BaseName12;
	BT: BaseName12;
	BV: BaseName40;
	BW: BaseName12;
	CF: BaseName12;
	CA: BaseName80;
	CC: BaseName40;
	CH: BaseName12;
	CL: BaseName12;
	CN: BaseName12;
	CI: BaseName12;
	CM: BaseName12;
	CD: BaseName12;
	CG: BaseName12;
	CK: BaseName22;
	CO: BaseName12;
	KM: BaseName12;
	CV: BaseName22;
	CR: BaseName12;
	CU: BaseName12;
	CW: BaseName22;
	CX: BaseName40;
	KY: BaseName22;
	CY: BaseName12;
	CZ: BaseName12;
	DE: BaseName12;
	DJ: BaseName12;
	DM: BaseName12;
	DK: BaseName12;
	DO: BaseName12;
	DZ: BaseName12;
	EC: BaseName12;
	EG: BaseName12;
	ER: BaseName12;
	EH: BaseName40;
	ES: BaseName12;
	EE: BaseName12;
	ET: BaseName12;
	FI: BaseName12;
	FJ: BaseName22;
	FK: BaseName22;
	FR: BaseName12;
	FO: BaseName22;
	FM: BaseName22;
	GA: BaseName12;
	GB: BaseName12;
	GE: BaseName12;
	GG: BaseName22;
	GH: BaseName12;
	GI: BaseName22;
	GN: BaseName12;
	GP: BaseName22;
	GM: BaseName12;
	GW: BaseName12;
	GQ: BaseName12;
	GR: BaseName12;
	GD: BaseName12;
	GL: BaseName12;
	GT: BaseName12;
	GF: BaseName22;
	GU: BaseName22;
	GY: BaseName12;
	HK: BaseName22;
	HM: BaseName40;
	HN: BaseName12;
	HR: BaseName12;
	HT: BaseName12;
	HU: BaseName12;
	ID: BaseName12;
	IM: BaseName22;
	IN: BaseName12;
	IO: BaseName22;
	IE: BaseName12;
	IR: BaseName12;
	IQ: BaseName12;
	IS: BaseName12;
	IL: BaseName12;
	IT: BaseName12;
	JM: BaseName12;
	JE: BaseName22;
	JO: BaseName12;
	JP: BaseName12;
	KZ: BaseName12;
	KE: BaseName12;
	KG: BaseName12;
	KH: BaseName12;
	KI: BaseName22;
	KN: BaseName12;
	KR: BaseName12;
	XK: BaseName22;
	KW: BaseName12;
	LA: BaseName12;
	LB: BaseName12;
	LR: BaseName12;
	LY: BaseName12;
	LC: BaseName12;
	LI: BaseName12;
	LK: BaseName12;
	LS: BaseName12;
	LT: BaseName12;
	LU: BaseName12;
	LV: BaseName12;
	MO: BaseName22;
	MF: BaseName22;
	MA: BaseName12;
	MC: BaseName12;
	MD: BaseName12;
	MG: BaseName12;
	MV: BaseName22;
	MX: BaseName12;
	MH: BaseName22;
	MK: BaseName12;
	ML: BaseName12;
	MT: BaseName12;
	MM: BaseName12;
	ME: BaseName12;
	MN: BaseName12;
	MP: BaseName22;
	MZ: BaseName12;
	MR: BaseName12;
	MS: BaseName12;
	MQ: BaseName80;
	MU: BaseName12;
	MW: BaseName12;
	MY: BaseName12;
	YT: BaseName22;
	NA: BaseName12;
	NC: BaseName22;
	NE: BaseName12;
	NF: BaseName22;
	NG: BaseName12;
	NI: BaseName12;
	NU: BaseName22;
	NL: BaseName12;
	NO: BaseName12;
	NP: BaseName12;
	NR: BaseName12;
	NZ: BaseName22;
	OM: BaseName12;
	PK: BaseName12;
	PA: BaseName12;
	PN: BaseName22;
	PE: BaseName12;
	PH: BaseName12;
	PW: BaseName22;
	PG: BaseName12;
	PL: BaseName12;
	PR: BaseName12;
	KP: BaseName12;
	PT: BaseName12;
	PY: BaseName12;
	PS: BaseName12;
	PF: BaseName22;
	QA: BaseName12;
	RE: BaseName22;
	RO: BaseName12;
	RU: BaseName12;
	RW: BaseName12;
	SA: BaseName12;
	SD: BaseName22;
	SN: BaseName12;
	SG: BaseName12;
	GS: BaseName22;
	SJ: BaseName40;
	SB: BaseName22;
	SL: BaseName12;
	SV: BaseName12;
	SM: BaseName12;
	SO: BaseName12;
	PM: BaseName22;
	RS: BaseName12;
	SS: BaseName12;
	ST: BaseName22;
	SR: BaseName12;
	SK: BaseName12;
	SI: BaseName12;
	SE: BaseName12;
	SZ: BaseName12;
	SX: BaseName22;
	SC: BaseName12;
	SY: BaseName12;
	TC: BaseName22;
	TD: BaseName12;
	TG: BaseName12;
	TH: BaseName12;
	TJ: BaseName12;
	TK: BaseName22;
	TM: BaseName12;
	TL: BaseName12;
	TO: BaseName12;
	TT: BaseName12;
	TN: BaseName12;
	TR: BaseName80;
	TV: BaseName22;
	TW: BaseName12;
	TZ: BaseName12;
	UG: BaseName12;
	UA: BaseName12;
	UM: BaseName80;
	UY: BaseName12;
	US: BaseName22;
	UZ: BaseName12;
	VA: BaseName22;
	VC: BaseName22;
	VE: BaseName12;
	VG: BaseName22;
	VI: BaseName22;
	VN: BaseName12;
	VU: BaseName12;
	WF: BaseName22;
	WS: BaseName22;
	YE: BaseName12;
	ZA: BaseName80;
	ZM: BaseName12;
	ZW: BaseName12;
	BQ: BaseName22;
	SH: BaseName22;
};
type BaseName40 = iso_3166_1_alpha2Union &
	iso_3166_1_alpha3Union &
	iso_3166_1_numericUnion &
	geoUnion &
	diallingUnion &
	extraUnion &
	populationUnion &
	wikiLinkUnion & {
		name: BaseName3;
		demonym: string;
		capital: string;
		currency: BaseName73 | BaseName42 | BaseName116;
		tld: string[];
		alt_spellings: string[];
		languages: BaseName72 | BaseName20 | BaseName115;
		translations: BaseName15 | BaseName6;
		isCoatOfArmsImgExist: boolean;
		isOutlinesImgExist: boolean;
	};

type BaseName12 = iso_3166_1_alpha2Union &
	iso_3166_1_alpha3Union &
	iso_3166_1_numericUnion &
	geoUnion &
	diallingUnion &
	extraUnion &
	populationUnion &
	wikiLinkUnion & {
		name: BaseName3 | BaseName128;
		demonym: string;
		capital: string;
		currency: BaseName5 | BaseName325;
		tld: string[];
		alt_spellings: string[];
		languages: BaseName2 | BaseName317 | BaseName324;
		translations: BaseName6 | BaseName15 | BaseName159;
	};

type BaseName3 = {
	common: string;
	official: string;
	native:
		| BaseName2
		| BaseName13
		| BaseName17
		| BaseName20
		| BaseName23
		| BaseName26
		| BaseName28
		| BaseName29
		| BaseName31
		| BaseName34
		| BaseName36
		| BaseName41
		| BaseName43
		| BaseName45
		| BaseName47
		| BaseName49
		| BaseName51
		| BaseName53
		| BaseName57
		| BaseName59
		| BaseName61
		| BaseName64
		| BaseName68
		| BaseName70
		| BaseName72
		| BaseName74
		| BaseName76
		| BaseName78
		| BaseName81
		| BaseName83
		| BaseName85
		| BaseName87
		| BaseName89
		| BaseName90
		| BaseName93
		| BaseName98
		| BaseName102
		| BaseName103
		| BaseName105
		| BaseName106
		| BaseName108
		| BaseName113
		| BaseName115
		| BaseName117
		| BaseName118
		| BaseName119
		| BaseName121
		| BaseName122
		| BaseName125
		| BaseName130
		| BaseName135
		| BaseName136
		| BaseName137
		| BaseName139
		| BaseName141
		| BaseName144
		| BaseName146
		| BaseName148
		| BaseName150
		| BaseName152
		| BaseName153
		| BaseName156
		| BaseName157
		| BaseName160
		| BaseName162
		| BaseName164
		| BaseName166
		| BaseName167
		| BaseName169
		| BaseName171
		| BaseName173
		| BaseName175
		| BaseName177
		| BaseName179
		| BaseName181
		| BaseName182
		| BaseName184
		| BaseName187
		| BaseName193
		| BaseName195
		| BaseName197
		| BaseName198
		| BaseName199
		| BaseName200
		| BaseName202
		| BaseName204
		| BaseName206
		| BaseName208
		| BaseName211
		| BaseName212
		| BaseName214
		| BaseName215
		| BaseName217
		| BaseName218
		| BaseName220
		| BaseName223
		| BaseName225
		| BaseName227
		| BaseName229
		| BaseName232
		| BaseName235
		| BaseName236
		| BaseName237
		| BaseName238
		| BaseName240
		| BaseName241
		| BaseName243
		| BaseName246
		| BaseName248
		| BaseName250
		| BaseName251
		| BaseName253
		| BaseName255
		| BaseName260
		| BaseName262
		| BaseName265
		| BaseName267
		| BaseName272
		| BaseName273
		| BaseName279
		| BaseName280
		| BaseName282
		| BaseName284
		| BaseName286
		| BaseName289
		| BaseName291
		| BaseName293
		| BaseName294
		| BaseName296
		| BaseName297
		| BaseName301
		| BaseName303
		| BaseName307
		| BaseName311
		| BaseName313
		| BaseName315
		| BaseName317
		| BaseName321
		| BaseName324
		| BaseName326;
};

type BaseName2 = nldUnion & {
	pap: BaseName1 | string;
};

type BaseName1 = {
	official: string;
	common: string;
};

type BaseName5 = {
	AWG: BaseName4;
};

type BaseName4 = {
	iso_4217_code: string;
	iso_4217_numeric: number | string;
	iso_4217_name: string;
	iso_4217_minor_unit: number;
};

type BaseName6 = nldUnion &
	deuUnion &
	fraUnion &
	hrvUnion &
	jpnUnion &
	porUnion &
	rusUnion &
	spaUnion &
	finUnion & {
		ita: BaseName1;
	};

type BaseName8 = {
	continent: BaseName7 | BaseName16 | BaseName19 | BaseName25 | BaseName33 | BaseName38 | BaseName39;
	postal_code: boolean | null;
	latitude: string | null;
	latitude_dec: string | null;
	longitude: string | null;
	longitude_dec: string | null;
	max_latitude: string | null;
	max_longitude: string | null;
	min_latitude: string | null;
	min_longitude: string | null;
	area: number;
	region: string;
	subregion: string;
	world_region: string | null;
	region_code: string;
	subregion_code: string;
	landlocked: boolean | null;
	borders: string[] | null;
	independent: string | null;
};

type BaseName7 = {
	NA: string;
};

type BaseName9 = {
	calling_code: string[] | null;
	national_prefix: null | string;
	national_number_lengths: number[] | null;
	national_destination_code_lengths: number[] | null;
	international_prefix: string | number | null;
};

type BaseName10 = {
	geonameid: number | null;
	edgar: string | number | null;
	itu: string | number | null;
	marc: string | number | null;
	wmo: string | number | null;
	ds: number | string | null;
	fifa: string | number | null;
	fips: string | number | null;
	gaul: number | null;
	ioc: string | number;
	cowc: number | string | null;
	cown: number | null;
	fao: number | null;
	imf: number | null;
	ar5: string | number | null;
	address_format: null | string;
	eu_member: null | boolean;
	vat_rates: null | BaseName44;
};

type BaseName11 = {
	count: number;
	worldPercentage: number;
};

type BaseName13 = {
	pus: BaseName1 | string;
	prs: BaseName1 | string;
	tuk: BaseName1 | string;
};

type BaseName14 = {
	AFN: BaseName4;
};

type BaseName15 = nldUnion &
	deuUnion &
	fraUnion &
	hrvUnion &
	jpnUnion &
	porUnion &
	rusUnion &
	spaUnion &
	finUnion & {
		cym: BaseName1;
		ita: BaseName1;
	};

type BaseName16 = {
	AS: string;
};

type BaseName17 = porUnion;

type BaseName18 = {
	AOA: BaseName4;
};

type BaseName19 = {
	AF: string;
};

type BaseName22 = iso_3166_1_alpha2Union &
	iso_3166_1_alpha3Union &
	iso_3166_1_numericUnion &
	geoUnion &
	diallingUnion &
	extraUnion &
	populationUnion &
	wikiLinkUnion & {
		name: BaseName3;
		demonym: string | null;
		capital: string | null;
		currency:
			| BaseName21
			| BaseName24
			| BaseName37
			| BaseName54
			| BaseName91
			| BaseName95
			| BaseName99
			| BaseName101
			| BaseName123
			| BaseName124
			| BaseName109
			| BaseName126
			| BaseName132
			| BaseName142
			| BaseName155
			| BaseName42
			| BaseName201
			| BaseName209
			| BaseName231
			| BaseName266
			| BaseName269
			| BaseName277
			| BaseName310
			| BaseName319
			| BaseName327;
		tld: string[] | null;
		alt_spellings: string[] | null;
		languages:
			| BaseName20
			| BaseName23
			| BaseName36
			| BaseName41
			| BaseName53
			| BaseName90
			| BaseName17
			| BaseName98
			| BaseName122
			| BaseName125
			| BaseName130
			| BaseName139
			| BaseName141
			| BaseName152
			| BaseName169
			| BaseName181
			| BaseName184
			| BaseName200
			| BaseName208
			| BaseName211
			| BaseName220
			| BaseName232
			| BaseName235
			| BaseName241
			| BaseName250
			| BaseName265
			| BaseName284
			| BaseName293
			| BaseName303
			| BaseName313;
		translations: BaseName6 | BaseName15 | BaseName100 | BaseName185 | BaseName285;
		isOutlinesImgExist: boolean;
	};

type BaseName20 = engUnion;

type BaseName21 = {
	XCD: BaseName4;
};

type BaseName23 = {
	swe: BaseName1 | string;
};

type BaseName24 = {
	EUR: BaseName4;
};

type BaseName25 = {
	EU: string;
};

type BaseName26 = {
	sqi: BaseName1 | string;
};

type BaseName27 = {
	ALL: BaseName4;
};

type BaseName28 = {
	cat: BaseName1 | string;
};

type BaseName29 = araUnion;

type BaseName30 = {
	AED: BaseName4;
};

type BaseName31 = spaUnion & {
	grn: BaseName1 | string;
};

type BaseName32 = {
	ARS: BaseName4;
};

type BaseName33 = {
	SA: string;
};

type BaseName34 = rusUnion & {
	hye: BaseName1 | string;
};

type BaseName35 = {
	AMD: BaseName4;
};

type BaseName36 = engUnion & {
	smo: BaseName1 | string;
};

type BaseName37 = USDUnion;

type BaseName38 = {
	OC: string;
};

type BaseName39 = {
	AN: string;
};

type BaseName41 = fraUnion;

type BaseName42 = {
	AUD: BaseName4;
};

type BaseName43 = {
	bar: BaseName1 | string;
};

type BaseName44 = {
	standard: number;
	reduced: number[];
	super_reduced: null | number;
	parking: number | null;
};

type BaseName45 = rusUnion & {
	aze: BaseName1 | string;
};

type BaseName46 = {
	AZN: BaseName4;
};

type BaseName47 = fraUnion & {
	run: BaseName1 | string;
};

type BaseName48 = {
	BIF: BaseName4;
};

type BaseName49 = nldUnion & deuUnion & fraUnion;

type BaseName50 = {
	XOF: BaseName4;
};

type BaseName51 = {
	ben: BaseName1 | string;
};

type BaseName52 = {
	BDT: BaseName4;
};

type BaseName53 = {
	bul: BaseName1 | string;
};

type BaseName54 = {
	BGN: BaseName4;
};

type BaseName55 = {
	BHD: BaseName4;
};

type BaseName56 = {
	BSD: BaseName4;
};

type BaseName57 = {
	bos: BaseName1 | string;
	hrv: BaseName1 | string;
	srp: BaseName1 | string;
};

type BaseName58 = {
	BAM: BaseName4;
};

type BaseName59 = rusUnion & {
	bel: BaseName1 | string;
};

type BaseName60 = {
	BYR: BaseName4;
};

type BaseName61 = spaUnion &
	engUnion & {
		bjz: BaseName1 | string;
	};

type BaseName62 = {
	BZD: BaseName4;
};

type BaseName63 = {
	BMD: BaseName4;
};

type BaseName64 = spaUnion & {
	aym: BaseName1 | string;
	grn: BaseName1 | string;
	que: BaseName1 | string;
};

type BaseName65 = {
	BOV: BaseName4;
	BOB: BaseName4;
};

type BaseName66 = {
	BRL: BaseName4;
};

type BaseName67 = {
	BBD: BaseName4;
};

type BaseName68 = {
	msa: BaseName1 | string;
};

type BaseName69 = {
	BND: BaseName4;
};

type BaseName70 = {
	dzo: BaseName1 | string;
};

type BaseName71 = {
	BTN: BaseName4;
	INR: BaseName4;
};

type BaseName72 = {
	nor: BaseName1 | string;
};

type BaseName73 = {
	NOK: BaseName4;
};

type BaseName74 = engUnion & tsnUnion;

type BaseName75 = {
	BWP: BaseName4;
};

type BaseName76 = fraUnion & {
	sag: BaseName1 | string;
};

type BaseName77 = {
	XAF: BaseName4;
};

type BaseName80 = iso_3166_1_alpha2Union &
	iso_3166_1_alpha3Union &
	iso_3166_1_numericUnion &
	geoUnion &
	diallingUnion &
	extraUnion &
	populationUnion &
	wikiLinkUnion & {
		name: BaseName3;
		demonym: string;
		capital: string;
		currency: BaseName79 | BaseName24 | BaseName302 | BaseName37 | BaseName322;
		tld: string[];
		alt_spellings: string[];
		languages: BaseName78 | BaseName41 | BaseName301 | BaseName20 | BaseName321;
		translations: BaseName15 | BaseName6;
		isCoatOfArmsImgExist: boolean;
	};

type BaseName78 = fraengUnion;

type BaseName79 = {
	CAD: BaseName4;
};

type BaseName81 = fraUnion &
	itaUnion & {
		gsw: BaseName1 | string;
		roh: BaseName1 | string;
	};

type BaseName82 = {
	CHE: BaseName4;
	CHW: BaseName4;
	CHF: BaseName4;
};

type BaseName83 = spaUnion;

type BaseName84 = {
	CLF: BaseName4;
	CLP: BaseName4;
};

type BaseName85 = {
	cmn: BaseName1 | string;
};

type BaseName86 = {
	CNY: BaseName4;
};

type BaseName87 = fraUnion & {
	kon: BaseName1 | string;
	lin: BaseName1 | string;
	lua: BaseName1 | string;
	swa: BaseName1 | string;
};

type BaseName88 = {
	CDF: BaseName4;
};

type BaseName89 = fraUnion & {
	kon: BaseName1 | string;
	lin: BaseName1 | string;
};

type BaseName90 = engUnion & {
	rar: BaseName1 | string;
};

type BaseName91 = {
	NZD: BaseName4;
};

type BaseName92 = {
	COP: BaseName4;
};

type BaseName93 = fraUnion &
	araUnion & {
		zdj: BaseName1 | string;
	};

type BaseName94 = {
	KMF: BaseName4;
};

type BaseName95 = {
	CVE: BaseName4;
};

type BaseName96 = {
	CRC: BaseName4;
};

type BaseName97 = {
	CUC: BaseName4;
	CUP: BaseName4;
};

type BaseName98 = nldUnion &
	engUnion & {
		pap: BaseName1 | string;
	};

type BaseName99 = {
	ANG: BaseName4;
};

type BaseName100 = nldUnion & deuUnion & fraUnion & porUnion & rusUnion & spaUnion & finUnion;

type BaseName101 = {
	KYD: BaseName4;
};

type BaseName102 = {
	ell: BaseName1 | string;
	tur: BaseName1 | string;
};

type BaseName103 = {
	ces: BaseName1 | string;
	slk: BaseName1 | string;
};

type BaseName104 = {
	CZK: BaseName4;
};

type BaseName105 = deuUnion;

type BaseName106 = fraUnion & araUnion;

type BaseName107 = {
	DJF: BaseName4;
};

type BaseName108 = {
	dan: BaseName1 | string;
};

type BaseName109 = {
	DKK: BaseName4;
};

type BaseName110 = {
	DOP: BaseName4;
};

type BaseName111 = {
	DZD: BaseName4;
};

type BaseName112 = {
	EGP: BaseName4;
};

type BaseName113 = engUnion &
	araUnion & {
		tir: BaseName1 | string;
	};

type BaseName114 = {
	ERN: BaseName4;
};

type BaseName115 = spaUnion & {
	mey: BaseName1 | string;
	ber: BaseName1 | string;
};

type BaseName116 = {
	DZD: BaseName4;
	MRO: BaseName4;
	MAD: BaseName4;
};

type BaseName117 = spaUnion & {
	cat: BaseName1 | string;
	eus: BaseName1 | string;
	glg: BaseName1 | string;
	oci: BaseName1 | string;
};

type BaseName118 = {
	est: BaseName1 | string;
};

type BaseName119 = {
	amh: BaseName1 | string;
};

type BaseName120 = {
	ETB: BaseName4;
};

type BaseName121 = {
	fin: BaseName1 | string;
	swe: BaseName1 | string;
};

type BaseName122 = engUnion & {
	fij: BaseName1 | string;
	hif: BaseName1 | string;
};

type BaseName123 = {
	FJD: BaseName4;
};

type BaseName124 = {
	FKP: BaseName4;
};

type BaseName125 = {
	dan: BaseName1 | string;
	fao: BaseName1 | string;
};

type BaseName126 = {
	GBP: BaseName4;
};

type BaseName128 = {
	wiki: string;
	common: string;
	official: string;
	native: BaseName127;
};

type BaseName127 = {
	kat: BaseName1 | string;
};

type BaseName129 = {
	GEL: BaseName4;
};

type BaseName130 = fraengUnion & {
	nfr: BaseName1 | string;
};

type BaseName131 = {
	GHS: BaseName4;
};

type BaseName132 = {
	GIP: BaseName4;
};

type BaseName133 = {
	GNF: BaseName4;
};

type BaseName134 = {
	GMD: BaseName4;
};

type BaseName135 = fraUnion & porUnion & spaUnion;

type BaseName136 = {
	ell: BaseName1 | string;
};

type BaseName137 = {
	kal: BaseName1 | string;
};

type BaseName138 = {
	GTQ: BaseName4;
};

type BaseName139 = spaUnion &
	engUnion & {
		cha: BaseName1 | string;
	};

type BaseName140 = {
	GYD: BaseName4;
};

type BaseName141 = engUnion & {
	zho: BaseName1 | string;
};

type BaseName142 = {
	HKD: BaseName4;
};

type BaseName143 = {
	HNL: BaseName4;
};

type BaseName144 = {
	hrv: BaseName1 | string;
};

type BaseName145 = {
	HRK: BaseName4;
};

type BaseName146 = fraUnion & {
	hat: BaseName1 | string;
};

type BaseName147 = USDUnion & {
	HTG: BaseName4;
};

type BaseName148 = {
	hun: BaseName1 | string;
};

type BaseName149 = {
	HUF: BaseName4;
};

type BaseName150 = {
	ind: BaseName1 | string;
};

type BaseName151 = {
	IDR: BaseName4;
};

type BaseName152 = engUnion & {
	glv: BaseName1 | string;
};

type BaseName153 = engUnion & {
	hin: BaseName1 | string;
	tam: BaseName1 | string;
};

type BaseName154 = {
	INR: BaseName4;
};

type BaseName155 = USDUnion & {
	GBP: BaseName4;
};

type BaseName156 = engUnion & {
	gle: BaseName1 | string;
};

type BaseName157 = {
	fas: BaseName1 | string;
};

type BaseName158 = {
	IRR: BaseName4;
};

type BaseName159 = nldUnion & deuUnion & fraUnion & hrvUnion & jpnUnion & porUnion & rusUnion & spaUnion & finUnion;

type BaseName160 = araUnion & {
	arc: BaseName1 | string;
	ckb: BaseName1 | string;
};

type BaseName161 = {
	IQD: BaseName4;
};

type BaseName162 = {
	isl: BaseName1 | string;
};

type BaseName163 = {
	ISK: BaseName4;
};

type BaseName164 = araUnion & {
	heb: BaseName1 | string;
};

type BaseName165 = {
	ILS: BaseName4;
};

type BaseName166 = itaUnion & {
	bar: BaseName1 | string;
	srd: BaseName1 | string;
};

type BaseName167 = engUnion & {
	jam: BaseName1 | string;
};

type BaseName168 = {
	JMD: BaseName4;
};

type BaseName169 = fraengUnion & {
	nrf: BaseName1 | string;
};

type BaseName170 = {
	JOD: BaseName4;
};

type BaseName171 = {
	jpn: BaseName1 | string;
};

type BaseName172 = {
	JPY: BaseName4;
};

type BaseName173 = rusUnion & {
	kaz: BaseName1 | string;
};

type BaseName174 = {
	KZT: BaseName4;
};

type BaseName175 = engUnion & {
	swa: BaseName1 | string;
};

type BaseName176 = {
	KES: BaseName4;
};

type BaseName177 = rusUnion & {
	kir: BaseName1 | string;
};

type BaseName178 = {
	KGS: BaseName4;
};

type BaseName179 = {
	khm: BaseName1 | string;
};

type BaseName180 = {
	KHR: BaseName4;
};

type BaseName181 = engUnion & {
	gil: BaseName1 | string;
};

type BaseName182 = {
	kor: BaseName1 | string;
};

type BaseName183 = {
	KRW: BaseName4;
};

type BaseName184 = {
	sqi: BaseName1 | string;
	srp: BaseName1 | string;
};

type BaseName185 = deuUnion & fraUnion & hrvUnion & porUnion & rusUnion & spaUnion & finUnion;

type BaseName186 = {
	KWD: BaseName4;
};

type BaseName187 = {
	lao: BaseName1 | string;
};

type BaseName188 = {
	LAK: BaseName4;
};

type BaseName189 = {
	LBP: BaseName4;
};

type BaseName190 = {
	LRD: BaseName4;
};

type BaseName191 = {
	LYD: BaseName4;
};

type BaseName192 = {
	CHF: BaseName4;
};

type BaseName193 = {
	sin: BaseName1 | string;
	tam: BaseName1 | string;
};

type BaseName194 = {
	LKR: BaseName4;
};

type BaseName195 = engUnion & {
	sot: BaseName1 | string;
};

type BaseName196 = {
	LSL: BaseName4;
	ZAR: BaseName4;
};

type BaseName197 = {
	lit: BaseName1 | string;
};

type BaseName198 = deuUnion &
	fraUnion & {
		ltz: BaseName1 | string;
	};

type BaseName199 = {
	lav: BaseName1 | string;
};

type BaseName200 = porUnion & {
	zho: BaseName1 | string;
};

type BaseName201 = {
	MOP: BaseName4;
};

type BaseName202 = araUnion & {
	ber: BaseName1 | string;
};

type BaseName203 = {
	MAD: BaseName4;
};

type BaseName204 = {
	ron: BaseName1 | string;
};

type BaseName205 = {
	MDL: BaseName4;
};

type BaseName206 = fraUnion & {
	mlg: BaseName1 | string;
};

type BaseName207 = {
	MGA: BaseName4;
};

type BaseName208 = {
	div: BaseName1 | string;
};

type BaseName209 = {
	MVR: BaseName4;
};

type BaseName210 = {
	MXN: BaseName4;
};

type BaseName211 = engUnion & {
	mah: BaseName1 | string;
};

type BaseName212 = {
	mkd: BaseName1 | string;
};

type BaseName213 = {
	MKD: BaseName4;
};

type BaseName214 = engUnion & {
	mlt: BaseName1 | string;
};

type BaseName215 = {
	mya: BaseName1 | string;
};

type BaseName216 = {
	MMK: BaseName4;
};

type BaseName217 = {
	srp: BaseName1 | string;
};

type BaseName218 = {
	mon: BaseName1 | string;
};

type BaseName219 = {
	MNT: BaseName4;
};

type BaseName220 = engUnion & {
	cal: BaseName1 | string;
	cha: BaseName1 | string;
};

type BaseName221 = {
	MZN: BaseName4;
};

type BaseName222 = {
	MRO: BaseName4;
};

type BaseName223 = fraengUnion & {
	mfe: BaseName1 | string;
};

type BaseName224 = {
	MUR: BaseName4;
};

type BaseName225 = engUnion & {
	nya: BaseName1 | string;
};

type BaseName226 = {
	MWK: BaseName4;
};

type BaseName227 = engUnion & {
	msa: BaseName1 | string;
};

type BaseName228 = {
	MYR: BaseName4;
};

type BaseName229 = deuUnion &
	engUnion &
	tsnUnion & {
		afr: BaseName1 | string;
		her: BaseName1 | string;
		hgm: BaseName1 | string;
		kwn: BaseName1 | string;
		loz: BaseName1 | string;
		ndo: BaseName1 | string;
	};

type BaseName230 = {
	NAD: BaseName4;
	ZAR: BaseName4;
};

type BaseName231 = {
	XPF: BaseName4;
};

type BaseName232 = engUnion & {
	pih: BaseName1 | string;
};

type BaseName233 = {
	NGN: BaseName4;
};

type BaseName234 = {
	NIO: BaseName4;
};

type BaseName235 = engUnion & {
	niu: BaseName1 | string;
};

type BaseName236 = nldUnion;

type BaseName237 = {
	nno: BaseName1 | string;
	nob: BaseName1 | string;
	smi: BaseName1 | string;
};

type BaseName238 = {
	nep: BaseName1 | string;
};

type BaseName239 = {
	NPR: BaseName4;
};

type BaseName240 = engUnion & {
	nau: BaseName1 | string;
};

type BaseName241 = engUnion & {
	mri: BaseName1 | string;
	nzs: BaseName1 | string;
};

type BaseName242 = {
	OMR: BaseName4;
};

type BaseName243 = engUnion & {
	urd: BaseName1 | string;
};

type BaseName244 = {
	PKR: BaseName4;
};

type BaseName245 = USDUnion & {
	PAB: BaseName4;
};

type BaseName246 = spaUnion & {
	aym: BaseName1 | string;
	que: BaseName1 | string;
};

type BaseName247 = {
	PEN: BaseName4;
};

type BaseName248 = engUnion & {
	fil: BaseName1 | string;
};

type BaseName249 = {
	PHP: BaseName4;
};

type BaseName250 = engUnion & {
	pau: BaseName1 | string;
};

type BaseName251 = engUnion & {
	hmo: BaseName1 | string;
	tpi: BaseName1 | string;
};

type BaseName252 = {
	PGK: BaseName4;
};

type BaseName253 = {
	pol: BaseName1 | string;
};

type BaseName254 = {
	PLN: BaseName4;
};

type BaseName255 = spaUnion & engUnion;

type BaseName256 = {
	KPW: BaseName4;
};

type BaseName257 = {
	PYG: BaseName4;
};

type BaseName258 = {
	QAR: BaseName4;
};

type BaseName259 = {
	RON: BaseName4;
};

type BaseName260 = rusUnion;

type BaseName261 = {
	RUB: BaseName4;
};

type BaseName262 = fraengUnion & {
	kin: BaseName1 | string;
};

type BaseName263 = {
	RWF: BaseName4;
};

type BaseName264 = {
	SAR: BaseName4;
};

type BaseName265 = engUnion & araUnion;

type BaseName266 = {
	SDG: BaseName4;
};

type BaseName267 = engUnion & {
	cmn: BaseName1 | string;
	msa: BaseName1 | string;
	tam: BaseName1 | string;
};

type BaseName268 = {
	SGD: BaseName4;
};

type BaseName269 = {
	SBD: BaseName4;
};

type BaseName270 = {
	SLL: BaseName4;
};

type BaseName271 = USDUnion & {
	SVC: BaseName4;
};

type BaseName272 = itaUnion;

type BaseName273 = araUnion & {
	som: BaseName1 | string;
};

type BaseName274 = {
	SOS: BaseName4;
};

type BaseName275 = {
	RSD: BaseName4;
};

type BaseName276 = {
	SSP: BaseName4;
};

type BaseName277 = {
	STD: BaseName4;
};

type BaseName278 = {
	SRD: BaseName4;
};

type BaseName279 = {
	slk: BaseName1 | string;
};

type BaseName280 = {
	slv: BaseName1 | string;
};

type BaseName281 = {
	SEK: BaseName4;
};

type BaseName282 = engUnion & {
	ssw: BaseName1 | string;
};

type BaseName283 = {
	SZL: BaseName4;
};

type BaseName284 = nldUnion & fraengUnion;

type BaseName285 = nldUnion &
	deuUnion &
	fraUnion &
	jpnUnion &
	porUnion &
	rusUnion &
	spaUnion &
	finUnion & {
		ita: BaseName1;
	};

type BaseName286 = fraengUnion & {
	crs: BaseName1 | string;
};

type BaseName287 = {
	SCR: BaseName4;
};

type BaseName288 = {
	SYP: BaseName4;
};

type BaseName289 = {
	tha: BaseName1 | string;
};

type BaseName290 = {
	THB: BaseName4;
};

type BaseName291 = rusUnion & {
	tgk: BaseName1 | string;
};

type BaseName292 = {
	TJS: BaseName4;
};

type BaseName293 = engUnion & {
	smo: BaseName1 | string;
	tkl: BaseName1 | string;
};

type BaseName294 = rusUnion & {
	tuk: BaseName1 | string;
};

type BaseName295 = {
	TMT: BaseName4;
};

type BaseName296 = porUnion & {
	tet: BaseName1 | string;
};

type BaseName297 = engUnion & {
	ton: BaseName1 | string;
};

type BaseName298 = {
	TOP: BaseName4;
};

type BaseName299 = {
	TTD: BaseName4;
};

type BaseName300 = {
	TND: BaseName4;
};

type BaseName301 = {
	tur: BaseName1 | string;
};

type BaseName302 = {
	TRY: BaseName4;
};

type BaseName303 = engUnion & {
	tvl: BaseName1 | string;
};

type BaseName304 = {
	TWD: BaseName4;
};

type BaseName305 = {
	TZS: BaseName4;
};

type BaseName306 = {
	UGX: BaseName4;
};

type BaseName307 = rusUnion & {
	ukr: BaseName1 | string;
};

type BaseName308 = {
	UAH: BaseName4;
};

type BaseName309 = {
	UYI: BaseName4;
	UYU: BaseName4;
};

type BaseName310 = USDUnion & {
	USN: BaseName4;
	USS: BaseName4;
};

type BaseName311 = rusUnion & {
	uzb: BaseName1 | string;
};

type BaseName312 = {
	UZS: BaseName4;
};

type BaseName313 = itaUnion & {
	lat: BaseName1 | string;
};

type BaseName314 = {
	VEF: BaseName4;
};

type BaseName315 = {
	vie: BaseName1 | string;
};

type BaseName316 = {
	VND: BaseName4;
};

type BaseName317 = fraengUnion & {
	bis: BaseName1 | string;
};

type BaseName318 = {
	VUV: BaseName4;
};

type BaseName319 = {
	WST: BaseName4;
};

type BaseName320 = {
	YER: BaseName4;
};

type BaseName321 = engUnion &
	tsnUnion & {
		afr: BaseName1 | string;
		nbl: BaseName1 | string;
		nso: BaseName1 | string;
		sot: BaseName1 | string;
		ssw: BaseName1 | string;
		tso: BaseName1 | string;
		ven: BaseName1 | string;
		xho: BaseName1 | string;
		zul: BaseName1 | string;
	};

type BaseName322 = {
	ZAR: BaseName4;
};

type BaseName323 = {
	ZMW: BaseName4;
};

type BaseName324 = engUnion &
	tsnUnion & {
		bwg: BaseName1 | string;
		kck: BaseName1 | string;
		khi: BaseName1 | string;
		ndc: BaseName1 | string;
		nde: BaseName1 | string;
		nya: BaseName1 | string;
		sna: BaseName1 | string;
		sot: BaseName1 | string;
		toi: BaseName1 | string;
		tso: BaseName1 | string;
		ven: BaseName1 | string;
		xho: BaseName1 | string;
		zib: BaseName1 | string;
	};

type BaseName325 = {
	ZWL: BaseName4;
};

type BaseName326 = {
	eng: BaseName1;
	dut: BaseName1;
};

type BaseName327 = {
	SHP: BaseName4;
};
