'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { FreeMode,} from 'swiper/modules';
import { Star } from 'lucide-react';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <>
    <div className="container"> 
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode,]}
        className="mySwiper"
      >
        
        <SwiperSlide>
            <div className=" rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-5">

            <div className="bg-gray-200">
              <Image
                  src="/coffee/girl1.png"
                  width={320}
                  height={320}
                  alt="Laptop"
                  className="rounded-t-md object-cover mx-auto"
                />
            </div>
            
              <div className="p-8">
                <div className="grid grid-cols-2 items-center"> 

                  <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook 
                  </h1>
                  
                  <div className=' flex gap-1'>
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                  </div>
               </div>

                  <p className="pt-6 text-gray-500 text-lg">
                      Lorem ipsum  adipisicing elit. 
                      Neque saepe, impedit ad tenetur 
                 </p>
              </div>
            </div>
         </SwiperSlide>

        {/************************************** */}

        <SwiperSlide>
            <div className=" rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-5">

            <div className="bg-gray-200">
              <Image
                  src="/coffee/girl1.png"
                  width={320}
                  height={320}
                  alt="Laptop"
                  className="rounded-t-md object-cover mx-auto"
                />
            </div>
            
              <div className="p-8">
                <div className="grid grid-cols-2 items-center"> 

                  <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook 
                  </h1>
                  
                  <div className=' flex gap-1'>
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                  </div>
               </div>

                  <p className="pt-6 text-gray-500 text-lg">
                      Lorem ipsum  adipisicing elit. 
                      Neque saepe, impedit ad tenetur 
                 </p>
              </div>
            </div>
         </SwiperSlide>

        {/************************************** */}

        <SwiperSlide>
            <div className=" rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-5">

            <div className="bg-gray-200">
              <Image
                  src="/coffee/girl1.png"
                  width={320}
                  height={320}
                  alt="Laptop"
                  className="rounded-t-md object-cover mx-auto"
                />
            </div>
            
              <div className="p-8">
                <div className="grid grid-cols-2 items-center"> 

                  <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook 
                  </h1>
                  
                  <div className=' flex gap-1'>
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                  </div>
               </div>

                  <p className="pt-6 text-gray-500 text-lg">
                      Lorem ipsum  adipisicing elit. 
                      Neque saepe, impedit ad tenetur 
                 </p>
              </div>
            </div>
         </SwiperSlide>

         {/************************************ */}

         <SwiperSlide>
            <div className=" rounded-md border bg-white dark:bg-gray-800 shadow-lg transition-colors duration-500 md:m-5">

            <div className="bg-gray-200">
              <Image
                  src="/coffee/girl1.png"
                  width={320}
                  height={320}
                  alt="Laptop"
                  className="rounded-t-md object-cover mx-auto"
                />
            </div>
            
              <div className="p-8">
                <div className="grid grid-cols-2 items-center"> 

                  <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook 
                  </h1>
                  
                  <div className=' flex gap-1'>
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                    <Star width={20} className='text-yellow-400' />
                  </div>
               </div>

                  <p className="pt-6 text-gray-500 text-lg">
                      Lorem ipsum  adipisicing elit. 
                      Neque saepe, impedit ad tenetur 
                 </p>
              </div>
            </div>
         </SwiperSlide>
        
      </Swiper>
      </div>
    </>
  )
}

export default Testimonial