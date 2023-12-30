import { useState } from "react";
import "./HeroNavbar.scss";
import e2pBrandImg from "./asset/Empowered2PLay-Home-Logo.png";

function HeroNavbar() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen)
    }
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="brand-logo">
                    <a href="/"><img src={e2pBrandImg} alt="Empowered-2-Play brand" /></a>
                </div>
                <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">How it works</a></li>
                        <li><a href="/cat">Categories</a></li>
                        <li><a href="/forum">Community</a></li>
                        <li><a href="/latest">News Feed</a></li>
                    </ul>
                </div>
                <div className="profile-account">
                    <a href="/profile-account">Account</a>
                </div>
                <div className="navbar-toggler" onClick={toggleNav}>
                    {isNavOpen ? "✕" : "☰"}
                </div>
            </div>
            <hr/>
        </nav>
    );
}

export default HeroNavbar;