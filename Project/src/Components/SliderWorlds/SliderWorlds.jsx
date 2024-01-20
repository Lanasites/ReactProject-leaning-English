import CardOfWord from '../CardOfWord/CardOfWord'
import './SliderWorlds.scss'
import left_arrow from '../../assets/left.svg'
import right_arrow from '../../assets/right.svg'
import { useState, useEffect } from 'react'

export default function SliderWorlds(props){
    
    const worldsArr = props.worldsArr;
    const lengthArr = worldsArr.length;
    const [currentIndex, setcurrentIndex] = useState(0);

    const handleNextCard = () =>{
        if (currentIndex > lengthArr-2){
            setcurrentIndex(0);
        }
        else
        {
            setcurrentIndex(currentIndex + 1);
        }
    }
    const handlePrevCard = () =>{
        if (currentIndex === 0) {
            setcurrentIndex(lengthArr-1);
        }
        else
        {   
            setcurrentIndex(currentIndex - 1);
        }
    }
    
    return(
        <>  
            <div className='sliderWorlds'>
                <h2 className='title'>Режим заучивания слов</h2>
                <p className='sliderWorlds__count'>{currentIndex+1}/{lengthArr}</p>
                <div className='sliderWorlds__wrapper slider'>
                    <img src={left_arrow} alt="" onClick={handlePrevCard}/>
                        <CardOfWord
                            key = {currentIndex}
                            currentIndex = {currentIndex}
                            englishWord = {worldsArr[currentIndex].english}
                            transcriptionWord = {worldsArr[currentIndex].transcription}
                            russianWord = {worldsArr[currentIndex].russian}
                        />
                        {/* <div className="slider-container">
                            <div className="slider-track">
                            {
                                worldsArr.map((slide,index) =>(
                                    <div    key={index}
                                            className={`slider-slide ${currentIndex === index ? 'active' : ''}`}
                                    >
                                            <CardOfWord
                                                // currentIndex = {currentIndex}
                                                englishWord = {slide.english}
                                                transcriptionWord = {slide.transcription}
                                                russianWord = {slide.russian}
                                            /> 
                                    </div>
                                ))
                            }
                            </div>
                        </div> */}
                    <img src={right_arrow} alt="" onClick={handleNextCard}/>
                </div>
            </div>
        </>
    )

}