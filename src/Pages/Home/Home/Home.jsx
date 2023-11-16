import { Helmet } from "react-helmet-async";
import Bannar from "./Bannar";
import Call from "./Call"
import MenuCover from "./HomeCover";
import Order from "./Order";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";
import HomeCover from "./HomeCover";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Popular || Home</title>
            </Helmet>
            <div>
                <Bannar></Bannar>
                <Order></Order>
                <HomeCover></HomeCover>
                <PopularMenu></PopularMenu>
                <Call></Call>
                <MenuCover></MenuCover>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;