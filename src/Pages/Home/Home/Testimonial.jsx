import React, { useEffect, useState } from 'react';
import SecTitle from '../../../Components/SecTitle/SecTitle';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
const Testimonial = () => {
    const axiosPublic = useAxiosPublic()
    // const Rating = require('react-rating');
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axiosPublic.get('/api/v1/reviews')
            .then(res => {
                const reviews = res.data
                console.log(reviews);
                setReviews(reviews)
            })
    }, [])
    return (
        <div className=' max-w-6xl mx-auto my-5'>
            <SecTitle heading={'TESTIMONIALS'} subHeading={'---What Our Clients Say---'}></SecTitle>
            <div className=' flex justify-center my-10'>
                <FaQuoteLeft className=' text-4xl' />
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <div >
                    {
                        reviews.map(review => <SwiperSlide className=' space-y-3 px-16' key={review._id}>
                            <Rating
                                className=' w-10 mx-auto'
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='text-[#444] text-xs text-center '>{review.details}</p>
                            <p className='text-center text-2xl text-[#CD9003]'>{review.name}</p>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonial;