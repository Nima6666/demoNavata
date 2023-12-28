import { useEffect } from "react";
import surgeon from "../assets/homepage/surgeon-icon.svg";
import { Link } from "react-router-dom";

export default function HeaderComponent() {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                document.querySelector("header").setAttribute("style", "box-shadow:0px 0px 20px -10px black")
            } else {
                document.querySelector("header").setAttribute("style", "box-shadow:none")
            }
            // console.log(document.querySelector("header").offsetHeight)
        })
    }, [])

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
                        className="appointmentBtn"
                    >
                        BOOK AN APPOINTMENT
                    </button>
                </div>
            </header>
        </>
    );
}
