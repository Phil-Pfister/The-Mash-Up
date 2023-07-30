import React from "react";
import SearchBar from "./SearchBar";
import DropdownButton from "./DropdownButton";

export default function Header() {
    

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap bg-red-500 p-4 w-screen">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">The Mash Up</span>
                </div> 
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-md flex items-center justify-center lg:flex-grow ">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 bg-black-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-black-700 md:bg-transparent md:text-black-700 md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:bg-black-500 md:border-0 md:p-0 ">Instruments</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:bg-black-500 md:border-0 md:p-0 ">Music</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:bg-black-500 md:border-0 md:p-0 ">Equipment</a>
                            </li>
                            <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white  hover:bg-black-500 md:border-0 md:p-0 ">Accessories</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <SearchBar />

            </nav>
        </>
    )
}