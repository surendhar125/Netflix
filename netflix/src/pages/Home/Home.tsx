import NavBar from "../../components/NavBar"
import hero_banner from '../../assets/hero_banner.jpg'
import hero_caption from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from "../../components/TitleCard"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <div>
      <NavBar/>
      
      <div className="relative " style={{ maskImage: "linear-gradient(to right, transparent, black 75%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 75%)" }}>
        <img src={hero_banner} alt="" className="w-full "/>
      </div>

      <div className="absolute w-full pl-[6%] bottom-55">
        <img src={hero_caption} alt="" className="w-[90%] max-w-[420px] mb-[30px]"/>
        <p className="max-w-[700px] text-[17px] mb-[20px]">Discovering his ties to a secreat ancient order, a yound man living in modern Istanbul embarks on a quest to save tjhe city from an immortal enemy. </p>
      <div className="flex gap-[10px] mb-[50px]">
        <button className="inline-flex items-center gap-2 text-[15px] py-2 px-10 bg-white rounded-[4px] text-black font-bold cursor-pointer hover:bg-[#ffffffbf] active:scale-50 transition-all"><img src={play_icon} alt="" className="w-[25px]"/>Play</button>
        <button className="inline-flex items-center gap-2 text-[15px] py-2 px-10 bg-[#6d6d6eb3] rounded-[4px] text-white font-bold cursor-pointer hover:bg-[#6d6d6e66] active:scale-50 transition-all"><img src={info_icon} alt=""  className="w-[25px]"/>More Info</button>
      </div>
      </div>
      
      <TitleCard position="mt-[-250px] " category="popular"  />
      <TitleCard position="mt-[50px] " title="Blockbuster Movie" category="top_rated"/>
      <TitleCard title="Only on Netflix" category="popular" page={2}/>
      <TitleCard title="Upcoming" category="upcoming"/>
      <TitleCard title="Top Pics for you" category="now_playing"/>

      <Footer/>
    </div> 

  )
}

export default Home