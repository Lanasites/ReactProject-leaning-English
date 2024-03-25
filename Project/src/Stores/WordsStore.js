import { action, observable, makeAutoObservable, computed } from 'mobx';

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
            removeWord: action
        })
    }

    loadWords = async () => {
        if (this.isLoaded){
            return;
        }
        
        try {
        const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            if (response.ok) {
                const data = await response.json();
                this.words = data;
                this.isLoaded = true;
                console.log('Данные с сервера успешно загружены',data);
            } else {
                throw new Error('Ошибка загрузки данных');
            }
        } 
        catch (error) {
            // this.isLoaded = false;
            this.error = error;
        }

    }
    
    updateWord = (word) => {
        // return this.words.push(word)
        console.log(word)
    }
    addWord = (slovo, perevod, trans, tema) => {
        const newId = `${Math.max(...dataServer.map(item => item.id)) + 1}`;
        const newWord ={
            id: newId,
            english: slovo,
            russian: perevod,
            transcription: trans,
            tags: tema
        }
        this.words.push(newWord);
        console.log('Добавление нового слова', newWord);
    }
    removeWord = (index) => {
        this.words.splice(index, 1)
    }
}
