

import { useDispatch} from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

 const useTrendingMovies = () => {


    const dispatch = useDispatch()

    const getPopularMovies = async() => {
    
    const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS)
    
    const json = await data.json();
    dispatch(addTrendingMovies(json.results))
    
    }
    
    useEffect(()=>{
     getPopularMovies()
    },[]);

}

export default useTrendingMovies;