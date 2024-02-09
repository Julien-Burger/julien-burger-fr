import { useEffect, useRef, useState } from "react";

import { imgMng } from "../../utils/imageManager";
import "./style.scss";
import NavPanel from "./navPanel";
import { useOutsideClick } from "../../utils/hooks";

function Header() {
    const [displayedLang, setDisplayedLang] = useState("fr");
    const [y, setY] = useState(window.scrollY);
    const [showNavPanel, setShowNavPanel] = useState(false);
    const navPanelRef = useRef();

    useOutsideClick(navPanelRef, () => {
        setShowNavPanel(false);
    });

    useEffect(() => {
        const scroll = () => {
            setY(window.scrollY);
        };

        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, []);

    const handleClickSwitchLanguage = () => {
        if (displayedLang == "fr") {
            setDisplayedLang("en");
        } else {
            setDisplayedLang("fr");
        }
    };

    return (
        <header style={y > 0 ? { borderBottom: "1px solid rgb(219 219 219)" } : {}}>
            <div className="innerHeader">
                <div className="saltyKarma">
                    <img className="saltyKarmaLogo" src={imgMng.saltyKarmaLogo} alt="Salty Karma logo" />
                    <h1>
                        <span>Salty</span> Karma
                    </h1>
                </div>

                <div
                    className={y > 0 ? "backUp backupShow" : "backUp"}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <i className="fa-solid fa-arrow-up fa-lg"></i>
                    <span>Retourner en haut</span>
                </div>

                <div className="rightContent">
                    <button className="languageContainer" onClick={handleClickSwitchLanguage}>
                        <i className="fa-solid fa-globe"></i>
                        {displayedLang == "fr" ? <span>Français</span> : <span>English</span>}
                    </button>

                    <div className="navPanelContainer" ref={navPanelRef}>
                        <i className="fa-solid fa-bars fa-lg sideBar" onClick={() => setShowNavPanel(!showNavPanel)}></i>
                        <NavPanel showNavPanel={showNavPanel} setShowNavPanel={setShowNavPanel} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
