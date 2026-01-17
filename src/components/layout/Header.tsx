'use client'
import Link from "next/link"
import { useEffect, useState } from "react"

interface HeaderProps {
    handleOpen: () => void;
    headerStyle?: string;
    isSidebarOpen?: boolean;
}

const Header = ({ handleOpen, headerStyle, isSidebarOpen }: HeaderProps) => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        }

        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)
    }, [scroll])

    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/" className="d-flex">
                                    <span className="text-heading-2 color-brand-1">AGA26</span>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li>
                                            <Link href="/" className="active">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/iamuc">IAMUC</Link>
                                        </li>
                                        <li>
                                            <Link href="/committees">Committees</Link>
                                        </li>
                                        <li>
                                            <Link href="/travel-and-accommodations">Travel and Accommodations</Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/iamus">IAMUS</Link>
                                        </li> */}
                                        {/* <li>
                                            <Link href="/programs">Programs</Link>
                                        </li> */}
                                        {/* <li>
                                            <Link href="/registration">Registration</Link>
                                        </li> */}
                                        {/* <li>
                                            <Link href="/travel">Travel</Link>
                                        </li> */}
                                        <li>
                                            <Link href="/about">About</Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/archives">Archives</Link>
                                        </li> */}
                                    </ul>
                                </nav>
                                <div className={`burger-icon burger-icon-white d-block d-xl-none ${isSidebarOpen ? 'd-none' : ''}`} onClick={handleOpen}>
                                    <span className="burger-icon-top" />
                                    <span className="burger-icon-mid" />
                                    <span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                        {/* <div className="header-right">
                            <div className="block-signin">
                                <Link href="/contact" className="btn btn-default hover-up icon-arrow-right">Get Started</Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
