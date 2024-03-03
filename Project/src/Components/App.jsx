
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer.jsx'
import HomePage from '../Pages/HomePage/HomePage.jsx'
import TablePage from '../Pages/TablePage/TablePage.jsx'
import SliderPage from '../Pages/SliderPage/SliderPage.jsx'
import ErrorPage from '../Pages/ErrorPage/ErrorPage.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import '../Style/App.scss'
// import worldsArr from '../assets/data/worlds.json'

function App() {
  return (
    <>
    <Router>
        <div className='app'>
          <Header/>

          <Routes>
            <Route path="/tablewithworlds" element={<TablePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/learning" element={<SliderPage /*worldsArr = {worldsArr}*//> } />
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>

          <Footer/>
        </div>
    </Router>
    </>
  )
}

export default App
