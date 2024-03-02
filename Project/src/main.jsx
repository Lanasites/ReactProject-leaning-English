import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
import '../src/style/App.scss'
import { Provider } from 'mobx-react'
import WordsStore from './Stores/WordsStore'

const stores = {
    wordStore: new WordsStore()
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <Provider {...stores}>
        <App />
    </Provider>
);

