import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/signin/SignIn";
import AllFoods from "../pages/AllFoods/AllFoods";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddFood from "../pages/AddFood/AddFood";
import FoodDetails from "../pages/DetailsPage/FoodDetails";
import PrivateRoute from "../components/PrivateRoute";
import ManageFoods from "../pages/ManageFoods/ManageFoods";
import MyFoodRequests from "../pages/MyFoodRequests/MyFoodRequests";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/signup',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <SignIn></SignIn>
        },
        {
            path: '/available-foods',
            element: <AllFoods></AllFoods>
        },
        {
            path: '/add-food',
            element: (
                <PrivateRoute>
                    <AddFood></AddFood>
                </PrivateRoute>
            )
        },
        {
            path: '/available-foods',
            element: <AllFoods></AllFoods>
        },
        {
            path: '/foods/:id',
            element:  (
                <PrivateRoute>
                    <FoodDetails></FoodDetails>
                </PrivateRoute>
            )
        },
        {
            path: '/manage-foods',
            element: (
                <PrivateRoute>
                    <ManageFoods></ManageFoods>
                </PrivateRoute>
            )
        },
        {
            path: '/my-requests',
            element: (
                <PrivateRoute>
                    <MyFoodRequests></MyFoodRequests>
                </PrivateRoute>
            )
        },
        {
            path: '/update-food/:id',
            element: (
                <PrivateRoute>
                    <UpdateFood></UpdateFood>
                </PrivateRoute>
            )
        },
    ]
  },
]);

export default router;
