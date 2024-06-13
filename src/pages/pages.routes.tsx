import HomeComponent from "./home/HomeComponent";
import userRoutes from "./user/user.routes";
import Pages from "./pages";
import authRoutes from "./auth/auth.routes";
import Login from "./auth/login/Login";


const pageRoutes = [
    {
        path: 'pages',
        element: <Pages/>,
        children: [
            {
                path: 'home',
                element: <HomeComponent/>
            },
            ...authRoutes,
            ...userRoutes
        ]
    },
]

export default pageRoutes;