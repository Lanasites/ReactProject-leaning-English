import './Button.scss'
import { useState, useContext } from 'react';
import { WordsContext} from '../../Context/WordsContextProvider'

export default function Button(){
    const {addWord} = useContext(WordsContext);
    const [button, setButton]=useState(false);
    function onClickButton(){
        addWord();
        setButton(true);
    }

    return(
        <>  
        <div className='conteiner button_right'>
            <button className='button' onClick={onClickButton}  disabled={button}>Добавить новое слово</button>
        </div>
        </>
    )
}