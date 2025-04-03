import { useNavigate } from "react-router-dom";
import './CountryCard.css'
const CountryCard = ({ name, population, region, capital, flag, id }) => {


    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`/country/${id}`)
    }


    return (
        <li onClick={handleClick} className="country-card">
            <img src={flag} alt={name} />
            <div className="country-card__info">
                <h2>{name}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>

        </li>
    )
}

export default CountryCard