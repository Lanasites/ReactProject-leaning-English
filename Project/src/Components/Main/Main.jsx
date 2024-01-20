
import SliderThemes from '../SliderThemes/SliderThemes'
import './Main.scss'
import '../../style/App.scss'
import feathers from '../../assets/feathers.png'


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

            </div>
        </>
    )

}