import RegionSelect from "./RegionSelect"
import SearchForm from "./SearchForm"
import "./FormStyles.css"
const FormContainer = () => {
  return (
    <div className="form-container">
        <SearchForm />
        <RegionSelect />
    </div>
  )
}

export default FormContainer