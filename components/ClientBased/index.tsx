import React from 'react'
import { MainPageTitle } from '../MainPageTitle'
// styles
import styles from './index.module.sass'
// FC
import { FC } from 'react'
import { Btn } from '../Btn'
// next component
import Image from 'next/image'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export const ClientBased: FC<any> = () => {
  const t = useTranslations();

  return (
    <div className={styles.client} id='about'>
      <Bounce left cascade>
        <div className={styles.client__info}>
      <MainPageTitle title={t("about.title")}/>
      <p className={styles.client__desc}> <span> UTS UZBEKISTAN TECH SERVICE</span> {t("about.info")}</p>
      <Btn/>
      </div>
      </Bounce>
      <Fade right cascade>
      <div className={styles.client__media}>
        <Image className={styles.client__img} src={'/assets/img/bigLogo.png'} alt='bigLogo' width={612} height={340}/>
      </div>
      </Fade>
    </div>
  )
}
  