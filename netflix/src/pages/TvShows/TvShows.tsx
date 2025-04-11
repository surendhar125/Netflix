import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import TvShowsList from "../../components/TvShowsList"

const TvShows = () => {
  return (
    <div>
      <NavBar/>
      <div className="pt-20">
        <TvShowsList />
      </div>
      <Footer/>
    </div> 

  )
}

export default TvShows