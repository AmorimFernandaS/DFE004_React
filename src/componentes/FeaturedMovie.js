import React from "react";
import "./FeaturedMovie.css";
import { style } from "@mui/system";


// eslint-disable-next-line
export default ({item}) => {
       //trazendo a data
    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push (item.genres[i].name);
    }

    let description = item.overview;

// Verifica se "overview" é uma string válida e não está vazia
    if (description && description.trim() !== '') {
    // Verifica se a descrição tem mais de 200 caracteres para aplicar o truncamento
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }
    } else {
    // Caso "overview" seja vazio, nulo ou indefinido, define a descrição como uma mensagem alternativa
    description = 'Nenhuma descrição disponível.';
    }
      
         return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition:'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`   
        }}>
            <div className="featured--vertical">  
                <div className="featured--horizontal"> 
                    <div className="featured--name">{item.original_name}</div> 
                    <div className="featured--info"> 
                        <div className="featured--points">{item.vote_average.toFixed(1)} pontos </div> 
                        <div className="featured--year">{firstDate.getFullYear()}</div> 
                        <div className="featured--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div> 
                    <div className="featured--description">{description} </div>
                    <div className="featured--buttons">
                        <a href={`/watch/${item.id}`}className="featured--watchbutton"> ➤ Assistir</a>
                        <a href={`/list/add/${item.id}`}className="featured--mylistbutton"> + Minha lista</a>
                    </div>
                    <div className="featured--genres"> <strong>Gêneros:</strong>{genres.join(' , ')}</div>  
                </div>  
            </div>     
        </section>
            
        
    );
}