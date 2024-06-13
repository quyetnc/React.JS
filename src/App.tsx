import React from 'react';
import './App.css';
import { RouterProvider, } from "react-router";
import { AuthenticatedProvider } from "./shared/Authenticated";
import AuthProvider from './context/authentication';
import AppRouter from './routers/App.router';

const App = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
 
    )
}

export default App;

{/* <Routes >
<Route path="/" element={<Login />} />

</Routes> */}
