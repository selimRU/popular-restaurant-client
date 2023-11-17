import { FaTrash } from "react-icons/fa";
import SecTitle from "../../../Components/SecTitle/SecTitle";
import useCart from "../../../Hooks/useCart";

'use client';

import { Checkbox, Table } from 'flowbite-react';
import axios from "axios";
import Swal from "sweetalert2";

const MyCart = () => {
    const [carts, refetch] = useCart()
    const totalPrice = carts.reduce((acc, item) => (acc + item.price), 0)
    console.log(carts);

    const handleDeleteCart = (id) => {
        axios.delete(`http://localhost:5000/api/v1/deleteCarts/${id}`)
            .then(res => {
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            })
                            refetch()
                        }
                    }
                })
            })
    }
    return (
        <div>
            <SecTitle heading={'WANNA ADD MORE?'} subHeading={'---My Cart---'}></SecTitle>
            <h2>My Cart</h2>
            <div className=" flex justify-between my-5">
                <h3>Total Orders: {carts.length}</h3>
                <h3>Total Price: {totalPrice}</h3>
            </div>

            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell>Product Image</Table.HeadCell>
                    <Table.HeadCell>Product Name</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>
                        Action
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {
                        carts.map(cart =>
                            < Table.Row key={cart._id}
                                className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <img className=" w-[100px]" src={cart.image} alt="" />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {cart.name}
                                </Table.Cell>
                                <Table.Cell>{cart.price}</Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => handleDeleteCart(cart._id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        <FaTrash></FaTrash>
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        )}
                </Table.Body>
            </Table>
        </div >
    );
};

export default MyCart;