import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import sl1 from '../../../Assets/home/slide1.jpg'
import sl2 from '../../../Assets/home/slide2.jpg'
import sl3 from '../../../Assets/home/slide3.jpg'
import sl4 from '../../../Assets/home/slide4.jpg'
import sl5 from '../../../Assets/home/slide5.jpg'
import SecTitle from '../../../Components/SecTitle/SecTitle';
import Cover from './BistroCover';

const Order = () => {
    return (
        <div>
            <section className='max-w-6xl mx-auto'>
                <SecTitle
                    subHeading={"---From 11:00am to 10:00pm---"}
                    heading={"ORDER ONLINE"}
                ></SecTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={sl1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sl2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sl3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sl4} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sl5} alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>

    );
};

export default Order;