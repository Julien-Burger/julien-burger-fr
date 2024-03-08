import { useTranslation, Trans } from "react-i18next";

import "./style.scss";

function AboutMe() {
    const { t } = useTranslation("aboutMe");

    return (
        <section className="aboutMe" id="aboutMe">
            <div>
                <h3>{t("aboutMe")}</h3>
                <p>
                    <Trans ns="aboutMe" i18nKey="firstParagraph">
                        Passionné par le développement de <b>jeux vidéo et le développement web</b> depuis toujours, j'ai débuté
                        la programmation à l'âge de 15 ans en autodidacte.
                    </Trans>
                </p>
                <p>
                    <Trans ns="aboutMe" i18nKey="secondParagraph">
                        Spécialisé dans le développement <b>full-stack</b>, j'ai eu l'occasion de développer divers applications
                        web et mobile ainsi qu'un <b>logiciel professionnel</b> d'impression.
                    </Trans>
                </p>
            </div>
        </section>
    );
}

export default AboutMe;
