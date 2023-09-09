import React, { useState } from 'react'
import { BsChevronCompactLeft,  BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'



const Featured = () => {
 
    //creating array of objects
    const sliders=[
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
    ]


    const [currentIndex,setCurrentIndex]=useState(0);



    const prevSlider = ()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
       }  


     const nextSlider=()=>{
        //agar last index pa hain toh pahle image chahiye, isliye 0 assign kara 
        //else incremtn index
        const isLastSlide = currentIndex === sliders.length-1;
        const newIndex= isLastSlide ? 0:currentIndex+1
        setCurrentIndex(newIndex); 

     }  

     //onclick the dot the current image will load
     const moveToNextSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
       }

    return (
        <div className='max-w-[1540px] h-[500px] w-full m-auto py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-300'
             style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
        ></div>
{/* icon left ma  */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlider}/>

        </div>
        {/* icon right main */}
        {/* {when we hover the arrow will be shwon due to group property } */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlider}/>
        </div>
{/* jitne elemtn hain unte dot aayega aur jaise hii dot pa click karoge toh
uss slide wali images pa phoch jaoge */}
<div  className='flex top-4 justify-center py-2'>
             {
                sliders.map((sliderItems, slideIndex)=>(
                   <div 
                    key={slideIndex}
                    onClick={()=>moveToNextSlide (slideIndex)}
                   className='text-2xl cursor-pointer'>
                    <RxDotFilled/>
                   </div>
                ))
             }
        </div>



        </div>
 
  )
}

export default Featured