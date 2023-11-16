
import { Parallax } from 'react-parallax';
const MenuCover = ({ img, title, details }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                // bgImage={}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className=' relative'>
                    <img src={img} alt="" />
                    <div className=' absolute bg-black opacity-70 bottom-0 z-10 lg:top-[35%] md:top-[40%] top-[55%] left-[30%] h-[40%] w-[40%] text-white text-center'>
                        <div className=' mt-[10%] md:mt-[2%] lg:mt-[20%] space-y-3'>
                            <h3 className='text-sm md:text-2xl lg:text-5xl font-semibold '>{title}</h3>
                            <p className=' text-xs md:text-base font-normal'>{details}</p>
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default MenuCover;