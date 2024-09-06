import logo from "./../assets/logo.svg"
import facebook from "./../assets/icon-facebook.svg"
import instagram from "./../assets/icon-instagram.svg"
import twitter from "./../assets/icon-twitter.svg"
import pinterest from "./../assets/icon-pinterest.svg"
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className="content">
                <img src={logo} alt="logo" />
                <div className="options">
                    <p>About</p>
                    <p>Services</p>
                    <p>Projects</p>
                </div>
                <div className="social">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={pinterest} alt="pinterest" />
                </div>
            </div>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://github.com/savchrisostomidhs">savchrisostomidhs</a>.
            </div>
        </footer>
    )
}

export default Footer