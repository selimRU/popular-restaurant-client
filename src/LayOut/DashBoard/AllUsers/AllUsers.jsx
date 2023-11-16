import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import axios from "axios";
'use client';

import { Table } from 'flowbite-react';

const AllUsers = () => {
    const { data } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axios.get('http://localhost:5000/api/v1/getUsers')
            return data
        }
    })
    return (
        <Table>
            <Table.Head>
                <Table.HeadCell>Product name</Table.HeadCell>
                <Table.HeadCell>Color</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>
                    Update
                </Table.HeadCell>
                <Table.HeadCell>
                    Action
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {console.log(data)}
                {data?.data?.map((user, index) =>
                    < Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {index + 1}
                        </Table.Cell>
                        <Table.Cell>{user.name}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                            </a>
                        </Table.Cell>
                        <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Delete
                            </a>
                        </Table.Cell>
                    </Table.Row>
                )

                }
            </Table.Body>
        </Table >
    );
};

export default AllUsers;
