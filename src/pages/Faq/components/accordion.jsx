import React, { useState } from 'react'
import style from '../faq.module.scss'

export const Accordion = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
  
    return (
      <div className={style.accordion}>
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className={style.accordion_btn}
        >
          <span>{title}</span>
          {accordionOpen ? <span className={style.accordion_close}>&times;</span> : <span className={style.accordion_open}>+</span>}
          
        </button>
        <div
          className={`${accordionOpen ? style.block : style.none}`}
        >
          <div className={style.answer}>{answer}</div>
        </div>
      </div>
    );
  };