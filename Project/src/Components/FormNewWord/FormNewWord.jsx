import './FormNewWord.scss';
import save_img from '../../assets/save.svg';
import cancel_img from '../../assets/cancel.svg';
import { useEffect, useState, useContext } from 'react';
import { WordsContext} from '../../Context/WordsContextProvider'

export default function FormNewWord({id, slovo, perevod, trans, tema}){
    const {addWord} = useState(false);

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

    const saveInfo=(e)=>{
        e.preventDefault();
        updateWord(id, slovo, perevod, trans, tema)
        setNewSlovo(slovo);
        setPerevodNewWord(perevod);
        setErrorTransNewWord(trans);
        setTemaNewWord(tema);
        setEditStatus(false);
    }
    const validationSlovo=(e)=>{
        const slovo = e.target.value;
        if (slovo===''||!slovo.match(slovoPattern)) {
            setErrorSlovo(true);
            setButton(true); }
        else {
            setErrorSlovo(false);
            setButton(false); }
            
        setSlovo(e.target.value)
    }
    const validationPerevod=(e)=>{
        const perevod = e.target.value;
        if (perevod===''||!perevod.match(perevodPattern)) {
            setErrorPerevod(true);
            setButton(true); }
        else{
            setErrorPerevod(false);
            setButton(false); }

        setPerevod(e.target.value)
    }
    const validationTrans=(e)=>{
        if (e.target.value===''){
            setErrorTrans(true);
            setButton(true); }
        else {
            setErrorTrans(false);
            setButton(false);}

        setTrans(e.target.value)
    }
    const validationTema=(e)=>{
        if (e.target.value===''){
            setErrorTema(true);
            setButton(true); }
        else {
            setErrorTema(false);
            setButton(false);}
       
            setTema(e.target.value)
    }
    return(
        <>
        <form className='FormForNewWord conteiner'>
            <input type='text' className={(errorSlovo)?'FormForNewWord__slovo error':'FormForNewWord__slovo FormForNewWord__input'} value = {slovo} onChange={validationSlovo}/>
            <input type='text' className={(errorPerevod)?'FormForNewWord__perevod error':'FormForNewWord__perevod FormForNewWord__input'} value = {perevod} onChange={validationPerevod}/>
            <input type='text' className={(errorTrans)?'FormForNewWord__trans error':'FormForNewWord__trans FormForNewWord__input'} value = {trans} onChange={validationTrans}/>
            <input type='text' className={(errorTema)?'FormForNewWord__tema error':'FormForNewWord__tema FormForNewWord__input'} value = {tema} onChange={validationTema}/>
            <div className='FormForNewWord__edit'>
                <button type = 'submit' onClick={saveInfo} disabled={button} title='Добавить слово'><img src={save_img} alt="" /></button>
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