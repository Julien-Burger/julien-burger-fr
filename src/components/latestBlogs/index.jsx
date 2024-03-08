import { useTranslation } from "react-i18next";

import "./style.scss";

function LastestBlogs() {
    const { t } = useTranslation("latestBlogs");

    /**
     * Compare the actual date to another date and return "Today", "Yesterday" or "There is X days"
     * @param {string} date The date you want to compare. Format: DD/MM/YYYY
     * @returns Info about the difference between the two date
     */
    const getDateSince = (date) => {
        let actualDate = new Date();
        let otherDate = new Date(refactorDate(date));

        let differenceInTime = actualDate.getTime() - otherDate.getTime();
        let differenceInDays = differenceInTime / (1000 * 3600 * 24);

        if (differenceInDays < 1) {
            return t("today");
        } else if (differenceInDays < 2) {
            return t("yesterday");
        } else if (differenceInDays < 30) {
            return `${Math.trunc(differenceInDays)} ${t("daysAgo")}`;
        } else if (differenceInDays < 365) {
            let months = Math.trunc(differenceInDays / 30);

            if (months > 1) {
                return `${months} ${t("monthsAgo")}`;
            } else {
                return `${months} ${t("monthAgo")}`;
            }
        } else {
            let years = Math.trunc(differenceInDays / 365);

            if (years > 1) {
                return `${years} ${t("yearsAgo")}`;
            } else {
                return `${years} ${t("yearAgo")}`;
            }
        }
    };

    /**
     * Convert an US date format to an european date format
     * @param {string} date The date to convert. Format: MM/DD/YYYY
     * @returns The date converted to european format
     */
    const refactorDate = (date) => {
        let dateSplited = date.split("/");

        return `${dateSplited[1]}/${dateSplited[0]}/${dateSplited[2]}`;
    };

    return (
        <section className="blogs" id="latestBlogs">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h3>{t("latestBlogs")}</h3>
            </div>

            <a href="https://blog.saltykarma.com/blog/8191588b-9709-4395-bb7a-65d40ced331e">
                <article>
                    <div className="blogHeader">
                        <div className="leftContent">
                            <p className="blogType">Article</p>
                            <p className="dateSince">{getDateSince("01/01/2000")}</p>
                        </div>

                        <p className="blogNumber">Blog N°2</p>
                    </div>

                    <h3 className="blogTitle">{t("blog2Title")}</h3>

                    <p className="blogDescription">{t("blog2Description")}</p>
                </article>
            </a>

            <a href="https://blog.saltykarma.com/blog/fae8e46f-18e8-4631-a860-ed3eec72d52d">
                <article>
                    <div className="blogHeader">
                        <div className="leftContent">
                            <p className="blogType">Article</p>
                            <p className="dateSince">{getDateSince("01/01/2000")}</p>
                        </div>

                        <p className="blogNumber">Blog N°1</p>
                    </div>

                    <h3 className="blogTitle">{t("blog1Title")}</h3>

                    <p className="blogDescription">{t("blog1Description")}</p>
                </article>
            </a>
        </section>
    );
}

export default LastestBlogs;
