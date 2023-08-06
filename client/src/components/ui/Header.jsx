import React from "react";
import SearchBar from "./SearchBar";
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth'
export default function Header() {
  const [isOpen, setIsOpen] = useState("");

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
      dropdownList: ["T-Shirts", "Hoodies", "Caps", "Bags", "Accessories"],
    },
  ];

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
  }, [])

  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if(!refOne.current.contains(e.target)) {
      setIsOpen('');
    } else {
      console.log('Clicked inside tab');
    }
  }

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-between flex-wrap bg-black p-4 h-[70px]">
        <div className="flex flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            The Mash Up
          </span>
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
                        onClick={() => setIsOpen(item.title)}
                        ref={refOne}
                      >
                        {item.title}
                        {isOpen === item.title ? (
                          <i className="fa-solid fa-caret-up pl-2 text-[#fc2403]"></i>
                        ) : (
                          <i className="fa-solid fa-caret-down pl-2 text-[#fc2403]"></i>
                        )}
                      </a>
                    </li>
                  </div>
                  <ul
                    className={
                      isOpen === item.title
                        ? "p-2 text-sm text-white flex flex-col bg-black"
                        : "hidden p-2 text-sm text-white flex flex-col bg-black"
                    }
                  >
                    {navMenu[i].dropdownList.map((item, i) => (
                      <li key={item}>
                        <a
                          href="#"
                          className=" block p-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
        </div>
        {Auth.loggedIn() ? (
          <>
          <Link to="/addProduct" className="p-2 text-white">Sell Your Product</Link>
          <a href="/home"><p className="p-2 text-white">Home</p></a>
          <a href="/" onClick={Auth.logout}><p className="p-2 text-white">Logout</p></a>
          <a href="/products/cart" className="p-2 pr-5" ><i className="fa-solid fa-cart-shopping text-[#fc2403] text-xl"></i></a>
          
         </>
        ) : (
          <>
            <a href="/signup"><p className="text-white p-2">Sign Up</p></a>
            <a href="/login"><p className="text-white p-2">Log In</p></a>
          </>

        )}

        <SearchBar />
      </nav>
    </>
  );
}
