import "./ThemeOptions.css"
import { IoMoonOutline } from "react-icons/io5"

const ThemeOption = ({ theme, handleTheme }) => {

    return (
        <div className="theme-options">
            <button onClick={handleTheme} className="theme-option" id={`theme-${theme}`}>
            <IoMoonOutline />Dark Mode
            </button>
        </div>
    )
}

export default ThemeOption