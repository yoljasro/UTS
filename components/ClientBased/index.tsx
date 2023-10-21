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

export const ClientBased: FC<any> = () => {
  return (
    <div className={styles.client} id='about'>
      <Bounce left cascade>
        <div className={styles.client__info}>
      <MainPageTitle title='Who are  we ?'/>
      <p className={styles.client__desc}> <span> UTS</span> is an emerging Digital Marketing Agency based in Tashkent, Uzbekistan. We work closely with many brands and companies since 2023. Our clients are sacred and our passion is to provide them with utmost support. Discover how we can collaborate to transform the way your business performs.</p>
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
  