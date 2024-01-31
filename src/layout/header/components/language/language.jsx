import React from 'react'
import style from '../../header.module.scss'

export const Language = () => {
  return (
    <select className={style.select_lang} name="lang" id="lang">
        <option value="English">Eng</option>
        <option value="Russian">Rus</option>
        <option value="Deustch">Deu</option>
    </select>
  )
}
