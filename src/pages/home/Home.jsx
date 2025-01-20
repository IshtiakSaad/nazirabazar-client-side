import FeaturedFoods from "../../components/FeaturedFoods";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/TestimonialsSection";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;