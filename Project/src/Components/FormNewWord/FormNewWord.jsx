import './FormNewWord.scss';
import save_img from '../../assets/save.svg';
import cancel_img from '../../assets/cancel.svg';
import { useEffect, useState, useContext } from 'react';
import { WordsContext} from '../../Context/WordsContextProvider'

export default function FormNewWord({slovo, perevod, trans, tema}){
    const {addWord, dataServer} = useContext(WordsContext);
    // const[adding, setAdding] = useState(true);
    const[newSlovo,setNewSlovo]=useState(slovo);
    const[perevodNewWord,setPerevodNewWord]=useState(perevod);
    const[transNewWord,setTransNewWord]=useState(trans);
    const[temaNewWord,setTemaNewWord]=useState(tema);
    const[errorSlovo,setErrorSlovo]=useState(false);
    const[errorPerevod,setErrorPerevod]=useState(false);
    const[errorTrans,setErrorTrans]=useState(false);
    const[errorTema,setErrorTema]=useState(false);
    const[button, setButton]=useState(false);

    const slovoPattern = /^[a-zA-Z ]{1,30}$/;
    const perevodPattern = /^[а-яА-Я ]{1,30}$/;

    // useEffect(()=>{
    //     setNewSlovo(slovo)
    //     setPerevodNewWord(perevod)
    //     setTransNewWord(trans)
    //     setTemaNewWord(tema)
    // },[world])

    const addNewWord=(e)=>{
        e.preventDefault();
        setNewSlovo(slovo);
        setPerevodNewWord(perevod);
        setErrorTrans(trans);
        setTemaNewWord(tema);
        addWord(newSlovo, perevodNewWord, transNewWord, temaNewWord)
        // setEditStatus(false);
    }
    const validationSlovo=(e)=>{
        const slovo = e.target.value;
        if (slovo===''||!slovo.match(slovoPattern)) {
            setErrorSlovo(true);
            setButton(true); }
        else {
            setErrorSlovo(false);
            setButton(false); }
            
        setNewSlovo(e.target.value)
    }
    const validationPerevod=(e)=>{
        const perevod = e.target.value;
        if (perevod===''||!perevod.match(perevodPattern)) {
            setErrorPerevod(true);
            setButton(true); }
        else{
            setErrorPerevod(false);
            setButton(false); }

        setPerevodNewWord(e.target.value)
    }
    const validationTrans=(e)=>{
        if (e.target.value===''){
            setErrorTrans(true);
            setButton(true); }
        else {
            setErrorTrans(false);
            setButton(false);}

        setTransNewWord(e.target.value)
    }
    const validationTema=(e)=>{
        if (e.target.value===''){
            setErrorTema(true);
            setButton(true); }
        else {
            setErrorTema(false);
            setButton(false);}
       
            setTemaNewWord(e.target.value)
    }
    return(
        <>
        <form className='FormForNewWord'>
            <input type='text' className={(errorSlovo)?'FormForNewWord__slovo error':'FormForNewWord__slovo FormForNewWord__input'} value = {newSlovo} onChange={validationSlovo} placeholder='Слово'/>
            <input type='text' className={(errorPerevod)?'FormForNewWord__perevod error':'FormForNewWord__perevod FormForNewWord__input'} value = {perevodNewWord} onChange={validationPerevod} placeholder='Перевод'/>
            <input type='text' className={(errorTrans)?'FormForNewWord__trans error':'FormForNewWord__trans FormForNewWord__input'} value = {transNewWord} onChange={validationTrans} placeholder='[Трансрипция]'/>
            <input type='text' className={(errorTema)?'FormForNewWord__tema error':'FormForNewWord__tema FormForNewWord__input'} value = {temaNewWord} onChange={validationTema} placeholder='Тема'/>
            <div className='FormForNewWord__edit'>
                <button type = 'submit' onClick={addNewWord} disabled={button} title='Добавить слово'><img src={save_img} alt="" /></button>
                <img src={cancel_img} alt="" title='Отменить добавление' onClick={()=>setEditStatus(false)}/>
            </div>
        </form>
        <div className='error-text' hidden={(errorSlovo||errorPerevod||errorTema||errorTrans)?false:true}> 
            {(errorSlovo)?(
                <span>
                    При написании слова можно использовать только латинские буквы<br />
                </span>
            ):''}  
            {(errorPerevod)?(
                <span>
                    При написании перевода можно исполльзвать только кириллицу<br />
                </span>
            ):''} 
            Пустые значения полей недопустимы
        </div>
        </>
        )
    
}