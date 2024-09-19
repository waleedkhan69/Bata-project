import React, { Fragment, useContext } from 'react'
import { ProdContent } from './AddTocart'

const Productcontent = () => {
    const { cartitem } = useContext(ProdContent)
    console.log(cartitem);
    
    return (
        <Fragment>
            <div>
                <div className='flex justify-evenly items-center'>

                    <h1>Product Image</h1>
                    <h1> Product ID</h1>
                    <h1>Product Price</h1>
                    <h1> product Name</h1>
                </div>

               
            </div>
        </Fragment>
    )
}

export default Productcontent