import React, { useEffect } from 'react'
import { useState } from 'react'
import {IoIosArrowDropleft,IoIosArrowDropright} from 'react-icons/io'
import {RxDot} from 'react-icons/rx'
import IMG1 from '../Assests/Image1.jpg'
import IMG2 from '../Assests/image2.jpg'
import IMG3 from '../Assests/image3.jpg'
import IMG4 from '../Assests/image4.jpg'
import IMG5 from '../Assests/image5.jpg'

function Carousel() {

    const slides = [
        {
          images: IMG1
        },
        {
          images: IMG3
        },
        {
          images: IMG4
        },
        {
          images: IMG5
        },
        {
          images: IMG2
        }
      ]
    
      const[currentSlide,setCurrentSlide] = useState(0)
    
      const prevSlide = () =>{
        const isFirstSlide = currentSlide === 0
        const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1
        setCurrentSlide(newSlide)
      }
    
      const nextSlide = () =>{
        const isLastSlide = currentSlide === slides.length - 1
        const newSlide = isLastSlide ? 0 : currentSlide + 1
        setCurrentSlide(newSlide)
      }
     
      const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex)
      }
    
      useEffect(()=>{
        const intervalId = setInterval(()=>{
          setCurrentSlide(currentSlide => currentSlide >= slides.length - 1 ? 0 : currentSlide + 1)
        },3750)
    
        return () => clearInterval(intervalId);
      },[])
      

  return (
    <div id='home' className='w-[93%] flex flex-row mt-32 justify-between gap-10'>
        <div  className='h-[600px] w-3/5 items-center justify-between realtive rounded-md ml-9 ' >
            <div style={{backgroundImage: `url(${slides[currentSlide].images})`}} className='w-full h-full rounded-2xl bg-center bg-cover transition-all ease-in'>
            </div>
            <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer ml-2' >
                <IoIosArrowDropleft onClick={prevSlide} size={30}/>
            </div>
            <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer ml-[780px]'>
                <IoIosArrowDropright onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                <div 
                    key={slideIndex}
                    onClick={()=> goToSlide(slideIndex)}
                    className='cursor-pointer transition-all'>
                    <RxDot  size={20}/>
                </div>
                ) )}
            </div>
        </div>
        <div className='flex flex-col w-2/5 gap-8 items-center justify-center'>
            <h2 className='text-5xl font-serif'>IEEE SB CEC</h2>
            <p className='font-serif text-xl ml-8'>
            IEEE Student Branch College of Engineering Chengannur was formed in mid-1997, with the goal of keeping the students in touch with advancing technology. It is equipped with an IEEE library that was inaugurated in December 1999 and currently functions as the headquarters of IEEE SB CEC. The Student Branch comes under the Kochi Hub of IEEE Kerala Section and is one of the most active Student Branches in the country. IEEE SB CEC has made numerous contributions to its student community that has received widespread recognition across the globe and is the first Student Branch in the Asia-Pacific Region to establish a Women in Engineering Affinity Group.
            </p>
        </div>
    </div>
  )
}

export default Carousel