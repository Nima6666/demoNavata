import surgeon from "../assets/surgeon-icon.svg";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
    function handleEnter(event) {
        console.log(event.target.id);
        document.getElementById(event.target.id).classList.add("active");
    }

    function handleLeave(event) {
        console.log(event.target.id);
        document.getElementById(event.target.id).classList.remove("active");
    }

    return (
        <>
            <header>
                <div className="surgeonLogo">
                    <img src={surgeon} height="50px" id="surgeonImg" />
                    <span id="logoTxt">Colorectal Surgeon Nepal</span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                id="home"
                                onMouseEnter={handleEnter}
                                onMouseLeave={handleLeave}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/info"
                                id="info"
                                onMouseEnter={handleEnter}
                                onMouseLeave={handleLeave}
                            >
                                Information
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/doc"
                                id="doc"
                                onMouseEnter={handleEnter}
                                onMouseLeave={handleLeave}
                            >
                                Doctor
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/gallery"
                                id="Gallery"
                                onMouseEnter={handleEnter}
                                onMouseLeave={handleLeave}
                            >
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                id="contact"
                                onMouseEnter={handleEnter}
                                onMouseLeave={handleLeave}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="func">
                    <button id="reportBtn">ONLINE REPORT</button>
                    <button
                        id="appointmentBtn"
                        style={{
                            backgroundColor: "black",
                            fontSize: "bold",
                            color: "white",
                        }}
                    >
                        BOOK AN APPOINTMENT
                    </button>
                </div>
            </header>
        </>
    );
}
