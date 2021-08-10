
const url_base ='https://api.themoviedb.org/3/';
const language ='es-ES';
const api_key ='a7223a9370b830ebb4d41859e186a0e0';
const image_url_base ='https://image.tmdb.org/t/p/w500/'; ///url base para visualizar las imagenes que devuelve el api


////Función que hace fetch de las peliculas populares
const peliculas_Populares =()=>{
    axios({
        method:'GET',
        url:`${url_base}movie/popular?api_key=${api_key}&language=es-ES`
    }).then(response=>{
        console.log(response.data.results);
    }).catch(error=>console.log(error))
}

///Función que realiza el proceso de busqueda 
///Recibe el parametro query que es la palabra que va a buscar y devuelve las peliculas que contengan esa palabra
const busqueda_peliculas =(query)=>{
    axios({
        method:'GET',
        url:`${url_base}search/movie?api_key=${api_key}&language=es-ES&query=${query}`
    }).then(response=>{
        console.log(response.data.results);
    }).catch(error=>console.log(error));

}

///Función que recibe detalles de una película en especifico recibiendo el ID
const detalles_pelicula=(id)=>{
    axios({
     method:'GET',
     url:`${url_base}movie/${id}?api_key=${api_key}&language=es-ES`
    }).then(response=>{
        console.log(response.data);
    }).catch(error=>console.log(error));
}



peliculas_Populares();
busqueda_peliculas('Suicide Squad');
detalles_pelicula('436969');
 