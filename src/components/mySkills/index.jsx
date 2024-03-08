import { useTranslation } from "react-i18next";

import SkillsCard from "./skillsCard";
import "./style.scss";

import gitLogo from "../../assets/skills/git.svg";
import githubLogo from "../../assets/skills/github.svg";
import vsCodeLogo from "../../assets/skills/vs_code.svg";
import godotLogo from "../../assets/skills/godot.svg";
import unityLogo from "../../assets/skills/unity.svg";
import reactNative from "../../assets/skills/react_native.svg";
import electron from "../../assets/skills/electron.svg";
import npmLogo from "../../assets/skills/npm.svg";
import rabbitmqLogo from "../../assets/skills/rabbitmq.svg";
import jqueryLogo from "../../assets/skills/jquery.svg";
import dotnetLogo from "../../assets/skills/dotnet.svg";

const skillsBundle1 = [
    {
        name: "Electron",
        img: electron,
    },
    {
        name: "React Native",
        img: reactNative,
    },
    {
        name: "Godot",
        img: godotLogo,
    },
    {
        name: "Unity",
        img: unityLogo,
    },
    {
        name: "Rabbit MQ",
        img: rabbitmqLogo,
    },
    {
        name: ".NET",
        img: dotnetLogo,
    },
];

const skillsBundle2 = [
    {
        name: "Git",
        img: gitLogo,
    },
    {
        name: "Github",
        img: githubLogo,
    },
    {
        name: "VS Code",
        img: vsCodeLogo,
    },
    {
        name: "jQuery",
        img: jqueryLogo,
    },
    {
        name: "NPM",
        img: npmLogo,
    },
];

function MySkills() {
    const { t } = useTranslation("mySkills");

    return (
        <section className="mySkills" id="mySkills">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h3>{t("mySkills")}</h3>
            </div>

            <div className="skillsCards">
                <SkillsCard title={t("iWorkWith")} skills={skillsBundle1} />
                <SkillsCard title={t("toolsIUse")} skills={skillsBundle2} />
            </div>
        </section>
    );
}

export default MySkills;
