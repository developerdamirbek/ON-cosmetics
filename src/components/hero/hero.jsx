import React from 'react'
import style from "./hero.module.scss";

export const Hero = ({ title, text }) => {
  return (
    <section className={style.hero__section}>
      <div className='container'>
        <div className={style.hero__container}>
          <h1 className={style.hero__title}>
            {title}
          </h1>
          <p className={style.hero__text}>
            {text}
          </p>
        </div>
      </div>
    </section>
  )
}
