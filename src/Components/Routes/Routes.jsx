import { createBrowserRouter } from "react-router";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <h1>This is home.</h1>
            }
        ]
    }
])

export default router;