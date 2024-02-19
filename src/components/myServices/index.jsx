import { useTranslation } from "react-i18next";

import "./style.scss";

import website from "../../assets/services/website.svg";
import mobileDesktop from "../../assets/services/mobile_desktop.svg";
import seo from "../../assets/services/seo.png";
import cv from "../../assets/services/cv.pdf";

function MyServices() {
    const { t } = useTranslation("myServices");

    return (
        <div className="myServices" id="myServices">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h2>{t("myServices")}</h2>
            </div>

            <div className="services">
                <div className="service">
                    <img src={website} alt="Croquis site web" />
                    <h3>{t("website")}</h3>
                    <p>{t("websiteDescription")}</p>
                </div>
                <div className="service">
                    <img src={mobileDesktop} alt="Téléphone et écran d'ordinateur" />
                    <h3>{t("mobileDesktop")}</h3>
                    <p>{t("mobileDesktopDescription")}</p>
                </div>
                <div className="service">
                    <img src={seo} alt="SEO" />
                    <h3>SEO</h3>
                    <p>{t("seoDescription")}</p>
                </div>
            </div>

            <a href={cv} download="CV Burger Julien.pdf">
                {t("downloadCV")}
            </a>
        </div>
    );
}

export default MyServices;
