import React, { useContext } from 'react';
import { Cartcontext } from './Contextapi';
import { MdDelete } from "react-icons/md";

const ADTOcartproduct = () => {
    const { addcart, remove, increament, decrement } = useContext(Cartcontext); 

    const totalquantity = addcart.reduce((total,item)=> total + item.quantity , 0)
    const totalprice = addcart.reduce((total,item)=> total  + item.price * item.quantity , 1)

    return (

        <div>
            <div className='flex justify-evenly font-semibold  items-center p-2  bg-zinc-500 text-white'>
                <div>Product Image</div>
                <div>Product ID</div>
                <div>Product Name</div>
                <div>Product Price</div>
                <div>Product Quantity</div>
                <div>Product Delete</div>
                <div className='bg-yellow-300 text-white'>Total Price  {Math.floor(totalprice)}</div>
                <div className='bg-yellow-300 text-white'>Total Item {totalquantity}</div>

            </div>
            {addcart.length > 0 ? (
                addcart.map((item) => (
                
                      <div key={item.id} className='p-2 flex items-center justify-between '>
                        <img src={item.images} alt={item.title} className='h-24 w-44 object-contain' />

                        <p> {item.id}</p>
                        <p> {item.title}</p>

                            <p>${Math.floor(item.price * item.quantity)}</p>

                            <div className='flex'>
                                <button onClick={() => increament(item.id)}> +</button>
                                <p>{item.quantity}</p>
                                <button onClick={() => decrement(item.id)}>-</button>


                            </div>
                            <button onClick={() => remove(item.id)} className='text-red-600 cursor-pointer'><MdDelete /></button>
                        
                        </div>
                   
              

                 
                ))
            ) : (
                <p className='text-center w-full py-10'>Your cart is empty</p>
            )}
        </div>

    );
};

export default ADTOcartproduct;
