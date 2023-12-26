import './CardOfWord.scss'

export default function CardOfWord(){
    return(
        <>
        <div className="cardOfWorld">
            <div className="cardOfWorld__info">
                <span className='cardOfWorld__slovo'>слово</span><span className='cardOfWorld__trans'>транскрипция</span>
            </div>
            <div className='cardOfWorld__perevod'>Смотреть перевод</div>
        </div>
        </>
    )

}