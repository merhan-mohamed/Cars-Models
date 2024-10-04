"use client";
import Image from "next/image";
import { CarDetails, CustomButton } from ".";
import { useState } from "react";



const CarCard = ({car}) => {
    const {city_mpg, make, model, year, transmission, drive} = car
    const [IsOpen, setIsOpen] = useState(false)

   

    const calculateCarRent = () => {
        const basePricePerDay = 50; // Base rental price per day in dollars
        const mileageFactor = 0.1; // Additional rate per mile driven
        const ageFactor = 0.05; // Additional rate per year of vehicle age
      
        // Calculate additional rate based on mileage and age
        const mileageRate = city_mpg * mileageFactor;
        const ageRate = (new Date().getFullYear() - year) * ageFactor;
      
        // Calculate total rental rate per day
        const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
      
        return rentalRatePerDay.toFixed(0);
      };
      


  return (
    <div className='car-card group' key={city_mpg}>
        <div className="car-card__content" >
            <h2 className='car-card__content-title'>{make} {model}</h2>
        </div>

        <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
            {calculateCarRent(city_mpg, year)}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
        </p>

       
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between text-gray">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src="steering-wheel.svg" width={20} height={20} alt="steering-wheel"/>
                    <p className="text-[14px] leading-[17px]">
                    { transmission === "m" ? "manual" : "automatic"}
                    </p>
                </div>

                <div className="car-card__icon">
                    <Image src="/tire.svg" width={20} height={20} alt="seat" />
                    <p className="car-card__icon-text">{drive.toUpperCase()}</p>
                </div>
                <div className="car-card__icon">
                    <Image src="/gas.svg" width={20} height={20} alt="seat" />
                    <p className="car-card__icon-text">{city_mpg} MPG</p>
                </div>
            </div>

        <div className="car-card__btn-container">
            <CustomButton 
            title="View More"
            Styles="w-full rounded-full bg-primary-blue"
            TextStyle = "text-white text-[14px] leading-[17px] font-bold" 
            handleClick={() => setIsOpen(true)}/>
        </div>
    </div>

    <CarDetails IsOpen={IsOpen} car={car} closeModel={() => (setIsOpen(false))}/>
    </div>

  
  )
}

export default CarCard
