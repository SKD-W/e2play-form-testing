// import { useState } from 'react';
// import './HeroNavbar.scss';
// import e2pBrandImg from "./asset/Asset 6.png";

// function HeroNavbar() {
//     const [isNavOpen, setNavOpen] = useState(false);

//     const toggleNav = () => {
//     setNavOpen(!isNavOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="brand-logo">
//                 <a href="/"><img src={e2pBrandImg} alt="empowered-2-play brand" style={{width: "40%"}} /></a>
//             </div>
//             <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
//                 <a href="/">Home</a>
//                 <a href="/about">How it works</a>
//                 <a href="/cat">Categories</a>
//                 <a href="/forum">Community</a>
//                 <a href="/latest">News Feed</a>
//                 <a href="/profile-account">Account</a>
//             </div>
//             <div className="navbar-toggler" onClick={toggleNav}>
//                 {isNavOpen ? '✕' : '☰'}
//             </div>
//         </nav>
//     );

// }

// export default HeroNavbar;
