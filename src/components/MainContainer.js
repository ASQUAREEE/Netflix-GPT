import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideosBackground from './VideosBackground'

const MainContainer = () => {

const movies = useSelector((store)=> store.movies?.nowPlayingMovies)
if(!movies) return;


const mainMovie = movies[0];
const {original_title, overview, id} = mainMovie;

  return (
    <div className="pt-[30%] md:pt-0 bg-black md:bg-transparent">
    
    <VideoTitle title={original_title} overview = {overview}/>
    <VideosBackground movieId={id}/>
    
    </div>
  )
}

export default MainContainer