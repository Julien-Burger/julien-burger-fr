import { useTranslation, Trans } from "react-i18next";

import "./style.scss";

function Me() {
    const { t } = useTranslation("me");

    return (
        <section className="me">
            <h1>Julien Burger</h1>
            <h2>{t("dev")}</h2>
            <p>
                <Trans i18nKey="description" ns="me">
                    Autodidacte de 25 ans, passionné par le développement
                    <br />
                    et l'informatique depuis mon plus jeune âge, je pratique
                    <br />
                    la programmation depuis environ 10 ans.
                </Trans>
            </p>
            <div>
                <a href="#contactMe">{t("contactMe")}</a>
                <a href="https://github.com/Julien-Burger" target="_blank">
                    <i class="fa-brands fa-github fa-lg"></i> Github
                </a>
            </div>
        </section>
    );
}

export default Me;
