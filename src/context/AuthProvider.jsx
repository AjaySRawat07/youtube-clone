import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

// create context
export const AuthContext = createContext();

// pass children{Navbar,siderbar,..All The Components are children}element to parents
export default function AuthProvider({children}){
    // create states globally
    const [loading,setLoading] = useState(false);
    const [data , setData ] = useState([]);
    const [value, setValue] = useState("New");
    
    // changes ko dekhaane ka lea
    useEffect(()=>{
        fetchAllData(value);
    },[value])

    // data of rapid api then call function
    function fetchAllData(query){
        setLoading(true);
        fetchData(`search/?q=${query}`).then(({contents}) => {
            setData(contents);
            setLoading(false);
        })
    }

    return(
        <AuthContext.Provider value={{loading,data,value,setValue}}>
            {children}
        </AuthContext.Provider>
    )
}
// pass context values (custom hook)
export const useAuth = () => useContext(AuthContext);