
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer.jsx'
import Main from '../Components/Main/Main.jsx'
import TableWithAllWords from '../Components/TableWithAllWords/TableWithAllWords.jsx'
import SliderWorlds from '../Components/SliderWorlds/SliderWorlds.jsx'
import Error404 from './Error404/Error404.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import '../Style/App.scss'
import worldsArr from '../assets/data/worlds.json'

function App() {
  return (
    <>
    <Router>
        <div className='app'>
          <Header/>
          
          <Routes>
            <Route path="/tablewithworlds" element={<TableWithAllWords />} />
            <Route path="/" element={<Main />} />
            <Route path="/learning" element={<SliderWorlds worldsArr = {worldsArr}/> } />
            <Route path='*' element={<Error404/>}/>
          </Routes>

          <Footer/>
        </div>
    </Router>
    </>
  )
}

export default App
