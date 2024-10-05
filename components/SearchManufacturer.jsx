
"use client"
import {Combobox,  ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import Image from "next/image"
import { useState } from 'react';
import {manufacturers} from "../../constants/Data"


const SearchManufacturer = ({manufacturer, setManufacturer} ) => {
  const [query, setQuery] = useState('');

  const filteredManufacture = query === '' ? manufacturers : manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")))
  return (
    <div className="search-manufacturer">
    <Combobox value={manufacturer} onChange={setManufacturer}>
      <div className="relative w-full">
        <Combobox.Button className= "absolute top-[14px]">
          <Image src="/car-logo.svg"
          width={20}
          height={20}
          className="ml-4"
          alt="Car Logo"/>
        </Combobox.Button>
        <ComboboxInput 
          className="search-manufacturer__input" 
          placeholder='Choose Your Brand'
          displayValue={(manufacturer) => manufacturer}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Combobox.Options>
          {filteredManufacture.map((filtered) =>(
            <ComboboxOption value={filtered} key={filtered} className={({active}) => `relative search-manufacturer__option ${active ? "bg-primary-blue text-white" : "text-gray-900"}`}
            >
              {filtered}
            </ComboboxOption>
          ))}

        </Combobox.Options>

      </div>  
    </Combobox>
    </div>
  )
}

export default SearchManufacturer
