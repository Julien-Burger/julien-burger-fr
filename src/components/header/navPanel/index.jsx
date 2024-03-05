import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./style.scss";

function NavPanel({ showNavPanel, setShowNavPanel }) {
    const { t } = useTranslation("header");

    return (
        <nav>
            <ul style={showNavPanel ? { display: "flex" } : {}}>
                <li>
                    <a href="https://www.saltykarma.com">
                        <i className="fa-solid fa-house"></i>Salty Karma
                    </a>
                </li>
                <li>
                    <a href="https://blog.saltykarma.com">
                        <i className="fa-regular fa-newspaper"></i>Blog
                    </a>
                </li>
                <li>
                    <a href="https://store.steampowered.com/app/2232680/The_Big_One/" target="_blank">
                        <i className="fa-brands fa-steam"></i>Steam
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Salty-Julien" target="_blank">
                        <i className="fa-brands fa-github"></i>Github
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavPanel;
