import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { MyGoals } from "../Pages/MyGoals";
import { Overview } from "../Pages/Overview";
import { Layout } from "../Layout";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'my-goals',
                element: <MyGoals />,
            },
            {
                path: 'overview',
                element: <Overview />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to='/' />,
    },
]);