import React from "react";
import styleRight from "./product-right.module.scss";

export const ProductRight = ( ) => {
    return (
        <section>
        <div className={styleRight.select__div}>
            <select className={styleRight.select}>
            <option>Default Sorting</option>
            <option>Sort by Popularty</option>
            <option>Sort by avarage rating</option>
            <option>Sort by latest</option>
            <option>Sort by price:low to high</option>
            <option>Sort by price:high to low</option>
            </select>
        </div>
        </section>
    );
};