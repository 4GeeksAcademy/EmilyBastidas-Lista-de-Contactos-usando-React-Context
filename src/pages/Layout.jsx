import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import  Navbar  from "../components/Navbar"

// Componente base que mantiene la navbar y el footer en toda la página y la funcionalidad de scroll al inicio.

export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
                <Outlet />
        </ScrollToTop>
    )
}