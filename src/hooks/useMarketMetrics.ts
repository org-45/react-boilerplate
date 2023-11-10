import { useQuery, UseQueryResult } from '@tanstack/react-query'

interface Country {
  name: {
    common: string
  }
}

const fetchCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all')
  if (!response.ok) {
    throw new Error('Failed to fetch countries')
  }
  const data: Country[] = await response.json()
  return data
}

export const useCountries = (): UseQueryResult<Country[], Error> => {
  const query = useQuery({ queryKey: ['countries'], queryFn: fetchCountries })
  return query
}
