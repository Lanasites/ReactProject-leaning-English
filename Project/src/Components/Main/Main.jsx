import TableWithAllWords from '../TableWithAllWords/TableWithAllWords'
import SliderThemes from '../SliderThemes/SliderThemes'
import SliderWorlds from '../SliderWorlds/SliderWorlds'
import './Main.scss'
import '../../style/App.scss'
import feathers from '../../assets/feathers.png'
import worldsArr from '../../assets/data/worlds.json'

export default function Main(){
    return(
        <>
            <div className='main'>
                <div className='firstPage'>
                    <div className='conteiner'>
                        <div className='titlePart'>
                            <div className='titlePart__left'>
                                <h1 className='titlePart__left__h1'>Учить английский легко с&nbsp;english easy to learn</h1>
                                <p className='titlePart__left__text'>Привет! Если ты учишь английский язык, то приложение <br/>English Easy to Learn поможет тебе</p>
                            </div>
                        <img src={feathers} alt="" className='titlePart__right'/>
                        </div>
                        <h2 className='secondPage__title'>Темы для изучения</h2>
                            <SliderThemes 
                            />     
                    </div>
                </div>
                <div className='secondPage'>
                    <div className='conteiner'>
                        <h2 className='secondPage__title'>Список всех слов для изучения</h2>
                        <TableWithAllWords></TableWithAllWords>
                    </div>
                </div>
                <div className='thirdPage'>
                    <div className='conteiner'>
                    <h2 className='thirdPage__title'>Тема овощи</h2>
                    <SliderWorlds 
                        worldsArr = {worldsArr}
                    />
                    </div>
                </div>
            </div>
        </>
    )

}