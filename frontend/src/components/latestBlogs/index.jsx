import "./style.scss";

function LastestBlogs() {
    return (
        <section className="blogs">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h2>Derniers blogs</h2>
            </div>

            <article>
                <div className="blogHeader">
                    <div className="leftContent">
                        <p className="blogType">Article</p>
                        <p className="dateSince">{getDateSince("01/01/2000")}</p>
                    </div>

                    <p className="blogNumber">Blog N°4</p>
                </div>

                <h3 className="blogTitle">Until the dream of the first game came true the following.</h3>

                <p className="blogDescription">
                    In Part I, I told you where the idea for The Big One came from, and how development began. In Part II, I'm
                    going to tell you all about how players reacted to the beta, and the additions that were made as a result.
                    You'll also discover the unexpected turn the project took, with the aim of releasing the game on Steam.
                </p>
            </article>
            <article>
                <div className="blogHeader">
                    <div className="leftContent">
                        <p className="blogType">Article</p>
                        <p className="dateSince">{getDateSince("01/01/2000")}</p>
                    </div>

                    <p className="blogNumber">Blog N°4</p>
                </div>

                <h3 className="blogTitle">Until the dream of the first game came true the following.</h3>

                <p className="blogDescription">
                    In Part I, I told you where the idea for The Big One came from, and how development began. In Part II, I'm
                    going to tell you all about how players reacted to the beta, and the additions that were made as a result.
                    You'll also discover the unexpected turn the project took, with the aim of releasing the game on Steam.
                </p>
            </article>
        </section>
    );
}

/**
 * Compare the actual date to another date and return "Today", "Yesterday" or "There is X days"
 * @param {string} date The date you want to compare. Format: DD/MM/YYYY
 * @returns Info about the difference between the two date
 */
export function getDateSince(date) {
    let actualDate = new Date();
    let otherDate = new Date(refactorDate(date));

    let differenceInTime = actualDate.getTime() - otherDate.getTime();

    let differenceInDays = differenceInTime / (1000 * 3600 * 24);

    if (differenceInDays < 1) {
        return "Today";
    } else if (differenceInDays < 2) {
        return "Yesterday";
    } else if (differenceInDays < 30) {
        return `${Math.trunc(differenceInDays)} days ago`;
    } else if (differenceInDays < 365) {
        let months = Math.trunc(differenceInDays / 30);

        if (months > 1) {
            return `${months} months ago`;
        } else {
            return `${months} month ago`;
        }
    } else {
        let years = Math.trunc(differenceInDays / 365);

        if (years > 1) {
            return `${years} years ago`;
        } else {
            return `${years} year ago`;
        }
    }
}

/**
 * Convert an US date format to an european date format
 * @param {string} date The date to convert. Format: MM/DD/YYYY
 * @returns The date converted to european format
 */
export function refactorDate(date) {
    let dateSplited = date.split("/");

    return `${dateSplited[1]}/${dateSplited[0]}/${dateSplited[2]}`;
}

export default LastestBlogs;
