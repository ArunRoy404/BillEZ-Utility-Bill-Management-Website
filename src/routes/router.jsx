import { createBrowserRouter, } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Bills from "../pages/Bills";
import LoaderRing from "../components/LoaderRing";
import BillDetails from "../components/BillCard/BillDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Profile from "../pages/Profile";


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
                Component: Bills
            },
            {
                path: '/bills/:bill_id',
                Component: BillDetails,
                loader: () => fetch('../bills.json'),
                hydrateFallbackElement: <div className="h-[80vh] flex items-center justify-center"><LoaderRing></LoaderRing></div>
            },
            {
                path: '/my-profile',
                Component: Profile
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/forgot-password',
                Component: ForgotPassword
            }
        ],
        errorElement: <h1>error</h1>
    },
]);

export default router