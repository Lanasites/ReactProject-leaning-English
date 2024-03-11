import './Button.scss'
import { useState, useContext } from 'react';
import { WordsContext} from '../../Context/WordsContextProvider'

export default function Button(){
    const {setFormForAddWord} = useContext(WordsContext);
    const [button, setButton]=useState(false);
    function onClickButton(){
        setButton(true);
        setFormForAddWord(true);
    }

    return(
        <>  
        <div className='conteiner button_right'>
            <button className={(!button)?'button active':'button disabled'} onClick={onClickButton}  disabled={button}>Добавить новое слово</button>
        </div>
        </>
    )
}