import { FC } from "react";
//sass
import styles from "./index.module.sass";
// import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import Zoom from 'react-reveal/Zoom'
import { ZoomProps } from "react-reveal";

export const Footer: FC<any> = () => {
    const t = useTranslations();

    return (
        <div className={styles.footer}>
            <Zoom  cascade>
            <div className={styles.footer__content}>
                <p className={styles.footer__reserved}>{t("footer.reserve")}</p>
                <p className={styles.footer__experience}>{t("footer.infoReserve")}</p>
            </div>
            <div className={styles.footer_content}>
                <p className={styles.footer__title}>{t("footer.subscribe")}</p>
                <div className={styles.footer__social}>
                    <Image src={'/assets/img/facebook.png'} alt="instagram" width={40} height={40} />
                    <Image src={'/assets/img/instagram.png'} alt="faceebook" width={40} height={40} />
                    <Image src={'/assets/img/telegram.png'} alt="telegram" width={40} height={40} />
                </div>
            </div>
            <div className={styles.footer_content}>
                <p className={styles.footer__title}>{t("footer.phone")}</p>
                <p className={styles.footer__text}>+998 |94| 450-06-84</p>
                <p className={styles.footer__text}>uzbekistantechservice@gmail.com</p>
            </div>
            <div className={styles.footer_content}>
                <p className={styles.footer__title}>{t("footer.locationTitle")}</p>
                <p className={styles.footer__text}>{t("footer.location")}</p>
            </div>
            <div className={styles.footer_content}>
                <Link activeClass="active"
                    to="navbar"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <Image className={styles.footer__back} src={'/assets/img/back.png'} alt="back" width={138} height={20} />
                </Link>
            </div>
            </Zoom>
        </div>
    );
};
