import React from "react";
import { Logo } from "../../assets/icon/logo";
import { links } from "./data";
import { HeaderButtons } from "./components/header-buttons/header-buttons";
import { Link, NavLink } from "react-router-dom";
import style from './header.module.scss'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <Logo />
        <ul className={style.navbar}>
          {links.map((item) => (
            <li key={item.path}>
              <NavLink className={style.navbar_link} to={item.path}>
              {item.name}
            </NavLink>
            </li>
          ))}
        </ul>
        <HeaderButtons />
      </div>
    </header>
  );
};
