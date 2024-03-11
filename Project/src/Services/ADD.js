export default function ADD(){
    async function addWord(){
        try{
            const response= await fetch(`/api/words/add`, {
                method: "POST"
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
    addWord();
}