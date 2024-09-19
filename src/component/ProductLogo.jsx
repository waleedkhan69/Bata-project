import React, { Fragment } from 'react'
import lg1 from "../Bataimages/log1.avif"
import lg2 from "../Bataimages/beautipro.avif"
import lg3 from "../Bataimages/logo3.avif"
import lg4 from "../Bataimages/log4.avif"
import { Link } from 'react-router-dom'

const ProductLogo = () => {
    const logoarry = [
        {images:lg1, id:1,},
        {images:lg2, id:2},
        {images:lg3, id:3},
        {images:lg4, id:4},
    ]
  return (
    <Fragment>
          <div className='flex justify-evenly mt-20'>
          {logoarry.map((item)=>{
                return<Link to= {`/${item.id}`} key={item.id} className='h-28 w-40 rounded  '>
                    <img src={item.images} alt="h-[100%] w-[100%]" className='cursor-po inter'/>
                </Link>
           
            })}
          </div>
    </Fragment>
  )
}

export default ProductLogo