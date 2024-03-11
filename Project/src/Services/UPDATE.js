export default function UPDATE(id){
    async function updateWordById(id){
        try{
            const response= await fetch(`/api/words/${id}/update`, {
                method: "POST"
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
}