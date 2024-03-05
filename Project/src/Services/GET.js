export default class GET{
    static async getWorlds(){
        try{
            const data= await fetch("/api/words");
            return await data.json();
        }
        catch(e){
            console.error(e);
        }
    }
}