export default function DELETE(id){
    async function deleteWordById(id){
        try{
            const response= await fetch(`/api/words/${id}/delete`, {
                method: "POST"
            });
            if (!response.ok) {
                throw new Error('Ошибка удаления данных');
            };
            return await response.json();
        }
        catch(e){
            console.error(e);
            return null
        }
    }
}