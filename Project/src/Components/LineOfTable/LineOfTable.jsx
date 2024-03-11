import './LineOfTable.scss';
import edit_img from '../../assets/edit-green.svg';
import delete_img from '../../assets/delete-red.svg';
import { useState } from 'react';
import LineOfTableEdit from '../LineOfTableEdit/LineOfTableEdit';
import { useContext} from 'react'
import { WordsContext} from '../../Context/WordsContextProvider'

export default function LineOfTable(props){
    const [editStatus,setEditStatus] = useState(false);
    const {deleteWord, updateWord} = useContext(WordsContext);
    return(
        <>
        {(!editStatus) ? 
        (<div className='LineOfTable'>
        <div className='LineOfTable__slovo'>{props.slovo}</div>
        <div className='LineOfTable__perevod'>{props.perevod}</div>
        <div className='LineOfTable__trans'>{props.trans}</div>
        <div className='LineOfTable__tema'>{props.tema}</div>
        <div className='LineOfTable__edit'>
            <img src={edit_img} 
                alt="" 
                onClick={()=>{
                    setEditStatus(true)
                } } 
                title='Редактировать'
            />
            <img src={delete_img} 
                alt="" 
                title='Удалить'
                onClick={()=>{
                    deleteWord(props.id)
                } } 
            />
        </div>
        </div>)
        :
        (<LineOfTableEdit
            world={props}
            id = {props.id}
            slovo={props.slovo}
            perevod={props.perevod}
            trans={props.trans}
            tema={props.tema}
            setEditStatus={setEditStatus}
            updateWord={updateWord}
        />)
        }
        </>
    )
        
}