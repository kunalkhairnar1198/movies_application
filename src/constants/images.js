const IMAGES ={
    BG_LOGIN_IMG: require('../assets/images/bgmovie.jpg') 
    
}

export default IMAGES;

export const image500 =path=>path?`https://image.tmdb.org/t/p/w500/${path}`:null

export const getLogoImage = (path) =>  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
  