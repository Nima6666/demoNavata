import { useEffect, useState } from "react";
import surgeon from "../assets/homepage/surgeon-icon.svg";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

export default function HeaderComponent() {
    let checkOnLoadHam = false
    const [ham, setHam] = useState(false);
    const [isOpen, setOpen] = useState(false);

    if(window.innerWidth < 1000) {
        checkOnLoadHam = true
    }

    useEffect(() => {

        if (isOpen) {
            document.querySelector(".blocker").setAttribute("style", "display: block;")
        }else {
            document.querySelector(".blocker").setAttribute("style","display: none;")

        }

        window.addEventListener("scroll", () => {
            if (window.scrollY > 20) {
                document
                    .querySelector("header")
                    .setAttribute(
                        "style",
                        "box-shadow:0px 0px 20px -10px black"
                    );
            } else {
                document
                    .querySelector("header")
                    .setAttribute(
                        "style",
                        "box-shadow:none, font-weight: normal"
                    );
            }
        });
        window.addEventListener("resize", () => {
            if (document.querySelector("header").offsetWidth < 1000) {

                
                document
                    .querySelector(".hamItems")
                    .appendChild(document.querySelector(".func"));
                setHam(true);
            } else {
                setHam(false);
                document
                    .querySelector("header")
                    .appendChild(document.querySelector(".func"));
            }
            if (document.querySelector("header").offsetWidth < 750) {
                document
                    .querySelector(".hamItems")
                    .appendChild(document.querySelector("nav"));
            } else {
                document
                    .querySelector("header")
                    .appendChild(document.querySelector("nav"));
            }
        });
    }, []);

    function handleEnter(event) {
        console.log(event.target.id);
        document.getElementById(event.target.id).classList.add("active");
    }

    function handleLeave(event) {
        console.log(event.target.id);
        document.getElementById(event.target.id).classList.remove("active");
    }

    function handleHamClick() {
        console.log("handling");
        if (!isOpen) {
            document
                .querySelector(".hamItems")
                .setAttribute("style", " transform: translateX(0%);");
        } else {
            document
                .querySelector(".hamItems")
                .setAttribute("style", " transform: translateX(110%);");
        }
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
                    <button id="loginBtn">LOG IN</button>
                    <button className="appointmentBtn">
                        BOOK AN APPOINTMENT
                    </button>
                </div>
            </header>
            <div className="blocker"></div>
            <div className="hamItems"></div>
            {ham && (
                <div className="hamburgerContainer" onClick={handleHamClick}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            )}
        </>
    );
}
