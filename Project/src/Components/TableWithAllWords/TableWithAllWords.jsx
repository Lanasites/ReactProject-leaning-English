import './TableWithAllWords.scss'
import '../../style/App.scss'

import LineOfTable from '../LineOfTable/LineOfTable.jsx'
import Button from'../Button/Button.jsx'
import FormNewWord from '../FormNewWord/FormNewWord'
// import worldsArr from '../../assets/data/worlds.json'
import { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'

function TableWithAllWords({words, formForAddWord}){

    return(
        <>  
        <div className='ListOfWords'>
            <h2 className='title'>Список всех слов для изучения</h2>
                <div className='table conteiner'>
                    <div className='table__headings_wrapper'>
                        <div className="table__headings">
                            <div className='table__headings__slovo'>Слово</div>
                            <div className='table__headings__perevod'>Перевод</div>
                            <div className='table__headings__trans'>Транскрипция</div>
                            <div className='table__headings__tema'>Тема</div>
                            <div className='table__headings__edit'>Редактировать/Удалить </div>
                        </div>
                        {words.map((world) => {
                            return (
                            < LineOfTable
                                key = {world.id}
                                slovo = {world.english}
                                perevod = {world.russian}
                                trans = {world.transcription}
                                tema = {world.tags}
                            />)
                        })}
                    </div>
                </div>
                <div className='form conteiner'>
                    {(formForAddWord)
                    ?
                        (<FormNewWord
                            slovo = ''
                            perevod = ''
                            trans = ''
                            tema = ''
                        />)
                    :''}
                    <Button/>
                </div>
            </div>
        </>
    )

}
export default inject(({wordsStore})=>{
    const {words, isLoaded, loadWords, formForAddWord} = wordsStore;
    useEffect(() => {
        loadWords();
    },[isLoaded]);
    return {words, isLoaded, loadWords, formForAddWord};
})(observer(TableWithAllWords));