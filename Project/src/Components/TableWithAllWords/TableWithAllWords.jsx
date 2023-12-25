import './TableWithAllWords.scss'
import '../../style/App.scss'

import LineOfTable from '../LineOfTable/LineOfTable.jsx'
import Button from'../Button/Button.jsx'

export default function TableWithAllWords(){
    const worldsArr = [
        {"id":"15087",
        "english":"sun",
        "transcription":"[ðiː sʌn]",
        "russian":"солнце",
        "tags":"природа",
        "tags_json":"[\"u043fu0440u0438u0440u043eu0434u0430\"]"},
        {"id":"15088",
        "english":"tremendous",
        "transcription":"[trəˈmendəs]",
        "russian":"огромный",
        "tags":"неизвестно",
        "tags_json":"[\"u043du0435u0438u0437u0432u0435u0441u0442u043du043e\"]"},
        {"id":"15092",
        "english":"plane",
        "transcription":"[pleɪn]",
        "russian":"самолет",
        "tags":"воздушный транспорт ",
        "tags_json":"[\"u0432u043eu0437u0434u0443u0448u043du044bu0439 u0442u0440u0430u043du0441u043fu043eu0440u0442 \"]"},
        {"id":"15093",
        "english":"pasta",
        "transcription":"[ˈpæstə]",
        "russian":"паста",
        "tags":"еда",
        "tags_json":"[\"u0435u0434u0430\"]"},
        {"id":"15094",
        "english":"pretty",
        "transcription":"[ˈprɪti]",
        "russian":"хорошенький",
        "tags":"прилагательное",
        "tags_json":"[\"u043fu0440u0438u043bu0430u0433u0430u0442u0435u043bu044cu043du043eu0435\"]"},
        {"id":"15095",
        "english":"tomato",
        "transcription":"[təˈmɑːtəʊ]",
        "russian":"помидор",
        "tags":"овощ",
        "tags_json":"[\"u043eu0432u043eu0449\"]"},
        {"id":"15096",
        "english":"flower",
        "transcription":"[ˈflaʊə]",
        "russian":"цветок",
        "tags":"растение",
        "tags_json":"[\"u0440u0430u0441u0442u0435u043du0438u0435\"]"},
        {"id":"15104",
        "english":"dog",
        "transcription":"[dɒg]",
        "russian":"собака",
        "tags":"животное",
        "tags_json":"[\"u0436u0438u0432u043eu0442u043du043eu0435\"]"},
        {"id":"15105",
        "english":"ocean",
        "transcription":"[əʊʃn]",
        "russian":"океан",
        "tags":"стихия",
        "tags_json":"[\"u0441u0442u0438u0445u0438u044f\"]"}
    ];
    return(
        <>  
            <div className='table conteiner'>
            <div className='table__headings_wrapper'>
                <div className="table__headings">
                    <div className='table__headings__slovo'>Слово</div>
                    <div className='table__headings__perevod'>Перевод</div>
                    <div className='table__headings__trans'>Транскрипция</div>
                    <div className='table__headings__tema'>Тема</div>
                    <div className='table__headings__edit'>Редактировать/Удалить </div>
                </div>
                {worldsArr.map((world) => {
                    return (
                    < LineOfTable
                        key = {world.id}
                        slovo = {world.english}
                        perevod = {world.russian}
                        trans = {world.transcription}
                        tema = {world.tags}
                    />)
                })}
            </div>
            </div>
            <Button></Button>
        </>
    )

}