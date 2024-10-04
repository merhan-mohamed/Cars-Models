"use client";
import { CustomButton } from '.';
import Image from 'next/image';


const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Find, book, or rent a car __ quickly and easily! </h1>
        <p className='hero__subtitle'> Streamline your car rental experience with our effortless booking process.</p>

        <CustomButton title="Explore Cars" Styles="bg-primary-blue text-white rounded-full mt-10" handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
            <Image  src="/hero.png" className='object-contain' fill  alt="hero"/>
        </div>
        <div className='hero__image-overlay'></div>
      </div>
    </div>
  )
}

export default Hero
