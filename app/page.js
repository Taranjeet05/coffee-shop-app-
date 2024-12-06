import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import InstantCoffee from "./_components/InstantCoffee";
import OrderCoffee from "./_components/OrderCoffee";
import SellingCoffee from "./_components/SellingCoffee";
import Testimonial from "./_components/Testimonial";

export default function Home() {
  return (
      <>
        <Header />
        <Banner />
        <Explore />
        <OrderCoffee />
        <SellingCoffee />
        <InstantCoffee />
        <Testimonial />
        <Footer /> 
      </>
  );
}
