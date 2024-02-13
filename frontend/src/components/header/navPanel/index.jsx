import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./style.scss";

function NavPanel({ showNavPanel, setShowNavPanel }) {
    const { t } = useTranslation("header");

    return (
        <nav>
            <ul style={showNavPanel ? { display: "flex" } : {}}>
                <li>
                    <a href="#aboutMe">{t("aboutMe")}</a>
                </li>
                <li>
                    <a href="#myServices">{t("myServices")}</a>
                </li>
                <li>
                    <a href="#myProjects">{t("myProjects")}</a>
                </li>
                <li>
                    <a href="#mySkills">{t("mySkills")}</a>
                </li>
                <li>
                    <a href="#latestBlogs">{t("latestBlogs")}</a>
                </li>
                <li>
                    <a href="#contactMe">{t("contactMe")}</a>
                </li>
                <li className="separation"></li>
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
                    <Link to="/" reloadDocument>
                        <i className="fa-solid fa-address-card"></i>Portfolio
                    </Link>
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
