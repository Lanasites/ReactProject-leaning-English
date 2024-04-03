export default function SET(word){
    async function updateWordById(word){
        try{
            const response= await fetch(`/api/words/${word.id}/update`, {
                method: "POST",
                body: JSON.stringify(
                    {   id: word.id,
                        english: word.slovo,
                        russian:word.perevod,
                        transcription: word.trans,
                        tags: word.tema})
            });
            if (!response.ok) {
                throw new Error('Ошибка обновления данных');
            };
            return await response.json();
        }
        catch(e){
            console.error(e);
            return null
        }
    }
    updateWordById(word)
}
