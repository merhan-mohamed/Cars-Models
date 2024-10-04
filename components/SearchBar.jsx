"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


import SearchManufacturer from "./SearchManufacturer";


const SearchButton = () => (
  <button type='submit' className='z-10'>
    <Image
      src="/magnifying-glass.svg"
  alt="magnifying-glass"
  width={40}
  height={40}
  className='object-contain'/>
  </button>
)






const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter()

    const handleSearch = (e) => {
      e.preventDefault();
      if( manufacturer === " " &&  model === " "){
        return alert("please fill in search bar")
      }
    
      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
    }
    const updateSearchParams = (model, manufacturer) => {
      const searchParams = new URLSearchParams(window.location.search)
      if(model){
        searchParams.set("model", model)
      }else{
        searchParams.delete("model")
      }
      if(manufacturer){
        searchParams.set("manufacturer", manufacturer)
      }else{
        searchParams.delete("manufacturer")
      }
      const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    
      router.push(newPathname)
    } 
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer manufacturer={manufacturer}
             setManufacturer={setManufacturer}
             />

          <SearchButton otherClasses='sm:hidden' />

        </div>

        <div className='searchbar__item '>
          <Image 
          src="/model-icon.png"
          alt="Car Model"
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          />
          <input 
          type='text'
          className='searchbar__input'
          placeholder='Tiguan'
          value={model}
          onChange={(e) => setModel(e.target.value)}/>

          <SearchButton otherClasses='sm:hidden' />

        </div>
        <SearchButton otherClasses='max-sm:hidden' />
      
    </form>
  )
}

export default SearchBar
