import { useState, createContext, useEffect } from "react";
import GET from "../Services/GET";
import DELETE from "../Services/DELETE";
import UPDATE from "../Services/UPDATE";
import ADD from '../Services/ADD'

export const WordsContext = createContext();

export function WordsContextProvider({children}){
    const [dataServer, setDataServer]=useState(null);
    const [formForAddWord, setFormForAddWord]= useState(false);
    const [buttonAdd, setButtonAdd]=useState(false);
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
    
    const addWord = async(slovo, perevod, trans, tema)=>{
        const newId = `${Math.max(...dataServer.map(item => item.id)) + 1}`;
        const newWord ={
            id: newId,
            english: slovo,
            russian: perevod,
            transcription: trans,
            tags: tema
        }
        dataServer.push(newWord);
        console.log('Добавление нового слова');
        setDataServer([...dataServer]);
        const result = await ADD(newWord);
        if (result)
            {console.log('Результат добавления на сервере:', result);}
    }
    const deleteWord = async (index)=>{
        try {
            const result = await DELETE(index);
            if (result)
                {console.log('Результат удаления на сервере:', result);}
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
    const updateWord = async (index, slovo, perevod, trans, tema)=>{
        try {
            const result = await UPDATE(index, slovo, perevod, trans, tema);
            if (result)
                {console.log('Результат обновления на сервере:', result);}
            const updatedDataServer = dataServer.map((item, idWord)=>{
                if (dataServer[idWord].id===index){   
                    return {
                        ...item,
                        english: slovo,
                        russian: perevod,
                        transcription: trans,
                        tags: tema
                    };
                } else {
                    return item;
                }
            })
            setDataServer(updatedDataServer);
        }
        catch(error){
            console.error('Ошибка при обновлении:', error);
        }
    }
    const value = {dataServer, setDataServer, deleteWord, updateWord, addWord, setFormForAddWord, formForAddWord, buttonAdd, setButtonAdd};
    console.log('данные в контексте в', new Date(),value);
    return(
        <WordsContext.Provider value={value}>
            {children}
        </WordsContext.Provider>
    )
}