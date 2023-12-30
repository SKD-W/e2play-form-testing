import { useEffect, useMemo, useState } from "react";
import websiteImg from "./asset/Asset14.png";
import websiteImgII from "./asset/asset15.png";
import headerShape from "./asset/asset7.png"
import checkIcon from "./asset/Mark-Right.png";
import "./HeroSection.scss";

function HeroSection() {

    const heroData = useMemo(() => [
        {
            textI: "Bet",
            textII: "on what",
            textIII: "matters",
            textIv: "Create personalized bets that",
            textV: "excites you & your friends",
            img: websiteImg
        },
        {
            textI: "Your",
            textII: "bets,",
            textIII: "Your rules",
            textIv: "Create personalized bets in sports,",
            textV: "entertainment and more.",
            img: websiteImgII
        },
    ], []);

    const [currentHeroDisplay, setCurrentHeroDisplay] = useState(0);
    const [currentHeroData, setCurrentHeroData] = useState(heroData[currentHeroDisplay]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentHeroDisplay((prevIndex) => (prevIndex + 1) % heroData.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentHeroDisplay, heroData.length]);

    useEffect(() => {
        setCurrentHeroData(heroData[currentHeroDisplay])
    }, [currentHeroDisplay, heroData]);

    return (
        <section className="section">
            <div className="section-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 box-i">
                        <div className="box-info">
                            <h1><span className={currentHeroDisplay === 1 ? "second-h1-slide" : ""}><img src={headerShape} alt="circle-shape" />{currentHeroData.textI}</span> {currentHeroData.textII} <br/>{currentHeroData.textIII}</h1>
                        <p>{currentHeroData.textIv} <br/>{currentHeroData.textV}</p>
                        </div>
                        <div className="box-cta">
                            <button type="submit">Create Your Bet</button>
                            <p><img src={checkIcon} alt="check-icon" />Safe, fun & uplifting</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 box-ii">
                        <div className="box-image">
                            <img className={currentHeroDisplay === 1 ? "second-img-slide" : ""} src={currentHeroData.img} alt="football-attack-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
