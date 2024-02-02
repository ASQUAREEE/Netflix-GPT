import useNowPlayingMovies from "../hooks/useNowPlaingMovies"
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from "react-redux";
const Browse = () => {

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);

  useNowPlayingMovies();
  
  usePopularMovies();

  useUpcomingMovies();
  useTrendingMovies();




  return (
    <div>
    <Header />
    {
      showGptSearch? <GPTSearch /> : <><MainContainer />

<SecondaryContainer />
</>
    }
     
     

    
      
</div>


  )
}

export default Browse