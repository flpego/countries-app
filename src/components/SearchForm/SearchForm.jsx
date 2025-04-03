import { useContext } from "react"
import { CountriesContext } from "../../contexts/CountriesContext"
import "./FormStyles.css"
import { IoIosSearch } from "react-icons/io"

const SearchForm = () => {

  const { handleSearch } = useContext(CountriesContext)


  return (
    <div className="search-form">
      <div className="icon-container">

        <IoIosSearch className="icon-search"/>
      </div>
      <input type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for a country..."
      />

    </div>
  )
}

export default SearchForm