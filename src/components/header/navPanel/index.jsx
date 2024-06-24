import { useTranslation } from "react-i18next";

import "./style.scss";

function NavPanel({ showNavPanel, setShowNavPanel }) {
    const { t } = useTranslation("header");

    return (
        <nav>
            <ul style={showNavPanel ? { display: "flex" } : {}}>
                <li>
                    <a
                        onClick={() =>
                            window.scrollTo({
                                top: 407,
                                behavior: "smooth",
                            })
                        }
                    >
                        {t("aboutMe")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() =>
                            window.scrollTo({
                                top: 840,
                                behavior: "smooth",
                            })
                        }
                    >
                        {t("myServices")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() =>
                            window.scrollTo({
                                top: 1315,
                                behavior: "smooth",
                            })
                        }
                    >
                        {t("myProjects")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() =>
                            window.scrollTo({
                                top: 3040,
                                behavior: "smooth",
                            })
                        }
                    >
                        {t("mySkills")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() =>
                            window.scrollTo({
                                top: 3720,
                                behavior: "smooth",
                            })
                        }
                    >
                        {t("socials")}
                    </a>
                </li>
                <li>
                    <a
                        onClick={() =>
                            window.scrollTo({
                                top: 4000,
                                behavior: "smooth",
                            })
                        }
                    >
                        {t("contactMe")}
                    </a>
                </li>
                <div className="separation"></div>
                <li>
                    <a href="https://www.malt.fr/profile/julienburger" target="_blank">
                        <i className="fa-solid fa-handshake"></i>Malt
                    </a>
                </li>
                <li>
                    <a href="https://store.steampowered.com/app/2232680/The_Big_One/" target="_blank">
                        <i className="fa-brands fa-steam"></i>Steam
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Julien-Burger" target="_blank">
                        <i className="fa-brands fa-github"></i>Github
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavPanel;
