import './App.css';
import MovieRow from './componentes/MovieRow';
import React, { useEffect, useState } from 'react';
import tmdb from './tmdb.js';
import FeaturedMovie from './componentes/FeaturedMovie';
import Header from './componentes/Header';


// eslint-disable-next-line
export default() => {

  const [movieList, setMovielist] = useState([]);
  const[FeatureData, setFeatureData] = useState(null);
  const[blackHeader, setBlackHeader] = useState(false);
  useEffect(()=>{
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovielist(list);

      //pegando Filme em Destaque
      let originals = list.filter(i=>i.slug ==="originals");
      let randomchosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomchosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
      
    }

    loadAll();  
  }, []);
    //trabalhando no Scroll 
  useEffect(()=> {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

return(
<div className="page">

  <Header black={blackHeader} />

  {FeatureData &&
    <FeaturedMovie item={FeatureData}/>
  
  }
<div className= "content-trailer">
</div>


<section className="lists">
    {movieList.map((item,key)=> (
          <MovieRow
             key={key} 
             title={item.title}
            items={item.items}/>
     ))}

</section>

<footer> 
  By: Fernanda Amorim ❤︎ <br/>
  Direitos de imagem para Netflix <br/>
  Dados do site Themoviedb.org
  
  </footer>
  

  {movieList.length <= 0 &&
    <div className='carregando'>
      <img src="https://media.tenor.com/-VEwyQaf3s8AAAAM/netflix-netflix-and-chill.gif"></img>
    </div>
  }
</div>
//caso ocorra delay
);
}
  