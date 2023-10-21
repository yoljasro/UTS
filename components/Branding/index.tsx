import React from 'react'
// components
import { MainPageTitle } from '../MainPageTitle'
import { Btn } from '../Btn'
// styles
import styles from './index.module.sass'
// mui
import { Button } from 'react-scroll'
// FC
import { FC } from 'react'
// next component
import Image from 'next/image'

export const Branding: FC<any> = () => {
  return (
    <div className={styles.branding}>
        <div className={styles.branding__info}>
        <MainPageTitle title='What we do ?'/>
        <h3 className={styles.branding__title}>Website development + branding</h3>
        <hr className={styles.branding__hr}/>
        <p className={styles.branding__desc}>When you sell your products online, you need a long - term strategy with a short - term focus on immediate sales. An alluring web design, consumer - focused content, and the right sales funnel all play a key role in successful e - commerce brands.</p>
        <p className={styles.branding__btn}>Let's collaborate</p>
        <hr className={styles.branding__line} />
        </div>

           <div className={styles.branding__info}>
        <MainPageTitle title='       '/>
        <h3 className={styles.branding__title}>Website development + branding</h3>
        <hr className={styles.branding__hr}/>
        <p className={styles.branding__desc}>When you sell your products online, you need a long - term strategy with a short - term focus on immediate sales. An alluring web design, consumer - focused content, and the right sales funnel all play a key role in successful e - commerce brands.</p>
        <p className={styles.branding__btn}>Let's collaborate</p>
        <hr className={styles.branding__line} />
        </div>
    </div>
  )
}
