import Image from "next/image"
import { Button } from "@/components/ui/button"


const SellingCoffee = () => {
  return (
    <>
     <div className="bg-gray-50 md:py-20">
      {/************************************* */}
      <div className="grid grid-cols-6 text-center md:pt-10 md:pb-52">
          
          <div className="col-start-2 col-span-4">
            <h1 className="text-5xl font-bold">Best Selling Coffee</h1>
            <p className="py-4 w-2/4 mx-auto text-gray-600 text-lg">Hello Thank you for visiting our store. Lorem, ipsum dolor sit amet 
              consm?</p>
          </div>
        
        </div>
      {/************************************* */}
      <div className="container">
        <div className="grid grid-cols-3 gap-16 w-11/12 mx-auto">

        {/******************************************* */}
          <div className="shadow-lg hover:shadow-xl cursor-pointer px-12 py-8 rounded-lg hover:scale-105 transition-all relative">
            {/******************************************* */}
            <div className="grid grid-cols-2 gap-6 items-end">
              <Image src='/coffee/mid1.png'
              className="absolute -right-10 bottom-72"
              width={280} 
              height={280}
               alt='coffee-cups'/> 
               <div className="">
                <p className=" text-gray-500 text-lg">#1 Selling</p>
                <h1 className="text-5xl font-bold py-2">
                  Double Espresso
                </h1>
               </div>
            </div>
              {/********************** */}
            <p className="py-3 text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi 
            enim voluptatem, porro aliquid et qui veniam magni neque sed repellat!
          </p>
          <div className="grid grid-col-2 gap-6 items-center py-2">
            <h1 className="font-semibold text-2xl">$59.99</h1>
            <Button className=" p-6 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
              Order Now
            </Button>
          </div>
          </div>

        {/********************************************* */}

        <div className="shadow-lg hover:shadow-xl cursor-pointer px-12 py-8 rounded-lg hover:scale-105 transition-all relative">
            {/******************************************* */}
            <div className="grid grid-cols-2 gap-6 items-end">
              <Image src='/coffee/mid1.png'
              className="absolute -right-10 bottom-72"
              width={280} 
              height={280}
               alt='coffee-cups'/> 
               <div className="">
                <p className=" text-gray-500 text-lg">#1 Selling</p>
                <h1 className="text-5xl font-bold py-2">
                  Double Espresso
                </h1>
               </div>
            </div>
              {/********************** */}
            <p className="py-3 text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi 
            enim voluptatem, porro aliquid et qui veniam magni neque sed repellat!
          </p>
          <div className="grid grid-col-2 gap-6 items-center py-2">
            <h1 className="font-semibold text-2xl">$59.99</h1>
            <Button className=" p-6 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
              Order Now
            </Button>
          </div>
          </div>

        {/**************************** */}

        <div className="shadow-lg hover:shadow-xl cursor-pointer px-12 py-8 rounded-lg hover:scale-105 transition-all relative">
            {/******************************************* */}
            <div className="grid grid-cols-2 gap-6 items-end">
              <Image src='/coffee/mid1.png'
              className="absolute -right-10 bottom-72"
              width={280} 
              height={280}
               alt='coffee-cups'/> 
               <div className="">
                <p className=" text-gray-500 text-lg">#1 Selling</p>
                <h1 className="text-5xl font-bold py-2">
                  Double Espresso
                </h1>
               </div>
            </div>
              {/********************** */}
            <p className="py-3 text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi 
            enim voluptatem, porro aliquid et qui veniam magni neque sed repellat!
          </p>
          <div className="grid grid-col-2 gap-6 items-center py-2">
            <h1 className="font-semibold text-2xl">$59.99</h1>
            <Button className=" p-6 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
              Order Now
            </Button>
          </div>
          </div>
        </div>
      </div>

    </div> 
    </>
  )
}

export default SellingCoffee
