import { useState, createContext, useEffect } from "react";
import GET from "../Services/GET";

export const WordsContext = createContext();

export function WordsContextComponent({app}){
    const [dataServer, setDataServer]=useState(false);
    const value = {dataServer, setDataServer};

    useEffect(()=>{
        getDataServer()
    },[])

    async function getDataServer(){
        const dataWordServer = await GET.getWorlds();
        setDataServer(dataWordServer);
    }
   
    if (!dataServer){
        return(
            <h1>Loading...</h1>
        )
    }
    return(
        <WordsContext.Provider value={value}>
            {app}
        </WordsContext.Provider>
    )
}