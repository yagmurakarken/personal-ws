import { Link, useLocation } from "react-router-dom"
import "./navbar.scss"
import { Page } from "../../App"

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="ya-navbar-container">
            <div className="ya-navbar container">
                <Link to="/" className="ya-navbar-brand nostyle-anchor">
                    yakarken
                </Link>
                <Link to="/" className={"ya-navbar-item nostyle-anchor" + (location.pathname === "/" ? " selected" : "")} >home</Link>
                <Link to="about" className={"ya-navbar-item nostyle-anchor" + (location.pathname === "/about" ? " selected" : "")} >about</Link>
            </div>
        </div>


    )
}

export default Navbar

// className = { "..." + (location.pathname === "about" ? " selected" : "") }