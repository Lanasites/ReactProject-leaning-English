import { action, observable, makeAutoObservable, computed } from 'mobx';
import ADD from '../Services/ADD';
import GET from '../Services/GET';
import DELETE from '../Services/DELETE';

export default class WordsStore {
    words = []
    isLoaded = false
    error = null
    formForAddWord = false;

    constructor() {
        makeAutoObservable(this, {
            words: observable,
            isLoaded: observable,
            error: observable,
            formForAddWord: observable,
            loadWords: action,
            updateWord: action,
            addWord: action,
            deleteWord: action,
            toggleFormForAddWord: action
        })
    }

    loadWords = async () => {
        if (this.isLoaded){
            return;
        }
        const data = await GET.getWorlds();
        this.words = data;
        this.isLoaded = true;
        console.log('Данные с сервера успешно загружены',data);
    }
    
    updateWord = (id, slovo, perevod, trans, tema) => {
        const setingWord ={
            id: id,
            english: slovo,
            russian: perevod,
            transcription: trans,
            tags: tema
        }
        console.log('setingWord',setingWord)
        return this.words[id]= setingWord;
        
    }
 
    addWord = async(slovo, perevod, trans, tema, words) => {
        const newId = `${Math.max(...this.words.map(item => item.id)) + 1}`;
        const newWord ={
            id: newId,
            english: slovo,
            russian: perevod,
            transcription: trans,
            tags: tema
        }
        this.words.push(newWord);
        const result = await ADD(newWord);
        if (result)
            {console.log('Результат добавления на сервере:', result);}
    }

    deleteWord = async (index)=>{
        try {
            const result = await DELETE(index);
            if (result)
                {console.log('Результат удаления на сервере:', result);}
            const idWord = this.words.findIndex(n => n.id === index);
            if (idWord !== -1) {
                this.words.splice(idWord, 1);
            }
        }
        catch(error){
            console.error('Ошибка при удалении:', error);
        }
    }

    toggleFormForAddWord =()=> {
        this.formForAddWord = !this.formForAddWord;
    }

}
