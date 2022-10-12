export const parseUser = (JSONstring) => {
    try{
        return JSON.parse(JSONstring)
    }
    catch(err){
        return null;
    }
}