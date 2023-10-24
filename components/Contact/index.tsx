import React, { useState } from 'react'
import { MainPageTitle } from '../MainPageTitle'
// styles
import styles from './index.module.sass'
// mui
// FC
import { FC } from 'react'
import { Btn } from '../Btn'
// next component
import Image from 'next/image'
import axios from 'axios'
import Modal from 'react-modal';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Fade from 'react-reveal/Fade'


// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//     props,
//     ref,
// ) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

export const Contact: FC<any> = () => {
    const t = useTranslations();
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');
    const [open, setOpen] = React.useState(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/user', {
                text: text,
                email: email
            });
            // setOpen(true)
            alert("Sended your information")
            // setResponseMessage(response.data); // Assuming the API returns a success message
            // setModalIsOpen(true); // Open the mod

            
        } catch (error) {
            console.error(error);
            alert("Sended your information")
        }
    };

    return (
        <div className={styles.contact} id='contact'>
            <MainPageTitle title={t("contact.title")} />

            <div className={styles.contact__section}>
                <Fade left cascade>
                    <div>
                        <p className={styles.contact__text}>{t("contact.forColaboration")}</p>
                        <textarea value={text} onChange={(e) => setText(e.target.value)} className={styles.contact__textarea} placeholder={t("contact.message")}></textarea>
                    </div>
                </Fade>
                <Fade right cascade>
                    <div className={styles.contact__form}>
                        <form onSubmit={handleSubmit} className={styles.contact__email} >
                            <input
                                placeholder={t("contact.inputPlaceholder")}
                                className={styles.contact__input}
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required
                            />
                            <div className={styles.switch}>
                                <input
                                    className={styles.contact__field}
                                    type="checkbox"
                                    id="checkbox"
                                    name="checkbox"
                                />
                                <label className={styles.contact__checkbox} htmlFor="checkbox">{t("contact.agree")}</label>
                            </div>
                            <button className={styles.contact__btn} type="submit">
                                {t("contact.button")}
                            </button>


                        </form>
                        {/* <Stack spacing={2} sx={{ width: '100%' }}>
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                    {t("contact.succes")}
                                </Alert>
                            </Snackbar>
                        </Stack> */}
                    </div>

                </Fade>
            </div>
        </div>
    )
}
