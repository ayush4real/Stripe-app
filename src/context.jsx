import React, {useState, useContext} from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links:[]})

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text );
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }

    const openSidebar = ()=> {
        setIsSidebarOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    const closeSidebar = ()=> {
        setIsSidebarOpen(false);
    }

    return(
        <AppContext.Provider value={{isSubmenuOpen, isSidebarOpen, openSubmenu, openSidebar, closeSubmenu, closeSidebar, location, page}} >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
