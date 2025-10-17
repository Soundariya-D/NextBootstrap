import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://countries.trevorblades.com/';

export const graphQLClient = new GraphQLClient(endpoint);

export const SEARCH_COUNTRIES_QUERY = gql`
  query SearchCountries {
    countries {
      code
      name
      capital
      emoji
      continent {
        name
        code
      }
      currency
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
  query GetCountryByCode($code: ID!) {
    country(code: $code) {
      code
      name
      native
      capital
      emoji
      currency
      continent {
        name
      }
      languages {
        code
        name
      }
    }
  }
`;

export interface Country {
  code: string;
  name: string;
  capital?: string;
  emoji: string;
  continent: {
    name: string;
    code: string;
  };
  currency?: string;
}

export interface CountriesResponse {
  countries: Country[];
}

export interface CountryResponse {
  country: Country;
}

export async function searchCountries(searchTerm: string = ''): Promise<Country[]> {
  try {
    const data: CountriesResponse = await graphQLClient.request(SEARCH_COUNTRIES_QUERY);
    
    if (!searchTerm) {
      return data.countries;
    }
    
    const lowerSearch = searchTerm.toLowerCase();
    return data.countries.filter(
      (country) =>
        country.name.toLowerCase().includes(lowerSearch) ||
        country.code.toLowerCase().includes(lowerSearch) ||
        country.capital?.toLowerCase().includes(lowerSearch)
    );
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
}

export async function getCountryByCode(code: string): Promise<Country | null> {
  try {
    const data: CountryResponse = await graphQLClient.request(GET_COUNTRY_BY_CODE, { code });
    return data.country;
  } catch (error) {
    console.error('Error fetching country:', error);
    return null;
  }
}
