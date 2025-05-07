import { createBrowserRouter, } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Bills from "../pages/Bills";
import LoaderRing from "../components/LoaderRing";
import BillDetails from "../components/BillCard/BillDetails";


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
                Component: Bills,
                loader: () => fetch('../bills.json'),
                hydrateFallbackElement: <div className="h-[80vh] flex items-center justify-center"><LoaderRing></LoaderRing></div>
            },
            {
                path: '/bills/:bill_id',
                Component: BillDetails,
                loader: () => fetch('../bills.json'),
                hydrateFallbackElement: <div className="h-[80vh] flex items-center justify-center"><LoaderRing></LoaderRing></div>
            },
            {
                path: '/my_profile',
                element: <h1>profile</h1>
            }
        ],
        errorElement: <h1>error</h1>
    },
]);

export default router