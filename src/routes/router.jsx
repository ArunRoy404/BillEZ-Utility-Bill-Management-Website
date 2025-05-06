import { createBrowserRouter, } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/bills',
                element: <h1>hello</h1>
            },
            {
                path: '/my-profile',
                element: <h1>profile</h1>
            }
        ],
        errorElement: <h1>error</h1>
    },
]);

export default router