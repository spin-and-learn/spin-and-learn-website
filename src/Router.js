import { createBrowserRouter } from "react-router-dom"

// Views
import Home from './views/Home'
import About from './views/About'
import Store from './views/Store'
import Programs from './views/Programs'
import SignUpIn from './views/SignUpIn'
import Events from "./views/Events"
import Forms from "./views/Forms"
import Contact from "./views/Contact"


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
        path: "/contact",
        element: <Contact />
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
        path: "/district",
        element: <Programs />
    },
    {
        path: "/students",
        element: <Programs />
    },
    {
        path: "/leaders",
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
