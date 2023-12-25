import './LineOfTable.scss';
import edit_img from '../../assets/edit-green.svg';
import delete_img from '../../assets/delete-red.svg';

export default function LineOfTable(props){
return(
    <div className='LineOfTable'>
        <div className='LineOfTable__slovo'>{props.slovo}</div>
        <div className='LineOfTable__perevod'>{props.perevod}</div>
        <div className='LineOfTable__trans'>{props.trans}</div>
        <div className='LineOfTable__tema'>{props.tema}</div>
        <div className='LineOfTable__edit'>
            <img src={edit_img} alt="" />
            <img src={delete_img} alt="" />
        </div>
    </div>
)

}