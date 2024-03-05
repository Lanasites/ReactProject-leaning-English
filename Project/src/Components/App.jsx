
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
} from "react-router-dom"

import '../Style/App.scss'

import { WordsContextProvider } from '../Context/WordsContextProvider.jsx'

function App() {
  return (
    <>
    <WordsContextProvider>
      <Router>
          <div className='app'>
            <Header/>
            <Routes>
              <Route path="/tablewithwords" element={<TablePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/learning" element={<SliderPage /> } />
              <Route path='*' element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
          </div>
      </Router>
    </WordsContextProvider>
    </>
  )
}

export default App
