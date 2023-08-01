import React from "react";
import SearchBar from "./SearchBar";
import { useState } from "react";


export default function Header() {

    const [isOpen, setIsOpen] = useState('');

  const navMenu = [
    {
      id: 0,
      title: "Instruments",
      selected: false,
      dropdownList: [
        "Guitar and Basses",
        "Percussion",
        "Piano",
        "String",
        "Brass",
      ],
    },
    {
      id: 1,
      title: "Equipment",
      selected: false,
      dropdownList: [
        "DJ Equipment",
        "Lighting",
        "Microphones",
        "Headphones",
        "Cables",
        "Accessories",
      ],
    },
    {
      id: 2,
      title: "Music",
      selected: false,
      dropdownList: [
        "Rock",
        "Pop",
        "Rap",
        "Hip Hop",
        "Electronic",
        "Jazz",
        "Classical",
        "Folk",
        "Country",
        "blacks",
        "Latin",
        "Reggae",
      ],
    },
    {
        id: 3,
        title: "Merch",
        selected: false,
        dropdownList: [
            "T-Shirts",
            "Hoodies",
            "Caps",
            "Bags",
            "Accessories"
            ],
      },
  ];




    return (
        <>
            <nav className="flex items-start justify-between flex-wrap bg-red-500 p-4 w-screen h-[90px]">
                <div className="flex flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">The Mash Up</span>
                </div> 
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-md flex items-center justify-center lg:flex-grow ">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-black-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            {navMenu.map((item, i) => (
                                <div key={item.id}>
                                    <div className="flex">
                                        <li>
                                        <a 
                                        href="#" 
                                        className="block py-2 pl-3 pr-4 text-white bg-black-700 md:bg-transparent md:text-black-700 md:p-0"
                                        onMouseEnter={() => setIsOpen(item.title)}
                                        onMouseLeave={() => setIsOpen('')}
                                        >{item.title}
                                        {isOpen===item.title ? (
                                            <i className="fa-solid fa-caret-up pl-2"></i>
                                        ) : (
                                            <i className="fa-solid fa-caret-down pl-2"></i>
                                        )}</a>
                                    </li>
                                    </div>
                                    <ul className=
                                                    {isOpen===item.title ? (
                                                        "p-2 text-sm text-white flex flex-col bg-black"
                                                    ) : (
                                                        "hidden p-2 text-sm text-white flex flex-col bg-black"
                                                    )}
                                                    >

                                                {navMenu[i].dropdownList.map((item, i) => (
                                                    
                                                        <li key={item}>
                                                            <a href="#" className=" block py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{item}</a>
                                                        </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                
                            ))}
                            
                        
                        </ul>
                    </div>
                </div>
                <SearchBar />

            </nav>
        </>
    )
}