'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

import { Autoplay,} from 'swiper/modules';
import Image from 'next/image';
import { Button } from "@/components/ui/button"


const Banner = () => {
  return (
    <>
    <div className="bg-gray-100">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       // navigation={true}
        modules={[Autoplay,]}
        className="mySwiper"
      >
        <SwiperSlide className='cursor-pointer'>
          <div className="container md:pt-20 md:pb-16">
             {/*:::::::::::::::::::::::::::::::::::: */}

            <div className="grid grid-cols-2">
              {/*:::::::::::::::::::::::::::::::::::::::: */}
              <div className="relative">
                <h1 className='text-8xl font-bold py-4'>
                  Alowishus Delicious Coffee
                </h1>
                <div className="absolute top-56 mt-1 right-56">
                <Image alt='coffee-mark' width={80} height={80} src='/coffee/cafe.png' />
                </div>

                <p className='py-4'>Ltatem mollitia fuga vel, iusto ipsum laudantium. Iusto quo recusandae min</p>
               {/*:::::::::::::::::::::::::::::::::::: */}

                <div className="flex gap-4 py-6">
                <Button className=" p-7 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Download App
                </Button>
                <Button className='p-7 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide' 
                variant="outline">Shop Coffee
                </Button>
                </div>
                {/*:::::::::::::::::::::::::::::::::::: */}
              </div>
              <div className="relative">
                <Image alt='coffee-cup' 
                src='/coffee/hero1.png' 
                width={600} 
                height={600}  />
              </div>
              <div className="absolute top-9 right-20">
                <Image alt='coffee-mark' width={120} height={120} src='/coffee/cafe.png' />
                </div>
            </div>
          </div>
        </SwiperSlide>

          {/**:::::::::::::::::::::::::::::::::::::::::: */}

        <SwiperSlide className='cursor-pointer' >
          <div className="container md:pt-20 md:pb-10">
             {/*:::::::::::::::::::::::::::::::::::: */}

            <div className="grid grid-cols-2">
              {/*:::::::::::::::::::::::::::::::::::::::: */}
              <div className="relative">
                <h1 className='text-8xl font-bold py-4'>
                  Alowishus Delicious Coffee
                </h1>
                <div className="absolute top-56 mt-1 right-32">
                <Image alt='coffee-mark' width={80} height={80} src='/coffee/cafe.png' />
                </div>

                <p className='py-4'>Ltatem mollitia fuga vel, iusto ipsum laudantium. Iusto quo recusandae min</p>
               {/*:::::::::::::::::::::::::::::::::::: */}

                <div className="flex gap-4 py-6">
                <Button className=" p-7 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Download App
                </Button>
                <Button className='p-7 rounded-md shadow-lg transform hover:scale-105 transition-all text-lg font-normal tracking-wide' 
                variant="outline">Shop Coffee
                </Button>
                </div>
                {/*:::::::::::::::::::::::::::::::::::: */}
              </div>
              <div className="relative">
                <Image alt='coffee-cup' 
                src='/coffee/alowishus-coffee.png' 
                width={600} 
                height={600}  />
              </div>
              <div className="absolute top-9 right-20">
                <Image alt='coffee-mark' width={120} height={120} src='/coffee/cafe.png' />
                </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
    </>
  )
}

export default Banner