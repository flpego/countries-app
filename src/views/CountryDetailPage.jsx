import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CountriesContext } from "../contexts/CountriesContext";
import Header from "../components/Header/Header";
import "../styles/CountryDetailPage.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import Subtitle from "../utils/Subtitle";

const CountryDetailPage = () => {
  const { countries } = useContext(CountriesContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const country = countries.find((country) => country.alpha3Code === id);

  if (!country) {
    return <div>Country not found...</div>;
  }

  // Safe data handling helper
  const getSafeValue = (value, fallback = "N/A") => {
    return value || fallback;
  };

  // Get border countries with safe handling
  const borderCountries = country.borders
    ? country.borders.map((borderCode) => {
        const borderCountry = countries.find(
          (country) => country.alpha3Code === borderCode
        );
        return borderCountry ? borderCountry.name : borderCode;
      })
    : [];

  return (
    <div className="country-detail-page">
      <Header />
      
      <div className="back-button-container">
        <button onClick={() => navigate(-1)} className="back-button">
          <FaArrowLeftLong /> Back
        </button>
      </div>
      
      <div className="country-page-container">
        <div className="country-flag-container">
          <img 
            src={country.flags?.svg || country.flags?.png} 
            alt={`Flag of ${country.name}`} 
          />
        </div>
        
        <div className="country-info-container">
          <h2 className="country-name">{country.name}</h2>
          
          <div className="country-info-header-container">
            <div className="country-info-section">
              <Subtitle 
                textStrong="Native Name: " 
                text={getSafeValue(country.nativeName)} 
              />
              <Subtitle 
                textStrong="Population: " 
                text={getSafeValue(country.population?.toLocaleString())} 
              />
              <Subtitle 
                textStrong="Region: " 
                text={getSafeValue(country.region)} 
              />
              <Subtitle 
                textStrong="Subregion: " 
                text={getSafeValue(country.subregion)} 
              />
              <Subtitle 
                textStrong="Capital: " 
                text={getSafeValue(country.capital)} 
              />
            </div>

            <div className="country-info-section">
              <Subtitle 
                textStrong="Top Level Domain: " 
                text={getSafeValue(country.topLevelDomain?.[0])} 
              />
              <Subtitle 
                textStrong="Currency: " 
                text={getSafeValue(country.currencies?.[0]?.name)} 
              />
              <Subtitle 
                textStrong="Languages: " 
                text={getSafeValue(
                  country.languages?.map((lang) => lang.name).join(", ")
                )} 
              />
            </div>
          </div>

          <div className="country-border-container">
            <p><strong>Border Countries:</strong></p>
            {borderCountries.length > 0 ? (
              <div className="border-countries-list">
                {borderCountries.map((border, index) => (
                  <span key={index} className="border-country">
                    {border}
                  </span>
                ))}
              </div>
            ) : (
              <p>No bordering countries</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;