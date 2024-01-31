import React from 'react'
import style from './faq.module.scss'
import { Hero } from '../../components/hero'
import { NavLink, Link } from 'react-router-dom'
import { Accordion } from './components/accordion'
import { Newsletter } from '../../components/newsletter/newsletter'

export const Faq = () => {
  return (
    <section className={style.faq}>
      <div className={style.faq_hero}>
        <Hero
          title="Frequently asked questions"
          text="Here you can find answers on the most frequently asked questions." />
      </div>
      <div className={style.faq_container}>
        <ul className={style.faq_list}>
          <li>
            <Link className={style.faq_link}>
              Shipping Info
            </Link>
          </li>
          <li>
            <Link className={style.faq_link}>
              Returns & Exchanges
            </Link>
          </li>
          <li>
            <Link className={style.faq_link}>
              Billing
            </Link>
          </li>
          <li>
            <Link className={style.faq_link}>
              Order
            </Link>
          </li>
          <li>
            <Link className={style.faq_link}>
              Customer Account
            </Link>
          </li>
        </ul>
        <div>
        <Accordion title="Where do you ship?" answer="When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message.
        When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop."/>
        <Accordion title="Are all taxes included in the price?" answer="When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message."/>
        <Accordion title="How long does shipping take?" answer="When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop."/>
        <Accordion title="Where is my order?" answer="When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message."/>
        <Accordion title="Has my order been already shipped?" answer="When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop."/>
        <Accordion title="Do you ship internationally?" answer="When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message."/>
        <Accordion title="Can I pay for the service with my gift card?" answer="When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. Amount is flexible and you can personalize your gift card with a message. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop."/>
        </div>
      </div>
      <Newsletter/>
    </section>
  )
}
