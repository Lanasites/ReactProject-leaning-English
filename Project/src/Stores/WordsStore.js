import {action, observable} from 'mobx';

class WordssStore  extends React.Component{
    @observable words = []

    @action addBook = (word) => {
        return this.words.push(word)
    }
    @action removeBook = (index) => {
        return this.words.splice(index, 1)
    }
}

export default WordssStore