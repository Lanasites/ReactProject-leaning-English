export default function UPDATE(id, slovo, perevod, trans, tema){
    async function updateWordById(id, slovo, perevod, trans, tema){
        try{
            const response= await fetch(`/api/words/${id}/update`, {
                method: "POST",
                body: JSON.stringify(
                    { id: id,
                        english: slovo,
                        russian:perevod,
                        transcription: trans,
                        tags: tema})
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
    updateWordById(id, slovo, perevod, trans, tema);
}