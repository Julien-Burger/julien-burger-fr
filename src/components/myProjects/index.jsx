import { useTranslation } from "react-i18next";
import swal from "sweetalert";

import "./style.scss";

import markprint from "../../assets/myProjects/markprint.png";
import tbo from "../../assets/myProjects/the_big_one.png";
import kasa from "../../assets/myProjects/kasa.png";
import monVieuxGrimoire from "../../assets/myProjects/mon_vieux_grimoire.png";
import react from "../../assets/skills/react.svg";
import mySql from "../../assets/skills/mysql.svg";
import electron from "../../assets/skills/electron.svg";
import unity from "../../assets/skills/unity.svg";
import aseprite from "../../assets/skills/aseprite.svg";
import javascript from "../../assets/skills/javascript.svg";
import nodejs from "../../assets/skills/node_js.svg";
import mongodb from "../../assets/skills/mongodb.svg";

function MyProjects() {
    const { t } = useTranslation("myProjects");

    const handleClickRead = (title, text) => {
        swal({
            title,
            text,
        });
    };

    return (
        <section className="myProjects" id="myProjects">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h3>{t("myProjects")}</h3>
            </div>

            <div className="subTitle">
                <div></div>
                <h4>{t("bigProjects")}</h4>
                <div></div>
            </div>

            <div className="major">
                <article className="project">
                    <div className="wallpaper">
                        <div>
                            <span>2023-2024</span>
                            <h5>MarkPrint</h5>
                            <p>{t("bigProject1Def")}</p>
                        </div>
                        <img src={markprint} />
                    </div>
                    <div className="footer">
                        <div className="tags">
                            <div className="tag link" onClick={() => handleClickRead("MarkPrint", t("markprintText"))}>
                                <i className="fa-solid fa-book"></i>
                                <span>{t("read")}</span>
                            </div>
                            <div className="tag">
                                <span>Front-end</span>
                            </div>
                            <div className="tag">
                                <span>Back-end</span>
                            </div>
                            <div className="tag">
                                <span>Canvas</span>
                            </div>
                            <div className="tag">
                                <span>UI/UX</span>
                            </div>
                        </div>
                        <div className="techIcons">
                            <img src={react} title="React" />
                            <img src={nodejs} title="Node.js" />
                            <img src={mySql} title="MySQL" />
                            <img src={electron} title="Electron" />
                        </div>
                    </div>
                </article>
                <article className="project">
                    <div className="wallpaper">
                        <div>
                            <span>2022-2023</span>
                            <h5>The Big One</h5>
                            <p>{t("bigProject2Def")}</p>
                        </div>
                        <img src={tbo} />
                    </div>
                    <div className="footer">
                        <div className="tags">
                            <a href="https://github.com/Salty-Julien/the-big-one-code" target="_blank" className="tag link">
                                <i className="fa-brands fa-github fa-lg"></i>
                                <span>Github</span>
                            </a>
                            <div className="tag link" onClick={() => handleClickRead("The Big One", t("tboText"))}>
                                <i className="fa-solid fa-book fa"></i>
                                <span>{t("read")}</span>
                            </div>
                            <div className="tag">
                                <span>C#</span>
                            </div>
                            <div className="tag">
                                <span>{t("da")}</span>
                            </div>
                        </div>
                        <div className="techIcons">
                            <img src={unity} title="Unity" />
                            <img src={aseprite} title="Aseprite" />
                        </div>
                    </div>
                </article>
            </div>

            <div className="subTitle">
                <div></div>
                <h4>{t("smallProjects")}</h4>
                <div></div>
            </div>

            <div className="little">
                <article className="project">
                    <div className="wallpaper">
                        <div>
                            <span>2023</span>
                            <h5>Mon vieux grimoire</h5>
                            <p>{t("smallProject1Def")}</p>
                        </div>
                        <img src={monVieuxGrimoire} />
                    </div>
                    <div className="footer">
                        <div className="tags">
                            <a href="https://github.com/Salty-Julien/mon-vieux-grimoire" target="_blank" className="tag link">
                                <i className="fa-brands fa-github fa-lg"></i>
                                <span>Github</span>
                            </a>
                            <div className="tag link" onClick={() => handleClickRead("Mon Vieux Grimoire", t("mvgText"))}>
                                <i className="fa-solid fa-book fa"></i>
                                <span>{t("read")}</span>
                            </div>
                            <div className="tag">
                                <span>Back-end</span>
                            </div>
                        </div>
                        <div className="techIcons">
                            <img src={nodejs} title="Node.js" />
                            <img src={mongodb} title="MongoDB" />
                        </div>
                    </div>
                </article>
                <article className="project">
                    <div className="wallpaper">
                        <div>
                            <span>2023</span>
                            <h5>Kasa</h5>
                            <p>{t("smallProject2Def")}</p>
                        </div>
                        <img src={kasa} />
                    </div>
                    <div className="footer">
                        <div className="tags">
                            <a href="https://github.com/Salty-Julien/kasa" target="_blank" className="tag link">
                                <i className="fa-brands fa-github fa-lg"></i>
                                <span>Github</span>
                            </a>
                            <div className="tag link" onClick={() => handleClickRead("Kasa", t("kasaText"))}>
                                <i className="fa-solid fa-book fa"></i>
                                <span>{t("read")}</span>
                            </div>
                            <div className="tag">
                                <span>Front-end</span>
                            </div>
                        </div>
                        <div className="techIcons">
                            <img src={react} title="React" />
                            <img src={javascript} title="Javascript" />
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default MyProjects;
