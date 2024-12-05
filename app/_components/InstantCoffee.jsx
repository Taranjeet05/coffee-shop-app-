import Image from "next/image"
import { Button } from "@/components/ui/button"

const InstantCoffee = () => {
  return (
    <>
    <div className="bg-gray-50 md:py-16">
      <div className="conatiner">
        <div className="grid grid-cols-2 gap-20 items-center">

          {/************************************** */}

          <div className="order-2 flex InstantCoffee_col relative mx-auto">

            <Image src='/coffee/coffee-banner.png' 
            alt="Coffee-cups" 
            className="border-2 rounded-2xl border-gray-100 absolute top-0 left-20 z-20"
            height={250} width={250} />

            <Image src='/coffee/coffee-banner.png' 
            alt="Coffee-cups" 
            className="border-2 rounded-2xl border-gray-100 -rotate-12 z-10"
            height={250} width={250} />

            <img src='/coffee/hand-drawn.png' 
            alt="Coffee-cups" 
            className="absolute top-20 -left-16 max-w-md"
            />
          </div>

          {/************************************** */}

          <div className=" order-1 ps-40">
            <h1 className="text-5xl font-bold">Instant Coffee At Your Home</h1>
            <p className="py-8 text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Neque saepe, impedit ad tenetur fugit suscipit animi praesentium assumenda? 
              Quas similique aspernatur earum ducimus, iusto minima?
            </p>
            <Button className=" p-6 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
             DOWNLOAD OUR APP
            </Button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default InstantCoffee