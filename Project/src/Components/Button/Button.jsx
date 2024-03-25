import './Button.scss'
import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'

function Button({formForAddWord}){

    const clickButton = ()=>{
        console.log('нажали кнопку добавить',);
        formForAddWord = true;
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
    const {loadWords, isLoaded, formForAddWord} = wordsStore;
    useEffect(() => {
        loadWords();
    },[isLoaded]);
    useEffect(() => {
        console.log('formForAddWord',formForAddWord);
    },[formForAddWord]);

    return {loadWords, isLoaded,formForAddWord};
})(observer(Button));