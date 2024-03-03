import SliderWorlds from "../../Components/SliderWords/SliderWords"

export default function SliderPage(props){
    const worldsArr = props.worldsArr;
    return(
        <>  
            <SliderWorlds worldsArr = {worldsArr}/>
        </>
    )
}