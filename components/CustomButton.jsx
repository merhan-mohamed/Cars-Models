"use client";

import Image from "next/image"

const CustomButton = ({title, handleClick, Styles, btnType, rightIcon,  TextStyle }) => {
  return (
    <button 
    disabled={false}
    className= {` custom-btn ${Styles} `}
    type={btnType || "button"}
    onClick={handleClick}
    
    >
        <span className={`flex-1 ${TextStyle}`}>{title}</span>
        {rightIcon && (
          <div className="relative w-6 h-6">
          <Image src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"/>
        </div>)}
      
    </button>
      
   
  )
}

export default CustomButton
