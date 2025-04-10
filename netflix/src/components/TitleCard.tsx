import { useEffect, useRef, useState } from 'react';
import card_data from '../assets/cards/Cards_data';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';

type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  backdrop_path: string;
  // Add more fields if needed
};

type MovieResponse = {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
};


interface Props{
  position?: string | null;
  title?: string;
  category: string;
  page?: number;
}
const TitleCard = ({position, title, category, page}: Props) => {

  const [apiData, setApiData]=useState<Movie[]>([]);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 300;

  //api fetch
  const fetchNowPlayingMovies = () => {
    axios
      .get<MovieResponse>(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page?? 1}`,
        {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWNkMTVjNDMxOWExMDc2MWE1MmVhYTlhYzM2Y2YyNyIsIm5iZiI6MTc0MzE2MjAyOS42NDQsInN1YiI6IjY3ZTY4YWFkNDIxZWI4YzMzMWJhODZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GfkeJ0HU99Hi4PH_e51Vq5qQzguTLwpfNvFp8_KN1CM',
          },
        }
      )
      .then((response: AxiosResponse<MovieResponse>) => {
        setApiData(response.data.results); // Movie list
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };
  


  // Function to scroll left or right by button
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
 
      });
    }
  };

    // Handle mouse wheel to scroll horizontally
  const handleWheel = (e: WheelEvent) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: e.deltaY < 0 ? -scrollAmount : scrollAmount, behavior: 'smooth'});
    }
  };


    useEffect(() => {
      fetchNowPlayingMovies();

      scrollRef.current?.addEventListener('wheel', handleWheel);
    },[]);
  

  return (
    <div className= {`${position} px-6 relative`}> 
      <h1 className="mb-4 text-2xl text-white font-bold">{title ? title : "Popular on Netflix"}</h1>

      {/* Scroll Left Button */}
      <button className="cursor-pointer absolute left-2 top-[50%] z-10 bg-black/60 text-white p-2 rounded-full hover:bg-white/20 transition"
        onClick={() => scroll('left')}>
        <FaAngleLeft size={24} />
      </button>

      {/* Scroll Right Button */}
      <button className="cursor-pointer absolute right-2 top-[50%] z-10 bg-black/60 text-white p-2 rounded-full hover:bg-white/20 transition"
        onClick={() => scroll('right')} >
        <FaAngleRight size={24} />
      </button>

      {/* Scrollable Card Row */}
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory focus:outline-none">
        <div className="flex gap-6 min-w-max pb-4">
          {apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} key={index} className="bg-[#141414] rounded-sm overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer min-w-[240px] relative">
              <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt={card.title} className="w-full h-[160px] object-cover  "/>
              <h2 className="absolute bottom-0 text-white text-sm font-semibold backdrop-blur-3xl w-full bg-black/60 p-2">
                {card.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default TitleCard;
