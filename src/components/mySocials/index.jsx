import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import "./style.scss";

function MySocials() {
    const [showCopyEmail, setShowCopyEmail] = useState(false);
    const timerRef = useRef();
    const { t } = useTranslation("mySocials");

    const handleClickCopyEmail = () => {
        setShowCopyEmail(true);
        clearInterval(timerRef.current);
        navigator.clipboard.writeText("Salty_Julien#3311");

        timerRef.current = setTimeout(() => {
            setShowCopyEmail(false);
        }, 2000);
    };

    return (
        <div className="mySocials">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h2>{t("mySocials")}</h2>
            </div>

            <div className="socials">
                <div className="leftContent">
                    <a href="https://github.com/Salty-Julien" target="_blank" className="github">
                        <i className="fa-brands fa-github fa-2xl"></i>
                        <span>Github</span>
                    </a>
                    <div className="discord" onClick={handleClickCopyEmail}>
                        <i className="fa-brands fa-discord fa-xl"></i>
                        {!showCopyEmail && <span>Salty_Julien#3311</span>}
                        {showCopyEmail && <span>Copié dans le presse papier</span>}
                        {!showCopyEmail && <i className="fa-regular fa-clipboard fa-2xl"></i>}
                        {showCopyEmail && <i className="fa-solid fa-clipboard-check fa-2xl"></i>}
                    </div>
                </div>
                <div className="rightContent">
                    <a href="https://store.steampowered.com/app/2232680/The_Big_One/" target="_blank" className="TBO">
                        <i className="fa-brands fa-steam fa-2xl"></i>
                        <span>The Big One</span>
                    </a>
                    <a href="https://blog.saltykarma.com" className="blog">
                        <i className="fa-regular fa-newspaper fa-2xl"></i>
                        <span>Blog</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default MySocials;