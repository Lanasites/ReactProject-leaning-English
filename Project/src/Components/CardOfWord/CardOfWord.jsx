import './CardOfWord.scss'
import { useState, useRef, useEffect } from 'react'

export default function CardOfWord(props){
    const [showPerevod, setShowPerevod] = useState(props.isStudied ? 'active':'disactive');
    const [showButton, setShowButton] = useState(props.isStudied ? 'disactive':'active');

    const handleShowPerevod = () => {
        setShowPerevod('active');
        setShowButton('disactive');
        props.fun();
    };

    const buttonRef = useRef(null);

    useEffect(() => {
        if (showButton === 'active'){
            buttonRef.current&&buttonRef.current.focus();
        }
      },[showButton]);

    useEffect(() => {
       setShowButton(props.isStudied ? 'disactive':'active');
       setShowPerevod(props.isStudied ? 'active':'disactive');
    },[props.isStudied]);
    
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