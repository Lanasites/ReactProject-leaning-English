// import { useState } from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer.jsx'
import Main from '../Components/Main/Main.jsx'

import '../Style/App.scss'

function App() {


  return (
    <>
        <div className='app'>
          <Header/>
          <Main/>
          <Footer/>
        </div>
    </>
  )
}

export default App
