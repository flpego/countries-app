import { Route, Routes, useLocation } from "react-router-dom"
import HomePage from "./views/HomePage"
import NotFound from "./views/NotFound"
import CountryDetailPage from "./views/CountryDetailPage"

function App() {
  const location = useLocation();


  return (
    <div className="">
      <Routes>

        <Route path="*" element={<NotFound />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/" element={<HomePage key={location.key}/>} />
        <Route path="country/:id" element={<CountryDetailPage />} />
      </Routes>


    </div>

  )
}

export default App
