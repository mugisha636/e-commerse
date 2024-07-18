import React from 'react'
import {IoMdSearch} from "react-icons/io"
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';

const MenuLinks=[
  {
    id:1,
    name:"home",
    link:"/#",
  },
  {
    id:2,
    name:"shop",
    link:"/#shop",
  },
  {
    id:3,
    name:"about",
    link:"/#about",
  },
  {
    id:4,
    name:"blogs",
    link:"/#blogs",
  }
]
const DropdownLinks=[
  {
   id:1,
   name:"t" 
  }
]

function Navbar() {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
    <div className='py-4'>
      <div className='container flex  justify-between items-center '>
        {/*logo and links section*/}

          <div className='flex items-center gap-4'>
            <a href='#' className='text-primary font-semibold tracking-widest text-2xl 
            uppercase sm:text-3xl'>Eshop</a>
              {/*menu items */}
            <div className='hidden sm:block'> 
              <ul className='flex items-center gap-4'> 
                {
                  MenuLinks.map((data,index)=>(
                  <li key={index}>
                    <a href={data.link} 
                    className='inline-block px-4 font-semibold text-gray-500 
                    hover:text-black dark:hover:text-white duration-200 ' 
                    >{data.name}</a>
                  </li>
                  ))
                }
                  {/*drop down munu*/}

                <li className='relative cursor-pointer group'>
                  <a href='' className='flex items items-center gap-[2px] font-semibold text-gray-500 
                  dark:hover:text-white py-2'>
                    Quick links
                  </a>
                  {/*drop down links*/}
                  <div>
                    <ul>

                      {
                        DropdownLinks.map((data,index)=>(
                          <li>

                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <span>
                    <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                  </span>
                </li>
              </ul>
            </div>
          </div>

        {/*Navbar Rights section*/}
        <div className='flex justify-between items-center gap-4'>
          {/*Search Bar section*/}
          <div className='relative group hidden sm:block'>
            <input type='text' placeholder='Search' className='search-bar'/>
            <IoMdSearch className='text-xl text-gray-600 
            group-hover:text-primary
            dark:text-gray-400 
            absolute top-1/2 -translate-y-1/2 right-3
            duration-200
            '/>
          </div>

          {/*order button section*/}
          <button className='relative p-3 '>
          <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400'/>
          <div className='w-4 h-4 bg-red-500 text-white rounded-full
           absolute top-0 right-0 flex items-center justify-center  text-xs  '>
            4    
          </div>
          </button>
          

          {/*Dark mode section*/}
          <div>
            <DarkMode/> 
          </div>


        </div>

      </div>
    </div>
    </div>
  )
}

export default Navbar