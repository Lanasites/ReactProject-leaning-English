export default class GET{
    static async getWorlds(){
        try{
            // throw new Error("ошибка загрузки данных");
            const data= await fetch("https://itgirlschool.justmakeit.ru/api/words/");
            return await data.json();
        }
        catch(e){
            console.error(e);
        }
    }
}