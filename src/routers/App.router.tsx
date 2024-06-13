import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "../pages/error/error-page";
import SignUp from "../pages/auth/sign-up/sign-up";
import Login from "../pages/auth/login/Login";
import Profile from "../pages/user/personal-information/personal-information";
import ForgotPassword from "../pages/auth/reset-password/reset-password";
import {useUserLogin } from "../context/authentication";
// import ReviewPage from "../pages/review_page";
// import ReviewResult from "../pages/review_result";
import HomePage from "../pages/home/HomeComponent";

const AppRouter = () => {
  const authUserLogin = useUserLogin();


  const routesLogined = [
    {
      path: "/",
      element: <HomePage />,
      children:[
        {
          path: "/profile",
          element: <Profile/>,
        },
        {
          path: "/logout",
          element: <div>Logout</div>,
        },
    ],
    }
  ]

//   const routesForOfficerOnly = [
//     {
//       path: "/clientlist",
//       element: <div>clientList</div>,
//     }
//     // ,
//     // {
//     //   path: "/reviewresult",
//     //   element: <ReviewResult/>,
//     // },
//   ]

   // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ];

  const router = createBrowserRouter([
    ...routesForNotAuthenticatedOnly,
    // ...(authUserLogin?.role === 'User'  ? routesForNormalUserOnly: []),
    // ...(authUserLogin?.role === 'Officer'  ? routesForOfficerOnly: []),
    ...(authUserLogin != null  ? routesLogined: []),

  ])
  return <RouterProvider router={router} />;
}
export default AppRouter