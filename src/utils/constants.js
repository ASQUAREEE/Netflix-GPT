export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"

export const photoURL = "https://i.pinimg.com/564x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg"

export const backgroundImg = "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY 
    }
  };
  
  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

  export const SUPPORTED_LANGUAGES = [

{
  indentifier: "en",
  name: "English",
},
{
  indentifier: "hindi",
  name: "Hindi",
},
{
  indentifier: "spanish",
  name: "Spanish",
},

  ]

  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY