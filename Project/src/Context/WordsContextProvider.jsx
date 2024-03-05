import { useState, createContext, useEffect } from "react";
import GET from "../Services/GET";
import DELETE from "../Services/DELETE";

export const WordsContext = createContext();

export function WordsContextProvider({children}){
    const [dataServer, setDataServer]=useState(null);
    // const value = {dataServer, setDataServer, deleteWord};

    useEffect(()=>{
        getDataServer()
    },[])

    async function getDataServer(){
        const dataWordServer = await GET.getWorlds();
        setDataServer(dataWordServer);
    }
   
    if (dataServer===null||dataServer===''||!dataServer){
        return(
            <h1>Loading...</h1>
        )
    }
    
    // const addWord = (word)=>{
    //     dataServer.push(word);
    //     setDataServer([...dataServer]);
    // }
    const deleteWord = async (index)=>{
        try {
            const result = await DELETE(index);
            console.log('Результат удаления:', result);
            const idWord = dataServer.findIndex(n => n.id === index);
            if (idWord !== -1) {
                dataServer.splice(idWord, 1);
            }
            setDataServer([...dataServer]);
        }
        catch(error){
            console.error('Ошибка при удалении:', error);
        }
    }
    // const updateWord = (index, slovo, perevod,trans, tema)=>{
    //     dataServer[index]=word;
    //     setDataServer([...dataServer]);
    // }
    const value = {dataServer, setDataServer, deleteWord};
    console.log('данные, которые в контексте',value);
    return(
        <WordsContext.Provider value={value}>
            {children}
        </WordsContext.Provider>
    )
}