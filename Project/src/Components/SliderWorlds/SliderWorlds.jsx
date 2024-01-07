import CardOfWord from '../CardOfWord/CardOfWord'
import './SliderWorlds.scss'
import left_arrow from '../../assets/left.svg'
import right_arrow from '../../assets/right.svg'
import { useState, useEffect } from 'react'

export default function SliderWorlds(props){
    
    const worldsArr = props.worldsArr;
    const lengthArr = worldsArr.length;
    const [count, setcount] = useState(1);
    console.log(worldsArr, count, lengthArr);

    return(
        <>  
            <div className='sliderWorlds'>
            <div className='sliderWorlds__wrapper'>
                <img src={left_arrow} alt="" />
                <div>
                    <p className='sliderWorlds__count'>{count}/{lengthArr}</p>

                    <CardOfWord
                        englishWord = {worldsArr[count].english}
                        transcriptionWord = {worldsArr[count].transcription}
                        russianWord = {worldsArr[count].russian}
                    />
                </div>
                <img src={right_arrow} alt="" />
            </div>
            </div>
        </>
    )

}