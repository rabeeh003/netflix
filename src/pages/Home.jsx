import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import MovieCard from '../components/MovieCard'
import Axios from '../utils/axios'
import { ApiKey } from '../constants/constant'

function Home() {
  const [banner, setBanner] = useState()
  const [trending, setTrending] = useState([])
  const [drama, setDrama] = useState([])
  const [action, setAction] = useState([])
  useEffect(() => {
    const random = Math.floor(Math.random() * 20);
    Axios.get(`trending/all/week?api_key=${ApiKey}&language=en-US`).then((res) => {
      setBanner(res.data.results[random])
      setTrending(res.data.results)
      console.log("Trending : ", res.data);
    })
    Axios.get(`discover/tv?api_key=${ApiKey}&with_networks=213`).then(res => {
      setDrama(res.data.results)
      console.log("drama : ", res.data.results);
    })
    Axios.get(`discover/movie?api_key=${ApiKey}&with_genres=28`).then(res => {
      setAction(res.data.results)
      console.log("Action :",res.data.results);
    })
  }, [])
  return (
    <div>
      <Banner banner={banner} />
      <div>
        <h3 className='my-3 text-2xl'>Trending Now</h3>
        <div className='flex overflow-x-scroll w-full gap-4 '>
          {trending.map((movie, index) => <MovieCard movie={movie} key={index} />)}
        </div>
      </div>
      <div>
        <h3 className='my-3 text-2xl'>Action & Adventure</h3>
        <div className='mt-3 flex overflow-x-scroll w-full gap-4 '>
          {action.map((movie, index) => <MovieCard movie={movie} key={index} />)}
        </div>
      </div>
      <div>
        <h3 className='my-3 text-2xl'>Classic Dramas</h3>
        <div className='mt-3 flex overflow-x-scroll w-full gap-4 '>
          {drama.map((movie, index) => <MovieCard movie={movie} key={index} />)}
        </div>
      </div>
    </div>
  )
}

export default Home