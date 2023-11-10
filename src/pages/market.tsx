// CountryList.tsx
import React from 'react'
import { useCountries } from '../hooks/useMarketMetrics'

const CountryList: React.FC = () => {
  const { data, error, isLoading } = useCountries()

  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-4">Error: {error.message}</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">List of Countries</h1>
      <ul>
        {data?.map((country) => (
          <li key={country.name.common} className="text-lg mb-2">
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CountryList
