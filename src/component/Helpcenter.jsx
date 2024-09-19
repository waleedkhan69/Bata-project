import React, { Fragment } from 'react'
import { FiTruck } from "react-icons/fi";
import { MdNearMe } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { SiGooglecontaineroptimizedos } from "react-icons/si";
import { Link } from 'react-router-dom';


const Helpcenter = () => {
    return (
        <Fragment>
            <div className='bg-[#ffff] max-w-6xl lg:mx-auto mx-2  h-60 mt-2 grid grid-cols-2 md:grid-cols-4 ' >
                <div className='flex flex-col    items-center justify-center text-center'>

                    <Link to= '/helpdetails' className='text-6xl'><FiTruck /></Link>
                    <div>Shipping
                        Nationwide</div>
                </div>
                <div className='flex flex-col items-center justify-center  text-center'>


                    <Link to= '/lcate' className='text-6xl'><MdNearMe /></Link>
                    <div>Active Store
                        Near you</div>

                </div>
                <div className='flex flex-col  justify-center items-center text-center'>


                    <Link to={"/care"} className='text-6xl'><MdAddCall  /></Link>
                    <div>Customer
                        Care
                    </div>
                </div>
                <div className='flex flex-col  justify-center   items-center text-center'>


                    <Link to={"/benifit"}  className='text-6xl'><SiGooglecontaineroptimizedos /></Link>
                    <div>Bata club
                        benefits</div>

                </div>

            </div>
        </Fragment>
    )
}

export default Helpcenter