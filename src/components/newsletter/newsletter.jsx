import React from 'react'
import style from './newsletter.module.scss'
import { ToMessageIcon } from '../../assets/icon/toMessage-icon'

export const Newsletter = () => {
  return (
    <div className={style.newsletter}>
        <ToMessageIcon/>
        <h2 className={style.newsletter_title}>Keep up to date with our advices</h2>
        <p className={style.newsletter_text}>Subscribe now and thank us later</p>
        <form className={style.newsletter_form}>
            <input className={style.newsletter_input} type="text" />
            <button className={style.newsletter_btn}>Subscribe</button>
        </form>
    </div>
  )
}
