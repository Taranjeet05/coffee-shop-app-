import { Button } from "@/components/ui/button"
import Image from "next/image"


const Explore = () => {
  return (
    <>
    <div className="bg-gray-50">
      <div className="conatiiner py-20 ">
        {/**::::::::::::::::::::::::::::::::::::::::::::::: */}
        <div className="grid grid-cols-6 text-center md:py-16">
          
          <div className="col-start-2 col-span-4">
            <h1 className="text-5xl font-bold">Explore our Alowishus</h1>
            <p className="py-2 text-gray-600 text-lg">Hello Thank you for visiting our store. Lorem, ipsum dolor sit amet 
              consectetur aosam?</p>
          </div>
        
        </div>
        {/*:::::::::::::::::::::::::::::::::::::::::::::::::*/}
        <div className="grid grid-cols-3 gap-14 w-4/5 mx-auto">

        {/**:::::::::::::::::::::::::::::::::::::::: */}

          <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all">
            <h1 className="text-3xl font-semibold text-gray-700">
              Our Catering
            </h1>
            <p className="py-2 text-gray-500 text-lg">
              Alowishus Catering Delicious drop off Catering.
            </p>

            <div className="text-center">
              <Image src='/coffee/icon1.png' width={200} height={200} alt="Catering-icon"
              className='py-6'
              />
              <Button className=" p-6 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
                Order Catering
              </Button>
          </div>
          </div>
          

        {/**:::::::::::::::::::::::::::::::::::::::::::: */}

          <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all">
            <h1 className="text-3xl font-semibold text-gray-700">
              The Food
            </h1>
            <p className="py-2 text-gray-500 text-lg">
              Our entire menu is available as dine in or takeaway.
            </p>

            <div className="text-center">
              <Image src='/coffee/icon2.png' width={200} height={200} alt="Catering-icon" 
              className='py-6'
              />
              <Button className=" p-6 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
                Food Menu
              </Button> 
            </div>
          </div>

        {/**::::::::::::::::::::::::::::::::::::::::::::: */}

          <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-10 rounded-lg hover:scale-105 transition-all">
            <h1 className="text-3xl font-semibold text-gray-700">
              The Gelato
            </h1>
            <p className="py-2 text-gray-500 text-lg">
              Life is like Gelato, enjoy it before it melts.
            </p>

            <div className="text-center">
              <Image src='/coffee/icon3.png' width={200} height={200} alt="Catering-icon"
              className='py-6'
              />
              <Button className=" p-6 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
              Discover More
              </Button>
            </div>
          </div>


        </div>
      </div>
    </div>
    
    </>
  )
}

export default Explore