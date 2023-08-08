import { createContext, useState } from "react"
import Header from "../components/Header"



export const MainContext = createContext()

const MainProvider = ({ children }) => {
    const [isLogedIn, setIsLogedIn] = useState(false)
    const [isOpen, setOpen] = useState(false)

    const data = {
        isLogedIn, setIsLogedIn,
        isOpen, setOpen
    }

    return (
        <MainContext.Provider value={data}>
            <Header />
            {children}
        </MainContext.Provider>
    )
}


export default MainProvider