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
        <section className="mySocials">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h3>{t("mySocials")}</h3>
            </div>

            <div className="socials">
                <div className="leftContent">
                    <a href="https://github.com/Julien-Burger" target="_blank" className="github">
                        <i className="fa-brands fa-github fa-2xl"></i>
                        <span>Github</span>
                    </a>
                    <div className="discord" onClick={handleClickCopyEmail}>
                        <i className="fa-brands fa-discord fa-xl"></i>
                        {!showCopyEmail && <span>Salty_Julien#3311</span>}
                        {showCopyEmail && <span>{t("copied")}</span>}
                        {!showCopyEmail && <i className="fa-regular fa-clipboard fa-2xl"></i>}
                        {showCopyEmail && <i className="fa-solid fa-clipboard-check fa-2xl"></i>}
                    </div>
                </div>
                <div className="rightContent">
                    <a href="https://store.steampowered.com/app/2232680/The_Big_One/" target="_blank" className="TBO">
                        <i className="fa-brands fa-steam fa-2xl"></i>
                        <span>The Big One</span>
                    </a>
                    <a href="https://www.malt.fr/profile/julienburger" target="_blank" className="malt">
                        <i className="fa-solid fa-handshake fa-2xl"></i>
                        <span>Malt</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default MySocials;
