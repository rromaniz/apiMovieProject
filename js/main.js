
const url_base ='https://api.themoviedb.org/3/';
const language ='es-ES';
const api_key ='a7223a9370b830ebb4d41859e186a0e0';
const image_url_base ='https://image.tmdb.org/t/p/w500'; ///url base para visualizar las imagenes que devuelve el api
const container_cards = document.getElementById('principal');



// función que crea las cards para mostrar las películas
const createCards =(pelicula,deck_num)=>{
    let deck = document.getElementById(`deck-${deck_num}`);
    //card
    let movieCard = document.createElement('div');
    movieCard.className="card";
    movieCard.style.width="14rem";
    //imagen
    let imageCard = document.createElement('img');
    imageCard.className ="card-img-top";
    imageCard.src =`${image_url_base}${pelicula.poster_path}`;
    //body
    let bodyCard = document.createElement('div');
    bodyCard.className ="body-card text-center";
    //Títulos y texto
    let titleCard = document.createElement('p');
    titleCard.className="title";
    titleCard.innerHTML =`${pelicula.title}`;
    let bodyText = document.createElement('p');
    bodyText.className="vote";
    bodyText.innerHTML=`&#11088; ${pelicula.vote_average}| ${pelicula.release_date}`;

    bodyCard.appendChild(titleCard);
    bodyCard.appendChild(bodyText);
    movieCard.appendChild(imageCard);
    movieCard.appendChild(bodyCard);
    deck.appendChild(movieCard);

}

////Función que hace fetch de las peliculas populares
const peliculas_Populares =()=>{
    axios({
        method:'GET',
        url:`${url_base}movie/popular?api_key=${api_key}&language=es-ES`
    }).then(response=>{
        console.log(response.data.results);
        let count=0;
        let deck_number =0;
        response.data.results.forEach((pelicula,index) => {
            createCards(pelicula,deck_number);
            count++;
            if(count%5 == 0){
            deck_number++;
            new_deck = document.createElement('div');
            new_deck.className='card-deck';
            new_deck.id=`deck-${deck_number}`;
            container_cards.appendChild(new_deck);
            }                  
        });
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