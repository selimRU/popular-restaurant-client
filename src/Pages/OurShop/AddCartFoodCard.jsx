'use client';

import axios from 'axios';
import { Card } from 'flowbite-react';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/useCart';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const AddCartFoodCard = ({ item }) => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const { name, recipe, image, price, category } = item
    const [, refetch] = useCart()
    const cartItem = {
        email: user?.email,
        name: name,
        recipe: recipe,
        image: image,
        price: price,
        category: category
    }

    const handleCart = () => {

        axiosPublic.post('/api/v1/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Add to cart successfully",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }

            }).catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }
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
                    onClick={handleCart}
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </button>
            </div>
        </Card>
    );
};

export default AddCartFoodCard;