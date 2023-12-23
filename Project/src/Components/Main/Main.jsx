import TableWithAllWords from '../TableWithAllWords/TableWithAllWords'
import './Main.scss'
import '../../style/App.scss'

export default function Main(){
    return(
        <>
            <div className='main'>
                <h2 className='main__title'>Список всех слов для изучения</h2>
                <TableWithAllWords></TableWithAllWords>
            </div>
        </>
    )

}