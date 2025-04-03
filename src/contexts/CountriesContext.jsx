import { createContext, useEffect, useState } from "react";
import { fetchCountries } from "../services/countriesService";

// eslint-disable-next-line react-refresh/only-export-components
export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {

    const [countries, setCountries] = useState([]);
    const [countriesByRegion, setCountriesByRegion] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    const loadCountries = async () => {
        try {
            const res = await fetchCountries();
            setCountries(res);
            setCountriesByRegion(res); // 🔹 Asegurar que también se reinicia la lista mostrada
        } catch (error) {
            console.error("Error al cargar los países:", error);
        }
    };

    useEffect(() => {
    
        loadCountries();
    }, []);

    const loadCountriesByRegion = (region) => {
        if (!countries.length) return; // Evitar errores si aún no hay datos

        let filtered = region === "" ? countries : countries.filter((c) => c.region === region);

        if (searchTerm) {
            filtered = filtered.filter((c) =>
                c.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setCountriesByRegion(filtered);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);

        let filtered = countries.filter((c) =>
            c.name.toLowerCase().includes(term.toLowerCase())
        );
        setCountriesByRegion(filtered);
    }

    return (
        <CountriesContext.Provider value={{ countries, loadCountriesByRegion, countriesByRegion, handleSearch, loadCountries }}>
            {children}
        </CountriesContext.Provider>
    )


}

export default CountriesProvider;