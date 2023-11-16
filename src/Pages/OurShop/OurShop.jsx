
import MenuCover from "../Menu/MenuCover";
import AddCartFood from "./AddCartFood";
import shopCover from '../../Assets/shop/banner2.jpg'


const OurShop = () => {
   
    return (
        <div>
            <MenuCover img={shopCover} title={'OUR SHOP'} details={'Would you like to try a dish?'}></MenuCover>
            <AddCartFood ></AddCartFood>
        </div>
    );
};

export default OurShop;