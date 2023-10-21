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
import { TextField } from '@mui/material'

export const Contact: FC<any> = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contact__section}>
                <MainPageTitle title='Contact Us' />
                <p className={styles.contact__text}>For Collaboration</p>
                <textarea className={styles.contact__textarea} placeholder='Hello....'></textarea>
            </div>

            <div className={styles.contact__section}>
                <MainPageTitle title='  ' />
                <TextField className={styles.contact__input} id="standard-basic" label="Write your email" variant="standard" />
            </div>
        </div>
    )
}
