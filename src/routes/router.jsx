import { createBrowserRouter, } from "react-router";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: '/',
                element: <h1>home</h1>
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