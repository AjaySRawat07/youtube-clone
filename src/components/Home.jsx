import { useAuth } from "../context/AuthProvider";
import Sidebar from "./Sidebar";
import Video from "./Video";


const Home = () =>{
    const {data} = useAuth();
    console.log(data);
    return(
    <div className="flex mt-24">
            <Sidebar />
        <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
            {/* Home is parent div -> Video is child div */}
            {data.map((item)=>{
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