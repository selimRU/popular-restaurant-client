
import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useHooks = () => {
    const axiosPublic = useAxiosPublic()
    // const [foods, setFoods] = useState([])
    // console.log(foods);

    const { data: foods = [], refetch } = useQuery({
        queryKey: ['foods'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/v1/foods')
            return res.data
        }
    })

    // useEffect(() => {
    //     axiosPublic.get('/api/v1/foods')
    //         .then(res => setFoods(res.data))
    // }, [])
    return [foods, refetch]
};

export default useHooks;