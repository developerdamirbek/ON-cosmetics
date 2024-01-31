import React from "react";
import style from './footer.module.scss'
import { Logo } from "../../assets/icon/logo";
import { Link } from "react-router-dom";
import { TwitterIcon } from "../../assets/icon/twitter-icon";
import { Facebook } from "../../assets/icon/facebook";
import { YouTubeIcon } from "../../assets/icon/youTube-icon";
import { TelegramIcon } from "../../assets/icon/telegram-icon";
import { InstagramLightIcon } from "../../assets/icon/instagramLight-icon";

export const Footer = () => {
  return (
    <footer>
      <div className={style.footer_top}>
        <div className="container">
          <div className={style.footer_link__wrapper}>
            <div className={style.footer_links}>
              <div className={style.footer_logo}>
                <Logo />
              </div>
              <div className={style.footer_social__links}>
                <a href="" className={style.social_link}>
                  <TwitterIcon/>
                </a>
                <a href="" className={style.social_link}>
                  <Facebook/>
                </a>
                <a href="" className={style.social_link}>
                  <YouTubeIcon/>
                </a>
                <a href="" className={style.social_link}>
                  <TelegramIcon/>
                </a>
                <a href="" className={style.social_link}>
                  <InstagramLightIcon/>
                </a>
              </div>
            </div>
          <div className={style.useful__links}>
            <p className={style.useful_text}>ABOUT</p>
            <ul className={style.form_list}>
              <li>
                <Link className={style.form_link}>
                  Finde
                </Link>
              </li>
              <li>
                <Link className={style.form_link}>
                  Brand
                </Link>
              </li>
              <li>
                <Link className={style.form_link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className={style.form_link}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className={style.form_link}>
                  Where to buy
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.useful__links}>
            <p className={style.useful_text}>ABOUT</p>
            <ul className={style.form_list}>
              <li>
                <Link className={style.form_link}>
                  Finde
                </Link>
              </li>
              <li>
                <Link className={style.form_link}>
                  Brand
                </Link>
              </li>
              <li>
                <Link className={style.form_link}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className={style.form_link}>
                  Contact
                </Link>
              </li>
              <li>
                <Link className={style.form_link}>
                  Where to buy
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.newsletter}>
            <p className={style.footer_text}>SUBSCRIBE</p>
            <strong className={style.form_text}>Subscribe now and thank us later</strong>
            <form className={style.footer_form}>
              <input className={style.form_input} type="text" />
              <button className={style.form_btn}>Subscribe</button>
            </form>
          </div>
          </div>
        </div>
      </div>
      <div className={style.footer_bottom}>
        <div className="container">
          <p className={style.footer_copy_text}>© 2021 Beauty Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
