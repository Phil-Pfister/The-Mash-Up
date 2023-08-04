import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PRODUCT } from '../utils/mutations';


// import Auth from '../../utils/auth';
// import { QUERY_ALL_PRODUCTS } from '../utils/queries';

const ProductForm = (props) => {
    const [formState, setFormState] = useState({});
  console.log(formState)

    const [addProduct, { error }] = useMutation(ADD_PRODUCT);
    //     , {
    //     update(cache, { data: { addProduct } }) {
    //         try {
    //             const { products } = cache.readQuery({ query: QUERY_ALL_PRODUCTS });

    //             cache.writeQuery({
    //                 query: QUERY_ALL_PRODUCTS,
    //                 data: { products: [addProduct, ...products] },
    //             });
    //         } catch (err) {
    //             console.error(err);
    //         }

    //         const { me } = cache.readQuery({ query: QUERY_ME });
    //         cache.writeQuery({
    //             cache: QUERY_ME,
    //             data: { me: {...me, products: [...me.products, addProduct] } },
    //         });
            
    //     },
    // });

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addProduct({
                variables: {
                    name: formState.name,
                    description: formState.description,
                    price: formState.price,
                    quantity: formState.quantity,
                    image: formState.image,
                    condition: formState.image,
                    seller: formState.seller,
                    category: formState.category,
                    keyword: formState.keyword,
                },
            });

            setProductName('');
            setProductDescription('');
            setPrice(0);
            setQuantity(0);
            setImage('');
            setCondition('');
            setSeller('');
            setCategory('');
            setKeyword('');

            } catch (err){
                console.error('err', err);
            }
        };

        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value,
            });
        };

        return (
    <div className="h-screen flex flex-col items-center justify-center">
    <h3 className="leading-6 text-2xl pb-8" >Add your product to sell to others</h3>       
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
      focus:outline-none focus:bg-white" id="grid-product-name" 
      name='name' type="text" placeholder="name of product"/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-seller">
        Seller
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Seller"/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
        Description
      </label>
      <input onChange={handleChange} className="appearance-none block w-full 
      bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      name="description" id="grid-image-link" type="text" placeholder="Description"/>
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-image">
        Image
      </label>
      <input onChange={handleChange} className="appearance-none block w-full 
      bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      name="image" id="grid-image-link" type="text" placeholder="image url"/>
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-condition">
        condition
      </label>
      <input onChange={handleChange} 
      className="appearance-none block w-full bg-gray-200 
      text-gray-700 border border-gray-200 rounded py-3 px-4 
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      name="condition" id="grid-condition" type="text" placeholder="mint, great, good, fair, poor"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-category">
        category
      </label>
      <div className="relative">
        <select onChange={handleChange} name="category" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Music</option>
          <option>Instrument</option>
          <option>Equipment</option>
          <option>Merch</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-keyword">
        Keyword
      </label>
      <input onChange={handleChange} 
      className="appearance-none block w-full bg-gray-200 
      text-gray-700 border border-gray-200 rounded py-3 px-4 
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      name="keyword" id="grid-zip" type="text" placeholder="album, guitar, etc"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
        Price
      </label>
      <input onChange={handleChange} 
      className="appearance-none block w-full bg-gray-200 
      text-gray-700 border border-gray-200 rounded py-3 px-4 
      leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
      name="price" id="grid-zip" type="text" placeholder="in usd"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-keyword">
        Quantity
      </label>
      <input onChange={handleChange} 
      className="appearance-none block w-full bg-gray-200 text-gray-700
       border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
       focus:bg-white focus:border-gray-500" 
       name="quantity" id="grid-zip" type="text" placeholder="1"/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-keyword">
        Push
      </label>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"type="submit">Submit</button>
        </div>
  </div>
</form>
</div> 
        )
    }

export default ProductForm;