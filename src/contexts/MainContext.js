import { createContext, useState } from "react"
import Header from "../components/Header"



export const MainContext = createContext()

const MainProvider = ({ children }) => {
    const [isLogedIn, setIsLogedIn] = useState(true)

    const data = {
        isLogedIn, setIsLogedIn
    }

    return (
        <MainContext.Provider value={data}>
            <Header />
            {children}
        </MainContext.Provider>
    )
}


export default MainProvider