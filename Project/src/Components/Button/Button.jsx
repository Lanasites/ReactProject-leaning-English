import './Button.scss'
import { useState, useContext } from 'react';
import { WordsContext} from '../../Context/WordsContextProvider'

export default function Button(){
    const {setFormForAddWord, buttonAdd, setButtonAdd} = useContext(WordsContext);
    function onClickButton(){
        setButtonAdd(true);
        setFormForAddWord(true);
    }

    return(
        <>  
        <div className='conteiner button_right'>
            <button className={(!buttonAdd)?'button button__active':'button button__disabled'} onClick={onClickButton}  disabled={buttonAdd}>Добавить новое слово</button>
        </div>
        </>
    )
}