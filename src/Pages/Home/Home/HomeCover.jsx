import mncov from '../../../Assets/home/featured.jpg'
import SecTitle from '../../../Components/SecTitle/SecTitle';

const HomeCover = () => {
    return (
        <div>
            <SecTitle heading={'FROM OUR MENU'} subHeading={'---Check it out---'}></SecTitle>
            <div className='relative hidden md:block my-10'>
                <img className=' w-full h-[500px] object-cover' src={mncov} alt="" />
                <div className=' absolute bottom-0 bg-black opacity-60 h-full w-full'>
                    <div className=' flex flex-col md:flex-row lg:flex-row items-center lg:w-[1000px] mx-auto lg:mt-[6%] md:mt-[13%] lg:p-5 md:p-10 gap-5'>
                        <div className=' md:w-[500px] '>
                            <img className=' w-full' src={mncov} alt="" />
                        </div>
                        <div className=' md:w-[500px]'>
                            <p className=' text-white'>March 20, 2023
                                WHERE CAN I GET SOME?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCover;