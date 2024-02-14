import TopBar from "../components/TopBar"
import Home from "../components/Home"
import CreateUser from "../components/CreateUser"
import Edit from "../components/Edit"
import { Navigate } from "react-router-dom"
import Dashboard from "../components/Dashboard"
import ShowMore from "../components/ShowMore"

const AppRoutes = [
    {
        path: "/",
        exact: true,
        element: <><TopBar/> <Home/></>
    },

    {
        path: "/dashboard",
        exact: true,
        element: <><TopBar/><Dashboard/></>
    },
    {
        path: "/create-user",
        exact: true,
        element: <><TopBar/><CreateUser/></>
    },
    {
        path: "/edit/:id",
        exact: true,
        element: <><TopBar/><Edit/></>
    },
    {
        path: "/show-more/:id",
        exact: true,
        element: <><TopBar/><ShowMore/></>
    },
    {
        path: "/*",
        exact: false,
        element: <Navigate to="/" />
    },
]

export default AppRoutes