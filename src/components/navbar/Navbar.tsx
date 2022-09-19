import { Link, useLocation } from "react-router-dom"
import "./navbar.scss"
import { Page } from "../../App"

interface NavbarProps {
    page: Page;
    setPage: Function;
}

const Navbar = (props: NavbarProps) => {
    const location = useLocation()
    return (
        <div className="ya-navbar">
            <div className="ya-navbar-brand">
                yakarken
            </div>
            <Link to="/" className={"ya-navbar-item nostyle-anchor" + (props.page === "home" ? " selected" : "")} onClick={() => props.setPage("home")}>home</Link>
            <Link to="about" className={"ya-navbar-item nostyle-anchor" + (props.page === "about" ? " selected" : "")} onClick={() => props.setPage("about")}>about</Link>
            {/* <Link to="/" className={"ya-navbar-item nostyle-anchor" + (location.pathname === "/" ? " selected" : "")} >home</Link>
            <Link to="about" className={"ya-navbar-item nostyle-anchor" + (location.pathname === "/about" ? " selected" : "")} >about</Link> */}
        </div>

    )
}

export default Navbar

// className = { "..." + (location.pathname === "about" ? " selected" : "") }