import CardOfWord from '../CardOfWord/CardOfWord'
import './SliderWords.scss'
import left_arrow from '../../assets/left.svg'
import right_arrow from '../../assets/right.svg'
import { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'


function SliderWords({words}){

    if (words.length<=0||!words) {
        console.error('Ничего не загрузилось')
        return <h1 className='sliderWorlds'>Loading...</h1>;
    }

    const worldsArr = words;
    const lengthArr = worldsArr.length;
    const [currentIndex, setcurrentIndex] = useState(0);
    const[studiedNum, setStudiedNum]=useState(0);
    const[studiedWords, setStudiedWords]=useState([]);

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
            setcurrentIndex(lengthArr - 1);
        }
        else
        {   
            setcurrentIndex(currentIndex - 1);
        }
    }
    const studiedNumber = ()=>{
        if(!studiedWords.includes(currentIndex)){
            setStudiedWords([...studiedWords, currentIndex])
            setStudiedNum(studiedNum + 1);
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
                            fun = {studiedNumber}
                            isStudied = {studiedWords.includes(currentIndex)}
                        />
                    <img src={right_arrow} alt="" onClick={handleNextCard}/>
                </div>
                <div className='studied'>Изучено {studiedNum}</div>
            </div>
        </>
    )

}

export default inject(({wordsStore})=>{
    const {words, isLoaded, loadWords} = wordsStore;
    useEffect(() => {
                loadWords();
    },[isLoaded]);
    return {words, isLoaded, loadWords};
})(observer(SliderWords));