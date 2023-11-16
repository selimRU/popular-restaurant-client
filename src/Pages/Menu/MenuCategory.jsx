import MenuCategoryCard from "./MenuCategoryCard";


const MenuCategory = ({ items }) => {

    return (
        <div className=" max-w-6xl mx-auto my-5">
            <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    items?.map(item => <MenuCategoryCard key={item._id} item={item} />)
                }
            </div>
            <div className=" flex justify-center my-5">
                <button className=" text-center  px-3 py-2 hover:text-[#BB8506] border-b-2 border-slate-700 uppercase">Order Your Food</button>
            </div>
        </div>
    );
};

export default MenuCategory;