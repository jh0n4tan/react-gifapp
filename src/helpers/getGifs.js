export const getGif = async (category)=>{
       
    const url=`https://api.giphy.com/v1/gifs/search?limit=3&q=${ encodeURI(category) }&api_key=VycksLTQxMJt5Kb6HfBI7EniKsLaPSeU`;        
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(x=>{
        return {
            id:x.id,
            title : x.title,
            url : x.images?.downsized_medium.url
        }
    })
    return gifs;

    
}