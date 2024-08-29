import { Route, Routes } from "react-router-dom";
import VideoPlaying from "./components/VideoPlaying";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Home from "./components/Home"
import { useAuth } from "./context/AuthProvider";



function App() {
  const {loading, data} = useAuth();
  console.log(loading);
  console.log(data);
  return (
    <div>
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
