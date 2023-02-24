import { createBrowserRouter } from "react-router-dom"

// Views
import Home from './views/Home'
import About from './views/About'
import Store from './views/Store'
import Programs from './views/Programs'
import SignUpIn from './views/SignUpIn'
import Events from "./views/Events"


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/store",
        element: <Store />
    },
    {
        path: "/events",
        element: <Events />
    },
    {
        path: "/programs",
        element: <Programs />
    },
    {
        path: "/login",
        element: <SignUpIn />
    }
])

export default Router
