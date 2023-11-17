import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useHooks = () => {
    const [foods, setFoods] = useState([])
    console.log(foods);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/foods')
            .then(res => setFoods(res.data))
    }, [])
    return [foods]
};

export default useHooks;