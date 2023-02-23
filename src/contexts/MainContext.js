import { createContext } from "react"



export const MainContext = createContext()

const MainProvider = ({ children }) => {

    const data = {

    }

    return (
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}


export default MainProvider