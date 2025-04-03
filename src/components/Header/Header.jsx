import { useEffect, useState } from "react";
import ThemeOption from "../ThemeOptions/ThemeOption"
import "./Header.css"
const Header = () => {
  const [toggleTheme, setToggleTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", toggleTheme);
  }, [toggleTheme]);

  const handleTheme = () => {
    setToggleTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme); // Guardar en localStorage
      return newTheme;
    });
  };

  
  return (
    <header>
        <h1>Where in the world?</h1>
        <div>
            <ThemeOption theme={toggleTheme} handleTheme={handleTheme}/>
        </div>
    </header>
  )
}

export default Header