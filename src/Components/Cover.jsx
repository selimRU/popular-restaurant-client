import chef from '../Assets/home/chef-service.jpg'

const Cover = () => {
    return (
        <div className="relative my-10">
            <img src={chef} alt="" />
            <section className=' h-[90%] w-[90%] left-[5%] top-[5%] lg:h-[40%] md:h-[70%] md:w-[60%] lg:w-[40%] md:top-[15%] md:left-[20%] lg:top-[25%] lg:left-[30%] text-center bg-white absolute font-semibold '>
                <div className=' p-2 md:p-3 lg:p-3'>
                    <h3 className=' text-base md:text-2xl '>Bistro Boss</h3>
                    <p className=' text-xs md:text-base lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </section>
        </div>
    );
};

export default Cover;