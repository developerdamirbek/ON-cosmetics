import React from "react";
import style from '../../header.module.scss'

import { SearchIcon } from "../../../../assets/icon/search-icon";
import { Language } from "../language/language";
import { HeartIcon } from "../../../../assets/icon/heart-icon";
import { ProfileIcon } from "../../../../assets/icon/profile-icon";

export const HeaderButtons = () => {
  return (
    <div className={style.buttons_block}>
      <div>
        <Language />
      </div>
      <div className={style.search}>
        <SearchIcon />
      </div>
      <div className={style.heart}>
        <HeartIcon />
      </div>
      <div className={style.profile}>
        <ProfileIcon/>
      </div>
      <div className={style.bag}>
        Bag 0
      </div>

    </div>
  );
};
