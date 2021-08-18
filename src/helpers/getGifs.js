

 // el await solo sirve dentro de la funcion async (significa asincrono)
export  const getGifs = async(category) =>{
 
    // el aqui metemos el url del postman
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=OMiXoC35cGBjOE62O5agYdb6Fk501Lm1`;
     
    // await significa esperar y fetch es respuesta basicamente estamos esperando la respuesta del url si es correcta
    const resp = await fetch(url);
    
// el postman envia en formato json por ende aqui estamos esperando que llegue la respuesta en formato Json
// metemos el data dentro de llaves para destructurarla
const { data }= await resp.json();


// aqui por lo que entendi estamos barriendo lo que no nos sirve y retornando los valores requeridos en un objeto
const gifs = data.map( img => {
    return {
        id: img.id,
        title: img.title,
        // el signo de interrogacion es para preguntar si esta recibiendo la imagen 
        url: img.images?.downsized_medium.url
    }
})

     return gifs;

 }