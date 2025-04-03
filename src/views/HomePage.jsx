
import { useContext, useEffect } from "react";
import CountriesList from "../components/Countries/CountriesList"
import Header from "../components/Header/Header"
import FormContainer from "../components/SearchForm/FormContainer"
import { CountriesContext } from "../contexts/CountriesContext";
import { useLocation } from "react-router-dom";
import "../styles/HomePage.css"

const HomePage = () => {

  const { loadCountries } = useContext(CountriesContext);
  const location = useLocation();

  useEffect(() => {
    loadCountries(); // Recargar países cada vez que se accede a Home
  }, [loadCountries, location.pathname]);

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