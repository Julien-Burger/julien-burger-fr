import { useRef, useState } from "react";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

import "./style.scss";

function ContactForm() {
    const [showCopyEmail, setShowCopyEmail] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const timerRef = useRef();
    const { t } = useTranslation("contactForm");

    const handleClickCopyEmail = () => {
        setShowCopyEmail(true);
        clearInterval(timerRef.current);
        navigator.clipboard.writeText("contact@saltykarma.com");

        timerRef.current = setTimeout(() => {
            setShowCopyEmail(false);
        }, 2000);
    };

    const handleSubmitContact = (e) => {
        e.preventDefault();

        setEmail("");
        setMessage("");

        swal({
            text: "Votre message a bien été envoyé.",
            icon: "success",
            buttons: {
                confirm: "Fermer",
            },
        });
    };

    return (
        <div className="contactForm" id="contactMe">
            <div className="title">
                <div></div>
                <div></div>
                <div></div>
                <h2>{t("contactMe")}</h2>
            </div>

            <div className="copyEmail" onClick={handleClickCopyEmail}>
                {!showCopyEmail && <span>contact@saltykarma.com</span>}
                {showCopyEmail && <span style={{ color: "rgb(13 217 87)" }}>{t("copied")}</span>}
                {!showCopyEmail && <i className="fa-regular fa-clipboard fa-2x"></i>}
                {showCopyEmail && <i className="fa-solid fa-clipboard-check fa-2x" style={{ color: "rgb(13 217 87)" }}></i>}
            </div>

            <form onSubmit={handleSubmitContact}>
                <div className="field">
                    <label htmlFor="email">{t("email")}</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@doe.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="message">{t("message")}</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Que souhaitez-vous dire ?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>

                <button>{t("send")}</button>
            </form>
        </div>
    );
}

export default ContactForm;
