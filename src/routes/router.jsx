import { createBrowserRouter, } from "react-router";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
    },
]);

export default router