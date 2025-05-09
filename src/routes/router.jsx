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
import PrivateRoute from "./PrivateRoute";
import Errorpage from "../pages/Errorpage/Errorpage";
import UpdateProfile from "../pages/UpdateProfile";


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
                element: <PrivateRoute><Bills></Bills></PrivateRoute>
            },
            {
                path: '/bills/:bill_id',
                element: <PrivateRoute><BillDetails></BillDetails></PrivateRoute>
            },
            {
                path: '/my-profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/update-profile',
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
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
        errorElement: <Errorpage></Errorpage>
    },
]);

export default router