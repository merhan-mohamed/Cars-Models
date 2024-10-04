"use client";
import React from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel, Transition, TransitionChild  } from '@headlessui/react'

const CarDetails = ({car, IsOpen, setIsOpen, closeModel}) => {

   
  return (
    <>
      <Transition appear show={IsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <TransitionChild
           as={Fragment}
           enter="ease-out duration-300"
           enterFrom='opacity-0'
           enterTo='opacity-100'
           leave='ease-in duration-100'
           leaveFrom='opacity-100'
           leaveTo='opacity-0'>
            <div className="fixed inset-0 bg-black bg-opacity-25">
            </div>
          </TransitionChild>

          <div className='fixed inset-0 overflow-y-auto '>
              <div className='flex items-center justify-center min-h-full p-4 text-center'>
              <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-100'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>

              <DialogPanel className="relative w-full max-h-[90vh] max-w-lg rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 overflow-y-auto transform p-6">
                <button
                type="button"
                onClick={closeModel}
                className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'>
                  <Image
                  src="/close.svg"
                  alt="close"
                  width={20}
                  height={20}
                  className="object-contain" />

                </button>

                <div className="flex flex-1 flex-col gap-3">
                  
                  <div className="flex gap-3">
                   

                   
                   

                    
                    
                  </div>
                </div>

                <div className="flex flex-col flex-1 gap-2">
                  <h2 className='font-semibold text-xl capitalize'>
                    {car.model} {car.make}
                  </h2>

                  <div>
                    {Object.entries(car).map(([key, value]) => (
                      <div className='flex justify-between gap-5 w-full ' key={key}>
                        <h4 className='text-gray-500 capitalize'>{key.split("_").join(" ")}</h4>
                        <p className='text-black-100 font-semibold'>{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </DialogPanel>
                
              </TransitionChild>

            </div>
          </div>

        </Dialog>

      </Transition>
    </>
  )
}

export default CarDetails
