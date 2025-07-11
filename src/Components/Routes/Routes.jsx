import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Mens from "../Perfumes/Mens";
import Womens from "../Perfumes/Womens";
import Brands from "../Brands/Brands";
import MyCart from "../MyCart/MyCart";

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
            },
            {
                path: '/womens',
                element: <Womens></Womens>
            },
            {
                path: '/brands',
                element: <Brands></Brands>
            },
            {
                path: '/mycart',
                element: <MyCart></MyCart>
            }
        ]
    }
])

export default router;