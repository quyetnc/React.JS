import pagesRoutes from "./pages/pages.routes";
import {createBrowserRouter, Navigate} from "react-router-dom";

const appRouter = createBrowserRouter([
    {
        path: '',
        element: <Navigate to="/logins" replace />
    },
    ...pagesRoutes
])


export default appRouter