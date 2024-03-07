import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

    return (
        <section className="myProjects" id="myProjects">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h2>{t("myProjects")}</h2>
            </div>

            <div className="subTitle">
                <div></div>
                <h3>{t("bigProjects")}</h3>
                <div></div>
            </div>

            <div className="major">
                <article className="project">
                    <a href="https://www.preventimark.com/markprint" target="_blank" className="wallpaper">
                        <div>
                            <span>2023-2024</span>
                            <h4>MarkPrint</h4>
                            <p>{t("bigProject1Def")}</p>
                        </div>
                        <img src={markprint} />
                    </a>
                    <div className="footer">
                        <div className="tags">
                            {/* <Link to="/" className="tag link">
                                <i className="fa-solid fa-book"></i>
                                <span>Lire l'étude</span>
                            </Link> */}
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
                    <a href="https://github.com/Salty-Julien/the-big-one-code" target="_blank" className="wallpaper">
                        <div>
                            <span>2022-2023</span>
                            <h4>The Big One</h4>
                            <p>{t("bigProject2Def")}</p>
                        </div>
                        <img src={tbo} />
                    </a>
                    <div className="footer">
                        <div className="tags">
                            <a href="https://github.com/Salty-Julien/the-big-one-code" target="_blank" className="tag link">
                                <i className="fa-brands fa-github fa-lg"></i>
                                <span>Github</span>
                            </a>
                            {/* <Link to="/" className="tag link">
                                <i className="fa-solid fa-book fa"></i>
                                <span>Lire l'étude</span>
                            </Link> */}
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
                <h3>{t("smallProjects")}</h3>
                <div></div>
            </div>

            <div className="little">
                <article className="project">
                    <a href="https://github.com/Salty-Julien/mon-vieux-grimoire" target="_blank" className="wallpaper">
                        <div>
                            <span>2023</span>
                            <h4>Mon vieux grimoire</h4>
                            <p>{t("smallProject1Def")}</p>
                        </div>
                        <img src={monVieuxGrimoire} />
                    </a>
                    <div className="footer">
                        <div className="tags">
                            <a href="https://github.com/Salty-Julien/mon-vieux-grimoire" target="_blank" className="tag link">
                                <i className="fa-brands fa-github fa-lg"></i>
                                <span>Github</span>
                            </a>
                            {/* <Link to="/" className="tag link">
                                <i className="fa-solid fa-book fa"></i>
                                <span>Lire l'étude</span>
                            </Link> */}
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
                    <a href="https://github.com/Salty-Julien/kasa" target="_blank" className="wallpaper">
                        <div>
                            <span>2023</span>
                            <h4>Kasa</h4>
                            <p>{t("smallProject2Def")}</p>
                        </div>
                        <img src={kasa} />
                    </a>
                    <div className="footer">
                        <div className="tags">
                            <a href="https://github.com/Salty-Julien/kasa" target="_blank" className="tag link">
                                <i className="fa-brands fa-github fa-lg"></i>
                                <span>Github</span>
                            </a>
                            {/* <Link to="/" className="tag link">
                                <i className="fa-solid fa-book fa"></i>
                                <span>Lire l'étude</span>
                            </Link> */}
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
