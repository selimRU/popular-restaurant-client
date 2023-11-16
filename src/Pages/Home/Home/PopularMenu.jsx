
import SecTitle from "../../../Components/SecTitle/SecTitle";
import PopularFoodCard from "./PopularFoodCard";
import useHooks from "../../../Hooks/useHooks";


const PopularMenu = () => {
    const foods = useHooks()
    const popularFoods = foods.filter(food => food.category === 'popular')
    console.log(foods);
    return (

        <div className=" max-w-6xl mx-auto">
            <SecTitle heading={'From Our Menu'} subHeading={'Popular Items'}></SecTitle>
            <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    popularFoods?.map(popularFood => <PopularFoodCard key={popularFood._id} popularFood={popularFood} />)
                }
            </div>
            <div className=" flex justify-center my-5">
                <button className=" text-center  px-3 py-2 hover:text-[#BB8506] border-b-2 border-slate-700 uppercase">View Full Menu</button>
            </div>
        </div>



    );
};

export default PopularMenu;