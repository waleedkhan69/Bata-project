import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Cartcontext } from './Contextapi'; 
import { Link } from 'react-router-dom';

const Details = () => {
    const { addcart, addproduct } = useContext(Cartcontext); // Access context for cart and addproduct function
    const { id } = useParams(); 
    const [Data, setData] = useState('');

    // Fetch product data
    useEffect(() => {
        const fetchapi = async () => {
            const url = `https://dummyjson.com/products`;
            const data = await fetch(url);
            const dta = await data.json();
            setData(dta);
        };
        fetchapi();
    }, []);

    const produ = Data.products;
    const startIndex = (id - 1) * 4;
    const singledata = produ?.slice(startIndex, startIndex + 4);

    return (
        <Fragment>
            <div className='flex justify-evenly'>
             
             <Link to = {'/adprduct'}>
             <div className='absolute top-44 right-8 bg-red-600 rounded-full p-3 text-white'>
                <button>Cart ({addcart.length})</button> 
              </div>
             </Link>

              {/* Mapping over product data */}
                {singledata?.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className='h-40 w-40'>
                                <img src={item.images} alt="" className='h-full w-full object-contain' />
                            </div>
                            <p>ID: {item.id}</p>
                            <p>Product Name: {item.title}</p>
                            <p>Product Description: {item.description}</p>
                            <p>${item.price}</p>
                            <div className='0'>
                                <button
                                    onClick={() => addproduct(item)} // Adds product to cart
                                    className='bg-red-600 px-4 py-2 text-white hover:bg-red-500'>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Fragment>
    );
};

export default Details;
