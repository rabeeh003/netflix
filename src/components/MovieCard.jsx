import React, { useState } from 'react';
import { ApiKey, ImageUrl } from '../constants/constant';
import Axios from '../utils/axios';
import YouTube from 'react-youtube';


function MovieCard({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoId, setVideoId] = useState();
  const [selectedMovieTitle, setSelectedMovieTitle] = useState('');

  const openModal = (title) => {
    setSelectedMovieTitle(title);
    console.log("id",movie.id);

    Axios.get(`/movie/${movie.id}/videos?api_key=${ApiKey}&language=en-US`).then(res => {
      setVideoId(res.data.results[0].key)
      console.log(res.data.results);
    })
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovieTitle('');
    setIsModalOpen(false);
  };

  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='flex-none'>
      <img
        className='w-40 cursor-pointer'
        src={movie ? ImageUrl + movie.poster_path : ''}
        alt="Movie name"
        onClick={() => openModal(movie.title)}
      />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="relative bg-white bg-opacity-30 rounded-lg p-8 w-[90vh]">
            <h2 className="text-2xl font-semibold mb-4">{selectedMovieTitle}</h2>
            <div className="aspect-w-16 aspect-h-9">
              {videoId ? (
            <YouTube videoId={videoId} opts={opts} />
            ) : "Video not fond"}
            </div>
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 p-1 hover:bg-red-500 rounded-md text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
