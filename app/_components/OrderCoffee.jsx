import { Button } from "@/components/ui/button"
import Image from "next/image"
Button

const OrderCoffee = () => {
  return (
    <>
    <div className="bg-gray-50 md:py-16">
      <div className="conatiner">
        <div className="grid grid-cols-2 gap-20 items-center">
          <div className="">
            <Image src='/coffee/coffee-mid.png' alt="Coffee-cups" height={600} width={600}/>
          </div>
          <div className="pe-20">
            <h1 className="text-5xl font-bold">Order your favourite Coffee</h1>
            <p className="py-8 text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Neque saepe, impedit ad tenetur fugit suscipit animi praesentium assumenda? 
              Quas similique aspernatur earum ducimus, iusto minima?
            </p>
            <Button className=" p-6 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
             Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default OrderCoffee