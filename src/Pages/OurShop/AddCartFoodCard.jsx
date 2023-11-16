'use client';

import { Card } from 'flowbite-react';

const AddCartFoodCard = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <Card
            className="max-w-sm"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={image}
        >
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>
            <p>{recipe}</p>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
                <button
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </button>
            </div>
        </Card>
    );
};

export default AddCartFoodCard;