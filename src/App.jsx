import { Route, Routes } from "react-router-dom";
import VideoPlaying from "./components/VideoPlaying";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home"
import { useAuth } from "./context/AuthProvider";
import { useUtils } from "./context/UtilsProvider";



function App() {
  const {loading, data} = useAuth();
  const {theme,setTheme} = useUtils();
  return (
    <div className= {`${theme ?  "bg-white text-black" : "bg-black text-white"}`}>
      <Navbar />
      <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/search/:searchQuery" element={<Search />}></Route>
          <Route path="/video/:id" element={<VideoPlaying />}></Route>
      </Routes>
    </div>
  )
}

export default App
