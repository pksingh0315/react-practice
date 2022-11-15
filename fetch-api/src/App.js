import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState,useCallback,useEffect } from 'react';

function App() {
  const [movies,setMovies]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [error,setError]=useState(null)

 let url='https://swapi.dev/api/films/'
  const fetchData= useCallback(async()=>{
    setIsLoading(true)
    setError(null)
    try{
      let response=await fetch(url)
      //console.log(response)
      if(!response.ok){
        throw new Error('Something Went Wrong!')
      }
      let data=await response.json()
      //console.log(data.results)
      const movieList=data.results.map((ele)=>{
        return {
          id:ele.episode_id,
          title:ele.title,
          releaseDate:ele.release_date,
          openingText:ele.opening_crawl
  
        }
      })
      setMovies(movieList)
      
       //console.log(movieList)
    }catch(Error){
      setError(Error.message)
    }
    setIsLoading(false)
  }, [url])

  useEffect(()=>{fetchData()},[fetchData])
//****************** */
  let content=<p>No Data Found</p>

  if(error){
    content=<p>{error}</p>
  }
  if(isLoading){
    content=<p>Loading...</p>
  }
  if(movies.length>0){
  
    content=<MoviesList movies={movies} />
  
}
  
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchData}>Fetch Movies</button>
      </section>
      <section>{content}</section>
     
      
    </React.Fragment>
  );
}

export default App;
