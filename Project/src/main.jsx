import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import '../src/style/App.scss'
import { Provider } from 'mobx-react'
import WordssStore from './Stores/WordsStore'

const stores = {
    wordStore: new WordssStore()
}

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root')
)
