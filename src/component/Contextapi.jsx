import React, { createContext, useState } from "react";

export const Cartcontext = createContext();

const Apidata = ({ children }) => {
    const [addcart, setaddcart] = useState([]);

    // Function to add a product to the cart
    const addproduct = (product) => {
        const existingProduct = addcart.find((item) => item.id === product.id);

        if (existingProduct) {
            setaddcart(
                addcart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setaddcart([...addcart, { ...product, quantity: 1 }]);
        }
    };

    // Function to remove a product from the cart
    const remove = (id) => {
        const updatedCart = addcart.filter((item) => item.id !== id);
        setaddcart(updatedCart);
    };

    // Function to increment the quantity of a product
    const increament = (id) => {
        const updatedCart = addcart.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });

        setaddcart(updatedCart);
    };

   
    const decrement = (id) => {
        const updatedCart = addcart.map((item) => {
            if (item.id === id) {
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return null;
            }
            return item;
        }).filter(item => item !== null); 

        setaddcart(updatedCart);
    };

    return (
        <Cartcontext.Provider
            value={{
                addcart,
                setaddcart,
                addproduct,
                remove,
                increament,
                decrement
            }}
        >
            {children}
        </Cartcontext.Provider>
    );
};

export default Apidata;
