import Brand_category from "../Components/Brand_category/Brand_category";
import Counting from "../Components/Counting/Counting";
import OurClients from "../Components/OurClients/OurClients";
import Service from "../Components/service/service";
import Slider from "../Components/Slider/Slider";
import Video from "../Components/Video/Video";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Service></Service>
            <OurClients></OurClients>
             <Brand_category></Brand_category>
             <Video></Video>
             <Counting></Counting>
        </div>
    );
};

export default Home;