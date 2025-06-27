import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Mens from "../Perfumes/Mens";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/mens',
                element: <Mens></Mens>
            }
        ]
    }
])

export default router;