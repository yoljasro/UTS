import { FC } from "react";
//sass
import styles from "./index.module.sass";
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";
import Image from 'next/image'
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";



export const Btn: FC<any> = () => {
  const t = useTranslations()

  return (
    <div>
      <Fade top cascade>
        <Link activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70} 
          duration={500}>
          <button  className={styles.btn}>
          
            <div className={styles.btn__btnAnime}>{t("header.button")}</div>
            {/* <p className={styles.btn__text}></p> */}
          </button>
        </Link>
      </Fade>
    </div>
  );
};
