import { createBrowserRouter } from "react-router-dom"

// Views
import Home from './views/Home'
import About from './views/About'
import Store from './views/Store'
import Programs from './views/Programs'
import SignUpIn from './views/SignUpIn'
import Events from "./views/Events"
import Forms from "./views/Forms"


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
    },
    {
        path: "/signup",
        element: <SignUpIn />
    },
    {
        path: "/forms",
        element: <Forms />
    }
])

export default Router
