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

export const Portfolio: FC<any> = () => {
  return (
    <div className={styles.portfolio}>
        <MainPageTitle title='Our Portfolio'/>
        <div className={styles.portfolio__cards}>
            <div className={styles.portfolio__card}></div>
            <div className={styles.portfolio__card}></div>
            <div className={styles.portfolio__card}></div>
            <div className={styles.portfolio__card}></div>
        </div>
    </div>
  )
}
