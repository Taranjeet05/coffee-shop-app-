import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import Header from "./_components/Header";
import OrderCoffee from "./_components/OrderCoffee";
import SellingCoffee from "./_components/SellingCoffee";

export default function Home() {
  return (
      <>
        <Header />
        <Banner />
        <Explore />
        <OrderCoffee />
        <SellingCoffee />
      </>
  );
}
