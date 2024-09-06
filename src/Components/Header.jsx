import { useState } from "react"
import iconHamburger from "./../assets/icon-hamburger.svg"
import logo from "./../assets/logo.svg"
import arrow from "./../assets/icon-arrow-down.svg"
import "./Header.css"

function Header() {
    const [isFlex, setIsflex] = useState(true);

    function handleClick() {
        setIsflex(!isFlex);
    }

    window.addEventListener("resize", () => {
        if (document.body.clientWidth > 900) {
            setIsflex(true);
        } else {
            setIsflex(false);
        }
    });

    return (
        <header>
            <nav>
                <img src={logo} alt="logo" />
                <div className="burger js-burger" onClick={handleClick}>
                    <img src={iconHamburger} alt="icon hamburger" />
                </div>
                {isFlex && (
                    <ul className="js-menu">
                        <li>About</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                )}
            </nav>
            <h1>We are creatives</h1>
            <img src={arrow} alt="arrow" />
        </header>
    )
}

export default Header