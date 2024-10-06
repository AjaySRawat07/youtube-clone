import { createContext, useContext, useState } from "react";

const UtilContext = createContext(null);

export const UtilContextProvider = ({ children }) =>{
    const [isMobileShow, setIsMobileShow] = useState(false);
    const [isSlide, setIsSlide]  = useState(false);
    const [theme , setTheme ] = useState(true);

    return (<UtilContext.Provider value={{isMobileShow, setIsMobileShow, isSlide, setIsSlide,theme,setTheme}}>
            {children}
        </UtilContext.Provider>)
} 

export const useUtils = () =>{
    const utilsContext = useContext(UtilContext);

    if(!utilsContext) return null;

    return utilsContext;
}