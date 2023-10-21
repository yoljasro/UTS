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
import Image from 'next/image'

export const Header: FC<any> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__info}>
        <h3 className={styles.header__title}>UTS</h3>
        <p className={styles.header__desc}>We collaborate with companies to create world-class digital experience
          and help you do better business through adoption most advanced
          practices in web development, design, and digital marketing.</p>
        <Btn />
      </div>
      <div className={styles.header__media}>
        <ul className={styles.header__services}>
          <li>Web design</li>
          <li>Logo Design</li>
          <li>Digital Development</li>
          <li>Software development</li>
        </ul>
        <Image className={styles.header__image} src={'/assets/img/our.png'} alt='our image' width={765} height={452} />
      </div>
    </div>
  )
}
