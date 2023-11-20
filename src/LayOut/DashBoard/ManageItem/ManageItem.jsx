import useHooks from "../../../Hooks/useHooks";
import { FaEdit, FaTrash } from "react-icons/fa";
import SecTitle from "../../../Components/SecTitle/SecTitle";

'use client';

import { Table } from 'flowbite-react';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageItem = () => {
    const [foods, refetch] = useHooks()
    const axiosSecure = useAxiosSecure()
    console.log(foods);

    const handleDeletefood = (id) => {
        axiosSecure.delete(`/api/v1/deletefoods/${id}`)
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
            <SecTitle heading={'Manage All Food'} subHeading={'---Hurry Up---'}></SecTitle>
            <h2>My food</h2>
            <div className=" flex justify-between my-5">
                <h3>Total Orders: {foods.length}</h3>
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
                        foods.map(food =>
                            < Table.Row key={food._id}
                                className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <img className=" w-[100px]" src={food.image} alt="" />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {food.name}
                                </Table.Cell>
                                <Table.Cell>{food.price}</Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => handleDeleteCart(cart._id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        <FaEdit></FaEdit>
                                    </button>
                                </Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => handleDeletefood(food._id)} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
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

export default ManageItem;