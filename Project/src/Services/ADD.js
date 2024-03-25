export default function ADD(word){
    async function addWord(word){
        try{
            const response= await fetch(`/api/words/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    { id: word.id,
                        english: word.english,
                        russian: word.russian,
                        transcription: word.transcription,
                        tags: word.tags})
    
            });
            if (!response.ok) {
                throw new Error('Ошибка добавления данных');
            };
            return await response.json();
        }
        catch(e){
            console.error(e);
            return null
        }
    }
    addWord(word);
}