import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { backgroundImg } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>

<div className="absolute -z-10">
        <img
          src={backgroundImg}
          alt="bg-img"
        />
      </div>
    
    <GptSearchBar />
    <GptMovieSuggestions />
    

    </div>
  )
}

export default GPTSearch