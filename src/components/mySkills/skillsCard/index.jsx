import { useState } from "react";

import "./style.scss";

function SkillsCard({ title, skills }) {
    const [skill, setSkill] = useState(undefined);

    return (
        <div className="skillsCard">
            <div className="subTitle">
                <div></div>
                <h3>{title}</h3>
                <div></div>
            </div>

            <div className="skills">
                {skills.map((s) => {
                    return (
                        <div
                            className={skill && skill != s.name ? "skill notHovered" : "skill"}
                            onMouseEnter={() => setSkill(s.name)}
                            onMouseLeave={() => setSkill(undefined)}
                            key={s.name}
                        >
                            <img src={s.img} alt={`${s.name} logo`} />
                            <span>{s.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SkillsCard;
