import './LineOfTableEdit.scss';
import save_img from '../../assets/save.svg';
import cancel_img from '../../assets/cancel.svg';
import { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react'

function LineOfTableEdit({world, setEditStatus, updateWord}){
    const[slovo,setSlovo]=useState(world.slovo);
    const[perevod,setPerevod]=useState(world.perevod);
    const[trans,setTrans]=useState(world.trans);
    const[tema,setTema]=useState(world.tema);
    const[errorSlovo,setErrorSlovo]=useState(false);
    const[errorPerevod,setErrorPerevod]=useState(false);
    const[errorTrans,setErrorTrans]=useState(false);
    const[errorTema,setErrorTema]=useState(false);
    const[button, setButton]=useState(false);

    const slovoPattern = /^[a-zA-Z ]{1,30}$/;
    const perevodPattern = /^[а-яА-Я ]{1,30}$/;

    useEffect(()=>{
        setSlovo(slovo)
        setPerevod(perevod)
        setTrans(trans)
        setTema(tema)
    },[world])

    const saveInfo=(e)=>{
        e.preventDefault();
        console.log('слово сохранено', 'slovo:', slovo, ', perevod:',perevod,', trans:',trans,', tema:',tema);
        updateWord(world.id, slovo, perevod, trans, tema)
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
        <form className='LineOfTable'>
            <input type='text' className={(errorSlovo)?'LineOfTable__slovo error':'LineOfTable__slovo LineOfTable__input'} value = {slovo} onChange={validationSlovo}/>
            <input type='text' className={(errorPerevod)?'LineOfTable__perevod error':'LineOfTable__perevod LineOfTable__input'} value = {perevod} onChange={validationPerevod}/>
            <input type='text' className={(errorTrans)?'LineOfTable__trans error':'LineOfTable__trans LineOfTable__input'} value = {trans} onChange={validationTrans}/>
            <input type='text' className={(errorTema)?'LineOfTable__tema error':'LineOfTable__tema LineOfTable__input'} value = {tema} onChange={validationTema}/>
            <div className='LineOfTable__edit'>
                <button type = 'submit' onClick={saveInfo} disabled={button} title='Сохранить'><img src={save_img} alt="" /></button>
                {/* <img src={save_img} alt="" onClick={saveInfo} disabled={button}/> */}
                <img src={cancel_img} alt="" title='Отменить редактирование' onClick={()=>setEditStatus(false)}/>
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

export default inject(({wordsStore})=>{
    const {words, isLoaded, loadWords,updateWord} = wordsStore;
    useEffect(() => {
        loadWords();
    },[isLoaded]);
    return {words, isLoaded, loadWords, updateWord};
})(observer(LineOfTableEdit));