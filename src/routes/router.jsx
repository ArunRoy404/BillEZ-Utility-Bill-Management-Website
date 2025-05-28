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
import TitleProvider from "../providers/TitleProvider";


const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: '/',
                element:
                    <TitleProvider title={"BillEZ | Home"}>
                        <Home></Home>
                    </TitleProvider>
            },
            {
                path: '/bills',
                element:
                    <PrivateRoute>
                        <TitleProvider title={'BillEZ | Bills'} >
                            <Bills></Bills>
                        </TitleProvider>
                    </PrivateRoute>
            },
            {
                path: '/bills/:bill_id',
                element:
                    <PrivateRoute>
                        <BillDetails></BillDetails>
                    </PrivateRoute>
            },
            {
                path: '/my-profile',
                element:
                    <PrivateRoute>
                        <TitleProvider title={'BillEZ | View Profile'}>
                            <Profile></Profile>
                        </TitleProvider>
                    </PrivateRoute>
            },
            {
                path: '/update-profile',
                element:
                    <PrivateRoute>
                        <TitleProvider title={'BillEZ | Update Profile'}>
                            <UpdateProfile></UpdateProfile>
                        </TitleProvider>
                    </PrivateRoute>
            },
            {
                path: '/login',
                element:
                    <TitleProvider title={'BillEZ | Login'}>
                        <Login></Login>
                    </TitleProvider>
            },
            {
                path: '/register',
                element:
                    <TitleProvider title={'BillEZ | Register'}>
                        <Register></Register>
                    </TitleProvider>
            },
            {
                path: '/forgot-password',
                element:
                    <TitleProvider title={'BillEZ | Forgot Password'}>
                        <ForgotPassword></ForgotPassword>
                    </TitleProvider>
            }
        ],
        errorElement: <TitleProvider title={'BillEZ | Error'}><Errorpage></Errorpage></TitleProvider>
    },
]);

export default router