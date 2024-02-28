import SliderWorlds from "../../Components/SliderWorlds/SliderWorlds"

export default function SliderPage(props){
    const worldsArr = props.worldsArr;
    return(
        <>  
            <SliderWorlds worldsArr = {worldsArr}/>
        </>
    )
}