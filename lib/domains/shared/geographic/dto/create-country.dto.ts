export interface CreateCountryDto {

  name: string;

  officialName?: string;

  iso2: string;

  iso3: string;

  phoneCode?: string;

  currencyCode?: string;

  currencyName?: string;

  languageCode?: string;

}