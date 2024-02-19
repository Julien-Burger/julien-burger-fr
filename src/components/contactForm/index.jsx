import { useRef, useState } from "react";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import axios from "axios";

import "./style.scss";
import { isEmptyString } from "../../utils/common";

function ContactForm() {
    const [showCopyEmail, setShowCopyEmail] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formInvalid, setFormInvalid] = useState(false);
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

    const handleSubmitContact = async (e) => {
        e.preventDefault();

        if (isEmptyString(e.target.email.value) || isEmptyString(e.target.message.value)) {
            setFormInvalid(true);
            return;
        }

        try {
            const data = {
                email: e.target.email.value,
                message: e.target.message.value,
            };

            await axios.post("http://localhost:4000/contact", data);

            setEmail("");
            setMessage("");
            setFormInvalid(false);

            swal({
                text: "Votre message a bien été envoyé.",
                icon: "success",
                buttons: {
                    confirm: "Fermer",
                },
            });
        } catch (err) {
            swal({
                text: "Problème serveur. Veuillez réessayer plus tard.",
                icon: "error",
            });
        }
    };

    return (
        <section className="contactForm" id="contactMe">
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
                        className={formInvalid ? "formInvalid" : ""}
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
                        className={formInvalid ? "formInvalid" : ""}
                    ></textarea>
                </div>

                <button>{t("send")}</button>
            </form>
        </section>
    );
}

export default ContactForm;
