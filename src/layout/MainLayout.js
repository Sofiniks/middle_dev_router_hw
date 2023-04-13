import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { AuthStatus } from "../components/AuthStatus";

export function MainLayout() {
    return (
        <>
        <AuthStatus/>
        <Header/>
        <Outlet/>
        </>
    )
}