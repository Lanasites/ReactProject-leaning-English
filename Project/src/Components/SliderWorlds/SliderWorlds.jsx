import CardOfWord from '../CardOfWord/CardOfWord'
import './SliderWorlds.scss'
import left_arrow from '../../assets/left.svg'
import right_arrow from '../../assets/right.svg'

export default function SliderWorlds(){
    return(
        <>  
            <div className='sliderWorlds'>
            <div className='sliderWorlds__wrapper'>
                <img src={left_arrow} alt="" />
                <CardOfWord></CardOfWord>
                <img src={right_arrow} alt="" />
            </div>
            </div>
        </>
    )

}