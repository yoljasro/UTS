import React from 'react'
import { MainPageTitle } from '../MainPageTitle'
// styles
import styles from './index.module.sass'
// mui
import { Button } from 'react-scroll'
// FC
import { FC } from 'react'
import { Btn } from '../Btn'
// next component
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Header: FC<any> = () => {
  const t = useTranslations()

  return (
    <div className={styles.header}>
      <Bounce left cascade>
      <div className={styles.header__info}>
        <h3 className={styles.header__title}>{t("header.title")}</h3>
        <p className={styles.header__motto}>{t("header.motto")}</p>
        <p className={styles.header__desc}>{t("header.information")}</p>
        <Btn />
      </div>
      </Bounce>
      <Fade right cascade>
      <div className={styles.header__media}>
        <ul className={styles.header__services}>
          <li>{t("header.design")}</li>
          <li>{t("header.logo")}</li>
          <li>{t("header.digital")}</li>
          <li>{t("header.soft")}</li>
        </ul>
        <Image className={styles.header__image} src={'/assets/img/team.jpg'} alt='our image' width={765} height={452} />
      </div>
      </Fade>
    </div>
  )
}
