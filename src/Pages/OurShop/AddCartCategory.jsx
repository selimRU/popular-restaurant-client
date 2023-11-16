import AddCartFoodCard from "./AddCartFoodCard";



const AddCartCategory = ({ items }) => {
    
    return (
        <div>
            <div className=" max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    items.map(item => <AddCartFoodCard key={item._id} item={item}></AddCartFoodCard>)
                }
            </div>
        </div>
    );
};

export default AddCartCategory;
