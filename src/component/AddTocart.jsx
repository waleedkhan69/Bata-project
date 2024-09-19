import React, { createContext, Fragment } from 'react'
import { useState } from 'react'

export const ProdContent = createContext()

const Arrydata = ({ children }) => {
    const [carditem, setcarditem] = useState([])

    const addproduct = (cartadpro) => {
        const Exproduct = carditem.find((item) => item.id === cartadpro.id);
        if (Exproduct) {
            const upgrat = carditem.map((item) =>
                item.id === cartadpro.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setcarditem(upgrat);
        } else {
            setcarditem([...carditem, { ...cartadpro, quantity: 1 }]);
        }
    }
    return (
        <ProdContent.Provider
            value={{
                carditem,
                setcarditem,
                addproduct
            }}
        >
            {children}
        </ProdContent.Provider>
    )
}

export default Arrydata