const API_KEY = 'fc10a7a13d8b857078e17b83a0e6751e';
const API_BASE = 'https://api.themoviedb.org/3';



//retornar o json
const basicFetch = async (endpoint) => {// recebe a url
    const req = await fetch(`${API_BASE}${endpoint}`); //recebe a resposta 
    const json = await req.json();
    return json;

}
// eslint-disable-next-line
export default{
    
    getHomeList: async () => { // função assincrona que ira nos retornar um array
        return [
            { // objetos
                slug: "originals",
                title: "Originais",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)//filtro

            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFetch(`/trending/all/week?languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};
    
        if(movieId) {
            switch(type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
                default:
                    info = null;
                break;
            }
        }
    
        return info;
        
        }
    };