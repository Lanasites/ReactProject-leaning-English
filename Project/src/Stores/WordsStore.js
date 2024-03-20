import { action, observable, makeAutoObservable, computed } from 'mobx';

class WordsStore {
    words = []
    isLoaded = false
    error = null

    constructor() {
        makeAutoObservable(this, {
            words: observable,
            isLoaded: observable,
            error: observable,
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
            } else {
                throw new Error('Ошибка загрузки данных');
            }
        } 
        catch (error) {
            // this.isLoaded = false;
            this.error = error;
        }

        // console.log('загрузка данных');
    }
    
    updateWord = (word) => {
        // return this.words.push(word)
        console.log(word)
    }
    addWord = (word) => {
        this.words.push(word)
    }
    removeWord = (index) => {
        this.words.splice(index, 1)
    }
}

export default WordsStore