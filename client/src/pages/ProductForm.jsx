import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { Image } from 'cloudinary-react';
import { ADD_PRODUCT } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";


import Auth from '../utils/auth';


// import { QUERY_ALL_PRODUCTS } from '../utils/queries';

const ProductForm = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ category: "Music" });
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  // const userQuery = useQuery(QUERY_USER);

  // photo uploader functions

  const uploadImage = async () => {
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append(
      "upload_preset",
      "hjgaxcrg"
    );
    data.append("cloud_name", "dzcqdcvqv");
    data.append("folder", "Cloudinary-React");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dzcqdcvqv/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      setUrl(res.url);
      setLoading(false);
      
      
    } catch (error) {
      setLoading(false);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(url)
    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
  };



  // quantity and price events to set numbers
  const handleQuantChange = (event) => {
    setQuantity(+event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(+event.target.value);
  };

  // const [numberInput, setNumberInput] = useState({ price: 0, quantity: 0 })

  const [addProduct] = useMutation(ADD_PRODUCT);

  


    const handleFormSubmit = async (event) => {
        event.preventDefault();
      
        try {
          console.log({ name: formState.name,
            description: formState.description,
            image: url,
            condition: formState.condition,
            seller: Auth.getUser().data.username,
            category: formState.category,
            keyword: formState.keyword,
            price,
            quantity, })
            const { data } = await addProduct({
                variables: { 
                  name: formState.name,
                  description: formState.description,
                  image: url,
                  condition: formState.condition,
                  seller: Auth.getUser().data.username,
                  category: formState.category,
                  keyword: formState.keyword,
                  price,
                  quantity, 
                  },
                
                
                });
            
               navigate("/products");
            


      navigate("/products");
    } catch (err) {
      console.error("err", err);
    }
  };


        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value,
            });
            setPrice({
              ...price
            });
            setQuantity({ ...quantity });
            
        };

        return (
    <div className="flex flex-col items-center justify-center">
    <h3 className="leading-6 text-2xl pb-8" >Add your product to sell to others</h3>  
    {Auth.loggedIn() ? (
      <>   
    <form onSubmit={handleFormSubmit} className="w-full max-w-lg object-center">
    <p className="text-white text-xs italic block">Please fill out all fields.</p>
        <div className="flex flex-wrap -mx-3 mb-6">
        
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-product-name">
        Product Name
      </label>
      <input onChange={handleChange} 
      className="appearance-none block w-full bg-gray-200 

      text-gray-700 border rounded py-3 px-4 mb-3 leading-tight 
      focus:outline-none focus:bg-white"
                id="grid-product-name"
                name="name"
                type="text"
                placeholder="name of product"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-seller"
              >
                Seller
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="seller"
                id="grid-last-name"
                type="text"
                defaultValue={Auth.getUser().data.username}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-description"
              >
                Description
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full 
      bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 

      leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      name="description" id="grid-image-link" type="text" placeholder="Description"/>
      
    </div>
  </div>
  {/* <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
        Image
      </label>
      <input onChange={handleChange} className="appearance-none block w-full 
      bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      name="image" id="grid-image-link" type="text" placeholder="image url"/>
      
    </div>
  </div> */}
  
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-condition">
        condition
      </label>
      <input onChange={handleChange} 
      className="appearance-none block w-full bg-gray-200 

      text-gray-700 border border-gray-200 rounded py-3 px-4 
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="condition"
                id="grid-condition"
                type="text"
                placeholder="mint, great, good, fair, poor"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-category"
              >
                category
              </label>
              <div className="relative">
                <select
                  onChange={handleChange}
                  name="category"
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Music</option>
                  <option>Instrument</option>
                  <option>Equipment</option>
                  <option>Merch</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-keyword"
              >
                Keyword
              </label>
              <input
                onChange={handleChange}
                className="appearance-none block w-full bg-gray-200 
      text-gray-700 border border-gray-200 rounded py-3 px-4 
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="keyword"
                id="grid-zip"
                type="text"
                placeholder="Rock, Guitar, etc"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-price"
              >
                Price
              </label>
              <input
                onChange={handlePriceChange}
                className="appearance-none block w-full bg-gray-200 
      text-gray-700 border border-gray-200 rounded py-3 px-4 
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="price"
                id="grid-zip"
                type="number"
                placeholder="in usd"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-keyword"
              >
                Quantity
              </label>
              <input
                onChange={handleQuantChange}
                className="appearance-none block w-full bg-gray-200 text-gray-700
       border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 

       focus:bg-white focus:border-gray-500" 
       name="quantity" id="grid-zip" type="number" placeholder="1"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-keyword">
        Push
      </label>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
        </div>
  </div>
</form>
  <div className="sm:px-8 md:px-16 sm:py-8">
      <div className="">
        <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
          <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
            <span>Click on Upload a File</span>&nbsp;
          </p>
          <input
            id="hidden-input"
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
          <label htmlFor="hidden-input" className="cursor-pointer">
            <div className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
              Upload a file
            </div>
          </label>

          <div className="flex justify-center items-center mt-5 mx-3 max-w-xs">
            {preview && <img src={preview} alt="preview" className="w-full" />}
          </div>
        </header>
        <div className="flex justify-end pb-8 pt-6 gap-4">
          <button
            onClick={uploadImage}
            className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none disabled:cursor-not-allowed"
            disabled={!image}
          >
            Upload now
          </button>
          <button
            onClick={handleResetClick}
            className="rounded-sm px-3 py-1 bg-red-700 hover:bg-red-500 text-white focus:shadow-outline focus:outline-none"
          >
            Reset
          </button>
        </div>
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6"></div>
            <span>Processing...</span>
          </div>
        ) : (
          url && (
            <div className="pb-8 pt-4">
              <Image
                cloudName={"dzcqdcvqv"}
                publicId={url}
              />
            </div>
          )
        )}
      </div>
    </div>
</>  
    ) : (
      <p>
          You need to be logged in to share add a product. Please{' '}

          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ProductForm;
