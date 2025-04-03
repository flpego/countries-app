import { useContext } from "react"
import { CountriesContext } from "../../contexts/CountriesContext"
import "./FormStyles.css"
import { IoIosArrowDown } from "react-icons/io"

const RegionSelect = () => {
  const {loadCountriesByRegion} = useContext(CountriesContext)
  return (
      <form className="region-form">
        <select onChange={(e) => loadCountriesByRegion(e.target.value)}>
          <option value="">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>

        </select>
        <IoIosArrowDown />
      </form>
  )
}

export default RegionSelect