import drums from "../assets/images/drums.jpg";
import Comments from "../components/ui/Comments";
import { useState } from "react";

export default function ProductDetails() {
  const [openTab, setOpenTab] = useState("Description");

  function handleTabChange(tab) {
    setOpenTab(tab);
    console.log(tab);
  }

  function Description() {
    return (
<div>
                  <h4 className="text-xl font-black mb-3">
                    Lorem ipsum dolor sit amet
                  </h4>
                  <p className="text-lg font-bold">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
    )

  }

  return (
    <>
      <section className="py-20">
        <div className="container bg-gray-200 rounded p-4 mx-auto">
          <div className="max-w-xl lg:max-w-6xl mx-auto">
            <div className="flex flex-wrap -mx-4 mb-12">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                <div className="w-full h-[50%]">
                  <a
                    className="relative group block mb-6 h-full w-full bg-blueGray-900 rounded-md"
                    href="#"
                  >
                    <div className="absolute top-0 left-0 h-full w-full transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                      <img
                        className="img-fluid w-full h-full object-cover rounded-md border-2 border-black"
                        src={drums}
                        alt=""
                      ></img>
                    </div>
                  </a>
                  <div className="flex flex-wrap -mx-3 -mb-3 justify-between">
                    <div className="w-1/2 xs:w-1/4 px-3 mb-3">
                      <a
                        className="relative group block h-24 w-full bg-blueGray-900 rounded-md"
                        href="#"
                      >
                        <div className="absolute top-0 left-0 h-full w-full transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                          <img
                            className="img-fluid w-full h-full object-cover rounded-md border-2 border-black"
                            src={drums}
                            alt=""
                          ></img>
                        </div>
                      </a>
                    </div>
                    <div className="w-1/2 xs:w-1/4 px-3 mb-3">
                      <a
                        className="relative group block h-24 w-full bg-blueGray-900 rounded-md"
                        href="#"
                      >
                        <div className="absolute top-0 left-0 h-full w-full transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                          <img
                            className="img-fluid w-full h-full object-cover rounded-md border-2 border-black"
                            src={drums}
                            alt=""
                          ></img>
                        </div>
                      </a>
                    </div>
                    <div className="w-1/2 xs:w-1/4 px-3 mb-3">
                      <a
                        className="relative group block h-24 w-full bg-blueGray-900 rounded-md"
                        href="#"
                      >
                        <div className="absolute top-0 left-0 h-full w-full transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                          <img
                            className="img-fluid w-full h-full object-cover rounded-md border-2 border-black"
                            src={drums}
                            alt=""
                          ></img>
                        </div>
                      </a>
                    </div>
                    <div className="w-1/2 xs:w-1/4 px-3 mb-3">
                      <a
                        className="relative group block h-24 w-full bg-blueGray-900 rounded-md"
                        href="#"
                      >
                        <div className="absolute top-0 left-0 h-full w-full transform -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                          <img
                            className="img-fluid w-full h-full object-cover rounded-md border-2 border-black"
                            src={drums}
                            alt=""
                          ></img>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-lg">
                  <h2 className="text-4xl font-black mb-1">Product title</h2>
                  <span className="block text-sm font-bold mb-5">
                    Seller's Username
                  </span>
                  <div className="flex items-center mb-4">
                    <button className="inline-block mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-500 mr-1"
                        viewBox="0 0 17 17"
                        transform="scale(1.3)"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                    </button>
                  </div>
                  <span className="block text-2xl font-black text-green-700 mb-4">
                    $ 199.00
                  </span>
                  <p className="font-bold mb-2">
                    Pariatur ex aliqua elit ut enim consequat amet non do ut. Ad
                    aute deserunt fugiat qui Lorem in quis velit labore
                    voluptate.
                  </p>
                  <ul className="list-disc list-inside font-medium mb-6">
                    <li>
                      Pariatur ex aliqua elit ut enim consequat amet non do ut.
                    </li>
                    <li>
                      Ad aute deserunt fugiat qui Lorem in quis velit labore
                      voluptate.
                    </li>
                    <li>Lorem in quis velit labore</li>
                  </ul>
                  <div className="flex flex-wrap mb-4">
                    <div className="w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
                      {/* Input conditional logic for this to render if there are multiple items to purchase */}
                      {/* <span className="block text-sm font-black mb-2">Amount</span>
                      <div className="flex h-12 w-24 px-2 items-center justify-between border-2 border-black rounded-md">
                        <button className="flex w-3.5 h-3.5 px-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                          <div className="h-px mx-px w-full bg-white"></div>
                        </button>
                        <input className="w-10 text-center text-sm font-bold placeholder-black text-black outline-none" type="number" placeholder="2">
                          </input>
                        <button className="relative flex w-3.5 h-3.5 px-px py-px items-center justify-center bg-black hover:bg-indigo-500 rounded transition duration-100">
                          <div className="relative h-full w-full py-px">
                            <div className="absolute top-1/2 left-0 h-px w-full bg-white"></div>
                            <div className="inline-block max-w-max mx-auto h-full bg-white">
                              <div className="inline-block px-px"></div>
                            </div>
                          </div>
                        </button>
                      </div> */}
                    </div>
                    <div className="w-full sm:w-auto">
                      {/* Input conditional logic to show this if it is a clothing item */}
                      {/* <span className="block text-sm font-black mb-2">Size</span>
                      <div className="group relative h-12 w-32 border-2 border-black rounded-md overflow-hidden">
                        <select className="w-full h-full px-4 text-sm font-bold appearance-none outline-none" name="" id="">
                          <option value="1">Small</option>
                          <option value="1">Medium</option>
                          <option value="1">Large</option>
                        </select>
                        <span className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 text-black group-hover:text-indigo-500">
                          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.94667 0.453308H4.79333H1.05333C0.413333 0.453308 0.0933335 1.22664 0.546667 1.67997L4 5.13331C4.55333 5.68664 5.45333 5.68664 6.00667 5.13331L7.32 3.81997L9.46 1.67997C9.90667 1.22664 9.58667 0.453308 8.94667 0.453308Z" fill="currentColor"></path>
                          </svg>
                        </span>
                      </div> */}
                    </div>
                  </div>
                  <div className="flex flex-wrap sm:flex-nowrap items-center -mx-2 mb-6">
                    <div className="flex-grow-1 w-full px-2 mb-4">
                      <a
                        className="group relative inline-block h-12 w-full -mb-2 bg-blueGray-900 rounded-md"
                        href="#"
                      >
                        <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                          <div className="flex h-full w-full items-center justify-center bg-[#fc2403] border-2 border-black rounded-md hover:bg-black hover:border-[#fc2403]">
                            <span className="text-base font-black text-white">
                              Add to Cart
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* Tie logic that saves an item to a user's wishlist */}
                    <div className="w-auto px-2 mb-4">
                      <a
                        className="inline-flex items-center justify-center w-12 h-12 text-black hover:text-indigo-500 border-2 border-black hover:border-indigo-500 rounded-md transition duration-200"
                        href="#"
                      >
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add conditional rendering logic that loads the Description, Customer Reviews or Shipping & Returns sections depending on what the user clicks */}
            <div className="mb-8 border-b-2 border-black">
              <div className="flex flex-col md:flex-row -mb-px">
                <a
                  className="inline-block px-2 pb-2 mb-3 md:mb-0 text-lg font-black text-[#fc2403] border-b-4 border-[#fc2403]"
                  href="#"
                  onClick={() => handleTabChange("Description")}
                >
                  Description
                </a>
                <a
                  className="inline-block px-2 pb-2 mb-3 md:mb-0 text-lg font-bold text-black"
                  href="#"
                  onClick={() => handleTabChange("Reviews")}
                >
                  Customer Reviews
                </a>
                
              </div>
              {openTab === "Description" ? (
                <Description />
              ) : openTab === "Reviews" ? (
                <Comments />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
