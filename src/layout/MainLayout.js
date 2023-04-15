import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { AuthStatus } from "../components/AuthStatus";
import { Suspense } from "react";

export function MainLayout() {
    return (
        <>
        <AuthStatus/>
        <Header/>
        <Suspense fallback="Loading...">
          <Outlet/>  
        </Suspense>
        </>
    )
}