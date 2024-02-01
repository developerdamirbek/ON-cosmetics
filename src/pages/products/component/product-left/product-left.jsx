import React from 'react'
import styleLeft from './product-left.module.scss'


export const ProductLeft = () => {
    return (
        <>
            <div className={styleLeft.left__card__top}>
                <h2 className={styleLeft.left__bannerText}>Home / Shop All</h2>
                <h3 className={styleLeft.left__filter}>Filter by color</h3>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Black</p>
                    <p className={styleLeft.p__text__scope}>(1)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Blue</p>
                    <p className={styleLeft.p__text__scope}>(3)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Green</p>
                    <p className={styleLeft.p__text__scope}>(2)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Red</p>
                    <p className={styleLeft.p__text__scope}>(7)</p>
                </div>
            </div>

            <div className={styleLeft.left__card__bottom}>


                <h3 className={styleLeft.left__filter}>Filter by category</h3>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Uncategorized</p>
                    <p className={styleLeft.p__text__scope}>(1)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Bestsellers</p>
                    <p className={styleLeft.p__text__scope}>(3)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Body</p>
                    <p className={styleLeft.p__text__scope}>(2)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Fragrance</p>
                    <p className={styleLeft.p__text__scope}>(7)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Jo Malone</p>
                    <p className={styleLeft.p__text__scope}>(1)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Masks</p>
                    <p className={styleLeft.p__text__scope}>(3)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Organic Body</p>
                    <p className={styleLeft.p__text__scope}>(2)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Organic Hair</p>
                    <p className={styleLeft.p__text__scope}>(7)</p>
                </div >
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Organic Skincare</p>
                    <p className={styleLeft.p__text__scope}>(1)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Organic Wellbeing</p>
                    <p className={styleLeft.p__text__scope}>(3)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Parfume</p>
                    <p className={styleLeft.p__text__scope}>(2)</p>
                </div>
                <div className={styleLeft.div__flex}>
                    <input type='checkbox' className={styleLeft.checkbox__btn} />
                    <p className={styleLeft.left__checkboxText}>Sunscreens</p>
                    <p className={styleLeft.p__text__scope}>(7)</p>
                </div>
                <div className={styleLeft.left__right__inputs}>
                    <h2 className={styleLeft.left__inputs__text}>Filter by Price</h2>
                    <input type='range' className={styleLeft.input__range} />
                    <p className={styleLeft.get__text}>Price:$ 10 - $100</p>
                </div>
            </div >
        </>
    )
}