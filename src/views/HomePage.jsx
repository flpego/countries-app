import { useContext, useEffect } from "react"
import CountriesList from "../components/Countries/CountriesList"
import Header from "../components/Header/Header"
import FormContainer from "../components/SearchForm/FormContainer"
import "../styles/HomePage.css"
import { CountriesContext } from "../contexts/CountriesContext"

const HomePage = () => {

  const {loadCountries, countries} = useContext(CountriesContext)

  useEffect(() => {
    if (!countries.length) {
      loadCountries(); // 🔹 Solo carga los datos si `countries` está vacío
    }
  }, [countries]);
  

  return (
    <div>
      <Header />
      <div className="main-layout">
        <FormContainer />
        <CountriesList />
      </div>

    </div>
  )
}

export default HomePage