import React from 'react'

import {useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'


//fetch trailer video and updating the store with trailer video data
const VideosBackground = ({movieId}) => {

 const trailerVideo = useSelector(store=>store.movies?.trailerVideo)

 useMovieTrailer(movieId);

  return (
    <div>
      <iframe
      className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?&autoplay=1&mute=1"}
        title="Aquaman and the Lost Kingdom | Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideosBackground