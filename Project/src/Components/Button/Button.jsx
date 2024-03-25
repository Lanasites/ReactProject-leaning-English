import './Button.scss'
import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'

function Button({toggleFormForAddWord}){

    const clickButton = ()=>{
        toggleFormForAddWord();
    }
    return(
        <>  
        <div className='conteiner button_right'>
            <button className='button' onClick={clickButton}>Добавить новое слово</button>
        </div>
        </>
    )

}
export default inject(({wordsStore})=>{
    const {loadWords, isLoaded, formForAddWord, toggleFormForAddWord} = wordsStore;
    useEffect(() => {
        loadWords();
    },[isLoaded]);

    return {loadWords, isLoaded,toggleFormForAddWord, formForAddWord};
})(observer(Button));