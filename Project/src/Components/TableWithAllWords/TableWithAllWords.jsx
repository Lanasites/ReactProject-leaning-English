import './TableWithAllWords.scss'
import '../../style/App.scss'
import Button from'../Button/Button.jsx'

export default function TableWithAllWords(){
    return(
        <>  
            <div className='table conteiner'>
            <div className='table__headings_wrapper'>
                <div className="table__headings">
                    <div className='table__headings__slovo'>Слово</div>
                    <div className='table__headings__perevod'>Перевод</div>
                    <div className='table__headings__trans'>Транскрипция</div>
                    <div className='table__headings__tema'>Тема</div>
                    <div className='table__headings__edit'>Редактировать/Удалить </div>
                </div>
            </div>
            </div>
            <Button></Button>
        </>
    )

}