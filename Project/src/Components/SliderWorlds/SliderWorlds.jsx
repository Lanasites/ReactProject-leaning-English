import CardOfWord from '../CardOfWord/CardOfWord'
import './SliderWorlds.scss'
import left_arrow from '../../assets/left.svg'
import right_arrow from '../../assets/right.svg'
import { useState, useEffect } from 'react'

export default function SliderWorlds(props){
    
    const worldsArr = props.worldsArr;
    const lengthArr = worldsArr.length;
    const [count, setcount] = useState(0);

    const handleNextCard = () =>{
        if (count > lengthArr-2){
            setcount(0);
        }
        else
        {
            setcount(count + 1);
        }
    }
    const handlePrevCard = () =>{
        if (count === 0) {
            setcount(lengthArr-1);
        }
        else
        {   
            setcount(count - 1);
        }
    }
    

    return(
        <>  
            <div className='sliderWorlds'>
            <div className='sliderWorlds__wrapper'>
                <img src={left_arrow} alt="" onClick={handlePrevCard}/>
                <div>
                    <p className='sliderWorlds__count'>{count+1}/{lengthArr}</p>
                    <CardOfWord
                        englishWord = {worldsArr[count].english}
                        transcriptionWord = {worldsArr[count].transcription}
                        russianWord = {worldsArr[count].russian}
                    />
                </div>
                <img src={right_arrow} alt="" onClick={handleNextCard}/>
            </div>
            </div>
        </>
    )

}