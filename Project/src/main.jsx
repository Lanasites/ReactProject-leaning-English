import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import '../src/style/App.scss'
import { WordsContextComponent } from './Context/WordsContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <WordsContextComponent>
            <App />
        </WordsContextComponent>
    </React.StrictMode>
)
