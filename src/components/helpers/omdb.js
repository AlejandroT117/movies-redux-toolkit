const API_KEY = process.env.REACT_APP_API_KEY || "af85fb42"
console.log(API_KEY)

export const getByTitle = async (title)=>{
  try{
    const data = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`)
    const dataJson = await data.json()

    return dataJson
  }catch(e){
    return e
  }
}