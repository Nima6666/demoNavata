import HeaderComponent from "../components/header";
import Hero from "../components/hero";
import Services from "../components/services";
import Partners from "../components/partners";
import { useEffect } from "react";
import "../assets/styles/homepage.css";

export default function Home() {
    useEffect(() => {
        document
            .getElementById("home")
            .setAttribute("style", "font-weight:bold");
        document.getElementById("home").classList.add("in");
    }, []);
    return (
        <>
            <HeaderComponent />
            <Hero />
            <Partners />
            <Services />
        </>
    );
}
