import { useAuth } from "../context/AuthProvider";
import Loading from "./loader/Loading";
import Sidebar from "./Sidebar";
import TopListItem from "./TopListItem";
import Video from "./Video";


const Home = () =>{
    const {data,loading} = useAuth();
    console.log(data);
    return(
    <div className="flex mt-3">
            <Sidebar />
        <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
          <TopListItem /> 
          {loading && <Loading />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-6">
            {/* Home is parent div -> Video is child div */}
            
            {!loading && data.map((item)=>{
                if(item.type !== "video") return false;
                return(
                    <Video key={item.id} video={item?.video}/>
                )
            })}  
        </div>
        </div>
    </div>
    )
}

export default Home;