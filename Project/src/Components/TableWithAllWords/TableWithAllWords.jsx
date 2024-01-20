import './TableWithAllWords.scss'
import '../../style/App.scss'

import LineOfTable from '../LineOfTable/LineOfTable.jsx'
import Button from'../Button/Button.jsx'
import worldsArr from '../../assets/data/worlds.json'

export default function TableWithAllWords(){
 
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
                        {worldsArr.map((world) => {
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
                <Button></Button>
            </div>
        </>
    )

}