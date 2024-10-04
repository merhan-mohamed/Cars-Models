"use client";
import {useState, Fragment} from 'react';
import Image from "next/image";
import {useRouter} from "next/navigation";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';




const CustomFilters = ({title, options}) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter()

   // update the URL search parameters and navigate to the new URL
   const handleUpdateParams = (selected) => {

    const searchParams = new URLSearchParams(window.location.search)
    if(title === "Fuel"){
      searchParams.set("fuel", selected.value)
    }if(title === "Year"){
      searchParams.set("Year", selected.value)
    }
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathName);
  };

  return (
    <div className="w-fit">
    <Listbox value={selected}
     onChange={(e) => {
      setSelected(e); 
      handleUpdateParams(e) }}  >
      <div className='relative w-fit z-10'>
      <ListboxButton className="custom-filter__btn">
        <span className='block truncate'>{selected.title}</span>
        <Image src="chevron-up-down.svg"
        width={20}
        height={20}
        className='ml-4 object-contain'
        alt="chevron-up-down"/>
      </ListboxButton>
    

      <ListboxOptions className="custom-filter__options" >
        {options.map((item) => (
          <ListboxOption 
          key={item.title}
          className= {({ active }) => `relative py-2 px-4 select-none cursor-default 
          ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
          value={item}
          >
             {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                        {item.title}
                      </span>
                    </>
             )}
          </ListboxOption>
        ))}
      </ListboxOptions>

      
      </div>
      
    </Listbox>
    </div>
  )
}

export default CustomFilters
