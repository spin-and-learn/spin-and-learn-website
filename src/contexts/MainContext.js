import { createContext, useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"



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
            <Footer />
        </MainContext.Provider>
    )
}


export default MainProvider