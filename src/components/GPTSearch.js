import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { backgroundImg } from '../utils/constants'

const GPTSearch = () => {
  return (
<><div className="fixed -z-10">
        <img
        className='h-screen object-cover'
          src={backgroundImg}
          alt="bg-img"
        />
      </div>

    <div>

    <GptSearchBar />
    <GptMovieSuggestions />
    

    </div>
    </>
  )
}

export default GPTSearch