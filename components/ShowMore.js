"use client";
import React from 'react'
import {useRouter} from "next/navigation";
import CustomButton from './CustomButton';

const ShowMore = ({pageNumber, isNext}) => {
    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1 ) * 10; 
        const searchParams = new URLSearchParams(window.location.search)
        searchParams.set("limit", newLimit)
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname)
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton 
        title="ShowMore"
        btnType="button"
        Styles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
