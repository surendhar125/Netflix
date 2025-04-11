  import { useEffect, useRef, useState } from 'react';
  import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
  import axios, { AxiosResponse } from 'axios';
  import { Link } from 'react-router-dom';
  
  interface TVShow {
    id: number;
    name: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    vote_average: number;
    first_air_date: string;
    [key: string]: any;
  }
  
  interface TMDBResponse {
    page: number;
    results: TVShow[];
    total_pages: number;
    total_results: number;
  }  
  
  interface Props{
    position?: string | null;
    title?: string;
    category?: string;
    page?: number;
  }
  
  const TvShowsList = ({position, title, category, page}: Props) => {
  
    const [apiData, setApiData]=useState<TVShow[]>([]);
  
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const scrollAmount = 300;
  
    //api fetch
    const fetchTvShows = () => {
      axios
        .get<TMDBResponse>(
          `https://api.themoviedb.org/3/tv/popular`,
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWNkMTVjNDMxOWExMDc2MWE1MmVhYTlhYzM2Y2YyNyIsIm5iZiI6MTc0MzE2MjAyOS42NDQsInN1YiI6IjY3ZTY4YWFkNDIxZWI4YzMzMWJhODZlNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GfkeJ0HU99Hi4PH_e51Vq5qQzguTLwpfNvFp8_KN1CM',
            },
          }
        )
        .then((response: AxiosResponse<TMDBResponse>) => {
          setApiData(response.data.results); // Movie list
        })
        .catch((error) => {
          console.error('Error fetching Tv shows:', error);
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
        fetchTvShows();
  
        scrollRef.current?.addEventListener('wheel', handleWheel);
      },[]);
    
  
    return (
      
      <div className= {`${position} px-6 relative`}> 
        <h1 className="mb-4 text-2xl text-white font-bold">{title ? title : "Popular TV Shows"}</h1>
  
        {/* Scroll Left Button */}
        <button className="cursor-pointer hidden md:flex absolute left-2 top-[50%] z-10 bg-black/60 text-white p-2 rounded-full hover:bg-white/20 transition"
          onClick={() => scroll('left')}>
          <FaAngleLeft size={24} />
        </button>
  
        {/* Scroll Right Button */}
        <button className="cursor-pointer hidden md:flex absolute right-2 top-[50%] z-10 bg-black/60 text-white p-2 rounded-full hover:bg-white/20 transition"
          onClick={() => scroll('right')} >
          <FaAngleRight size={24} />
        </button>
  
        {/* Scrollable Card Row */}
        <div ref={scrollRef} className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory focus:outline-none">
          <div className="flex gap-6 min-w-max pb-4">
            {apiData.map((card, index) => (
              <Link to={`/player/${card.id}`} key={index} className="bg-[#141414] rounded-sm overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer w-[150px] md:w-[240px] relative">
              <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt={card.title} 
                className="w-full object-cover object-center"/>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-2">
                <h2 className="text-sm font-semibold truncate">{card.title}</h2>
              </div>
            </Link>
            
            ))}
          </div>
        </div>
  
      </div>
    );
  };
  
  export default TvShowsList;
  