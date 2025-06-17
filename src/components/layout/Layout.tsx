'use client'
import { ReactNode, useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

interface LayoutProps {
    headerStyle?: string;
    children: ReactNode;
}

const Layout = ({ headerStyle, children }: LayoutProps) => {
    const [openSidebar, setOpenSidebar] = useState(false)

    const handleOpen = () => {
        setOpenSidebar(true)
        document.body.classList.add("mobile-menu-active")
    }

    const handleClose = () => {
        setOpenSidebar(false)
        document.body.classList.remove("mobile-menu-active")
    }

    return (
        <>
            <div className="body-overlay-1" onClick={handleClose} />
            <Header handleOpen={handleOpen} headerStyle={headerStyle} isSidebarOpen={openSidebar} />
            <Sidebar openClass={openSidebar ? "sidebar-visible" : ""} handleClose={handleClose} isOpen={openSidebar} />
            <main className="main">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
