'use client'
import Link from "next/link"

interface SidebarProps {
    openClass: string;
    handleClose: () => void;
    isOpen: boolean;
}

const Sidebar = ({ openClass, handleClose, isOpen }: SidebarProps) => {
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style ${openClass}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <div className="content">
                                <h6 className="user-name text-heading-4 color-brand-1">
                                    AGA26
                                </h6>
                            </div>
                        </div>
                        <div className="mobile-header-close">
                            <div className={`burger-icon burger-icon-white ${isOpen ? 'burger-close' : ''}`} onClick={handleClose}>
                                <span className="burger-icon-top" style={{ transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)' }} />
                                <span className="burger-icon-mid" style={{ transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)' }} />
                                <span className="burger-icon-bottom" style={{ transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)' }} />
                            </div>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li>
                                            <Link href="/" className="active" onClick={handleClose}>Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/iamuc" onClick={handleClose}>IAMUC</Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/iamus" onClick={handleClose}>IAMUS</Link>
                                        </li>
                                        <li>
                                            <Link href="/committees" onClick={handleClose}>Committees</Link>
                                        </li>
                                        <li>
                                            <Link href="/programs" onClick={handleClose}>Programs</Link>
                                        </li>
                                        <li>
                                            <Link href="/registration" onClick={handleClose}>Registration</Link>
                                        </li>
                                        <li>
                                            <Link href="/travel" onClick={handleClose}>Travel</Link>
                                        </li> */}
                                        <li>
                                            <Link href="/about" onClick={handleClose}>About</Link>
                                        </li>
                                        <li>
                                            <Link href="/archives" onClick={handleClose}>Archives</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
