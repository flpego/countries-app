import { useContext } from "react";
import { CountriesContext } from "../../contexts/CountriesContext";
import CountryCard from "./CountryCard";
import './CountriesList.css'

const CountriesList = () => {

  const { countriesByRegion } = useContext(CountriesContext); 

  return (
    <div className="countries-list-container">
      <ul>
        {countriesByRegion.map((country) => (
          <CountryCard key={country.alpha3Code}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
            id={country.alpha3Code}
          />
        ))}
      </ul>
    </div>
  )
}

export default CountriesList