import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ReadmoreDetails from "../pages/ReadmoreDetails";
import PrivetRoute from "../privetroute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <PrivetRoute><About></About></PrivetRoute>,
            },
            {
                path: "/blog",
                element: <PrivetRoute><Blogs></Blogs></PrivetRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },

            {
                path: "/moredetails/:id",
                element: <PrivetRoute><ReadmoreDetails></ReadmoreDetails></PrivetRoute>,
            },

        ],
    },
]);
export default router;