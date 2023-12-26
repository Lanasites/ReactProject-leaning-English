import './CardOfWord.scss'
import { useState } from 'react'

export default function CardOfWord(){
    const [showPerevod, setShowPerevod] = useState('disactive');
    const [showButton, setShowButton] = useState('active');
    const handleShowPerevod = () => {
        setShowPerevod('active');
        setShowButton('disactive')
    };
    return(
        <>
        <div className="cardOfWorld">
            <div className="cardOfWorld__info">
                <span className='cardOfWorld__slovo'>tomato</span><span className='cardOfWorld__trans'>[təˈmɑːtəʊ]</span>
            </div>
            <div className={`cardOfWorld__perevod ${showPerevod}`}>помидор</div>
            <div className={`cardOfWorld__button ${showButton}`} onClick = {handleShowPerevod}>Смотреть перевод</div>
        </div>
        </>
    )

}