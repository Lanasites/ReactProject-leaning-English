import { action, observable, makeObservable } from 'mobx';

class WordsStore {
    words = []
    isLoading = false
    error = null

    constructor() {
        makeObservable(this, {
            words: observable,
            isLoading: observable,
            error: observable,
            fetchWords: action,
            updateWord: action,
            addWord: action,
            removeWord: action
        })
    }

    fetchWords = async () => {
        this.isLoading = true;

        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            if (response.ok) {
                const data = await response.json();
                this.words = data;
                this.isLoading = false;
            } else {
                throw new Error('Ошибка загрузки данных');
            }
        } catch (error) {
            this.isLoading = false;
            this.error = error;
        }
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