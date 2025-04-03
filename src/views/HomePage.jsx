import CountriesList from "../components/Countries/CountriesList"
import Header from "../components/Header/Header"
import FormContainer from "../components/SearchForm/FormContainer"
import "../styles/HomePage.css"

const HomePage = () => {

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