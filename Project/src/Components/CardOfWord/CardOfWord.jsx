import './CardOfWord.scss'
import { useState, useRef, useEffect } from 'react'

export default function CardOfWord(props){
    const [showPerevod, setShowPerevod] = useState('disactive');
    const [showButton, setShowButton] = useState('active');
    const handleShowPerevod = () => {
        setShowPerevod('active');
        setShowButton('disactive');
        props.fun();
    };
    const buttonRef = useRef(null);
    useEffect(() => {
        buttonRef.current.focus();
      });
    
    return(
        <>
            <div className="cardOfWorld">
                <div className="cardOfWorld__info">
                    <span className='cardOfWorld__slovo'>{props.englishWord}</span>
                    <span className='cardOfWorld__trans'>{props.transcriptionWord}</span>
                </div>
                <div className={`cardOfWorld__perevod ${showPerevod}`}>{props.russianWord}</div>
                <button className={`cardOfWorld__button ${showButton}`} onClick = {handleShowPerevod} ref={buttonRef}>Смотреть перевод</button>
            </div>
        </>
    )
}