import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../../Assets/home/01.jpg"
import img2 from "../../../Assets/home/02.jpg"
import img3 from "../../../Assets/home/03.png"
import img4 from "../../../Assets/home/04.jpg"
import img5 from "../../../Assets/home/05.png"
const Bannar = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
            </Carousel>

        </div>
    );
};

export default Bannar;