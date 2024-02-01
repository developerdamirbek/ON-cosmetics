import React from "react";
import bgProductImg from "../../assets/img/product-bg-img.png";
import styleProduct from "./products.module.scss";
import { ProductLeft } from "./components/product-left/product-left";
import { ProductRight } from "./components/product-right/product-right";
import { data } from "../../data/product-data";

export const Products = () => {
  return (
    <>
      <div className={styleProduct.product__container}>
        <div className={styleProduct.product__header}>
          <img
            src={bgProductImg}
            className={styleProduct.header__product__img}
          />
          <div>
            <h1 className={styleProduct.carefully__text}>
              Carefully selected beauty products
            </h1>
            <p className={styleProduct.out__pText}>
              Our team carefully selects only the best products that have<br/>
              toxic-free formulas and are not tested on animals.
            </p>
          </div>
        </div>
        <div className={styleProduct.product__card_container}>
          <div className={styleProduct.product__card__left}>
            <ProductLeft />
          </div>
          <div className={styleProduct.product__card__right}>
          <ProductRight/>  
              <div className={styleProduct.card__div}>
                {data.map((item) =>(
                      <div key={item.id}  className={styleProduct.product__card__divs}>
                          <img src={item.img} className={styleProduct.cards__img}/>
                          <h4 className={styleProduct.cards__text}>{item.title}</h4>
                          <p className={styleProduct.card__p__text}>$ {item.price} - $ {item.price2}</p>
                      </div>
                ))}
              </div>
              <div className={styleProduct.footer__btn}>
                  <div className={styleProduct.btn__footer}>
                    <p className={styleProduct.product__btn}>1</p>
                    <p className={styleProduct.product__btn}>2</p>
                    <p className={styleProduct.product__btn}>3</p>
                    <p className={styleProduct.product__btn}>...</p>
                    <p className={styleProduct.product__btn}>5</p>
                    </div>
              </div>
          </div>
        </div>

        <div className={styleProduct.footer__page}>
              <div className={styleProduct.footer__cont}>
                  <h3 className={styleProduct.h3__text__footer}>Keep up to date with our advices</h3>
                  <p className={styleProduct.pText__footer}>Subscribe now and thank us later</p>
              
                  <div style={{display:"flex"}}>
                  <input placeholder="Enter your Email" type="text" className={styleProduct.footer__input}/>
                  <button className={styleProduct.footer__btn2}>Subscribe</button>
                  </div>
              </div>
        </div>

      </div>
    </>
  );
};
import React from 'react'

export const Products = () => {
  return (
    <div>products</div>
  )
}
