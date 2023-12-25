import './LineOfTable.scss';


export default function TableWithAllWords(props){
return(
    <div>
        <div>{props.slovo}</div>
        <div>{props.perevod}</div>
        <div>{props.trans}</div>
        <div>{props.tema}</div>
    </div>
)

}