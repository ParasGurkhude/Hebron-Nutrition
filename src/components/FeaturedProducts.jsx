import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './FeaturedProducts.css';
import { Products } from './Products';

export const FeaturedProducts = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    const productData = [
        {
            id: 1,
            image: "https://cdn.shopify.com/s/files/1/0532/3295/9681/files/71HmRYl96KL._AC_SX425_195x183.jpg?v=1690301332",
            name: "Arterosil HP by Calroy 60",
            company: "Arterosil",
            price: "Rs. 99.00",
        },
        {
            id: 2,
            image: "https://cdn.shopify.com/s/files/1/0532/3295/9681/products/71luJ93VzJL_195x195.jpg?v=1706129522",
            name: "Allergy Research Group",
            company: "Allergy",
            price: "Rs. 115.99",
        },
        {
            id: 3,
            image: "https://cdn.shopify.com/s/files/1/0532/3295/9681/products/71LSz8JP-pL_195x195.jpg?v=1638514363",
            name: "ProOmega 2000",
            company: "Nordic Naturals",
            price: "Rs. 62.42 - Rs. 112.99",
        },
        {
            id: 4,
            image: "https://cdn.shopify.com/s/files/1/0532/3295/9681/products/41CWJ9TG0-S_195x195.jpg?v=1652245395",
            name: "Magnesium (glycinate)",
            company: "Pure Encapsulations",
            price: "Rs. 99.00",
        },
        {
            id: 5,
            image: "https://cdn.shopify.com/s/files/1/0532/3295/9681/products/41CP_blkYVL_195x195.jpg?v=1707422147",
            name: "Digestive Enzyme Support 90",
            company: "AbsorbAid",
            price: "Rs. 24.00",
        },
        {
            id: 6,
            image: "https://cdn.shopify.com/s/files/1/0532/3295/9681/products/71LSz8JP-pL_195x195.jpg?v=1638514363",
            name: "ProOmega 2000",
            company: "Nordic Naturals",
            price: "Rs. 62.42 - Rs. 112.99",
        },
        {
            id: 7,
            image: "https://cdn.shopify.com/s/files/1/0532/3295/9681/products/71luJ93VzJL_195x195.jpg?v=1706129522",
            name: "Allergy Research Group",
            company: "Allergy",
            price: "Rs. 115.99",
        },
        {
            id: 8,
            image: "https://cdn.shopify.com/s/files/1/0532/3295/9681/products/41CP_blkYVL_195x195.jpg?v=1707422147",
            name: "Digestive Enzyme Support 90",
            company: "AbsorbAid",
            price: "Rs. 24.00",
        },
        {
            id: 9,
            image: "https://cdn.shopify.com/s/files/1/0532/3295/9681/files/71HmRYl96KL._AC_SX425_195x183.jpg?v=1690301332",
            name: "Arterosil HP by Calroy 60",
            company: "Arterosil",
            price: "Rs. 99.00",
        }
    ];

    const product = productData.map(item => (<Products key={item.id} item={item} />));

    return (
        <div id='FProduct'>
            <h1>Featured Products</h1>
            <Carousel responsive={responsive}>
                {product}
            </Carousel>
        </div>
    );
};
