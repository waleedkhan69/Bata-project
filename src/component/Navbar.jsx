import React, { Fragment, useContext, useState } from 'react';
import bata from "../Bataimages/navBata.avif";
import bata1 from "../Bataimages/navBata2.png";
import { Link } from 'react-router-dom';
import { RiContactsLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiMenuBurger } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
// import { Contextapi } from './Contextapi';
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { hoverarry } from './Navbarhoveritem';

export const navData = [
    { title: "Sneaker Studio", id: 1 },
    { title: "MEN", id: 2 },
    { title: "WOMAN", id: 3 },
    { title: "KIDS", id: 4 },
    { title: "BAGS", id: 5 },
    { title: "ACCESSORIES", id: 6 },
    { title: "SUPER SALE", id: 7 },
    { title: "BATA CLUB", id: 8 },
    { title: "B-MAG", id: 9 },
    { title: "BATA INDUSTRIALS", id: 10 },
];

const Navbar = () => {
   const [nav, setNav] = useState(false)
    const [searchmodel, setsearchmodel] = useState(false);
    const [navbarHoverItemId, setNavbarHoverItemId] = useState(null);

    const handelchange = () => {
        setNav(!nav);
    };

    const closesearch = () => {
        setsearchmodel(!searchmodel);
    };

    const setsearch = () => {
        setsearchmodel(!searchmodel);
    };

    const closemanu = () => {
        setNav(false);
    };

    return (
        <Fragment>
            <div >
                <nav className='bg-[#F3F3F3] p-2'>
                    Email: customercare.batapk@gmail.com
                </nav>

                <div className='bg-[#FFFFFF] w-[100%] h-16 flex justify-end items-end'>
                    <div className='w-[100%] md:w-[80%] sm:w-[60%] flex justify-around md:items-center'>
                        <div className='flex w-[20%] justify-around items-center md:hidden '>
                            <div>
                                <CiMenuBurger onClick={handelchange} className='text-2xl cursor-pointer' />
                            </div>
                            <div>
                                <CiSearch className='text-3xl' />
                            </div>
                        </div>

                        <div className='w-16 h-8'>
                            <img src={bata} alt="Bata Logo" className='h-full w-full ' />
                        </div>

                        <div className='flex justify-center items-center gap-3'>
                            <Link>
                                <div className='h-8 w-16'>
                                    <img src={bata1} alt="Bata" className='h-full w-full' />
                                </div>
                            </Link>
                            <Link className='underline hidden md:block'>HELP</Link>
                        </div>

                        <div className='hidden md:block justify-between w-[25%] '>
                            <div className='flex justify-between '>
                                <Link>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div className='text-3xl'><RiContactsLine /></div>
                                        <div className='text-[12px]'>Login</div>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div className='text-3xl'><CiDeliveryTruck /></div>
                                        <div className='text-[12px]'>Track Order</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <Link>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='text-3xl'><LiaShoppingBagSolid /></div>
                                <div className='text-[12px] hidden md:block'>Rs:0</div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <hr className='h-1' />
                    <div className='relative'>
                        <div className='flex justify-around h-14 items-center bg-[#FFFFFF] flex-wrap gap-2'>
                            {navData.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative" // Ensures that hover content is positioned relative to each navbar item
                                    onMouseEnter={() => setNavbarHoverItemId(item.id)}
                                    onMouseLeave={() => setNavbarHoverItemId(null)}
                                >
                                    <Link>
                                        <p className='hover:text-red-600 font-semibold'>
                                            {item.title}
                                        </p>
                                    </Link>

                                    {/* Hover content shown below the corresponding item */}
                                    {navbarHoverItemId === item.id && (
                                        <div className=' border bg-white border-gray-300 absolute top-4 mt-2 left-0 w-auto p-2 z-10'>
                                            {hoverarry
                                                .filter((hoverItem) => hoverItem.id === item.id)
                                                .map((hoverItem) => (
                                                    <div key={hoverItem.id} className=''>
                                                        <Link>{hoverItem.pc1 ? <p className=' hover:underline'>{hoverItem.pc1}</p> : ""}</Link>
                                                        <Link> {hoverItem.pc2 ? <p className=' hover:underline'>{hoverItem.pc2}</p> : ""}</Link>
                                                        <Link> {hoverItem.pc4 ? <p className=' hover:underline'>{hoverItem.pc3}</p> : ""}</Link>
                                                        <Link> {hoverItem.pc5 ? <p className=' hover:underline'>{hoverItem.pc3}</p> : ""}</Link>
                                                        <Link>{hoverItem.pc6 ? <p className=' hover:underline'>{hoverItem.pc3}</p> : ""}</Link>
                                                        <Link> {hoverItem.pc7 ? <p className=' hover:underline'>{hoverItem.pc3}</p> : ""}</Link>
                                                    </div>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className='flex items-center gap-2'>
                                <div>
                                    <input onClick={setsearch} type="search" placeholder='search' className='outline-none border-b-2 border-black' />
                                </div>
                                <Link><CiSearch className='text-xl' /></Link>
                            </div>
                        </div>
                    </div>
                </div>

                {nav && (
                    <div className='fixed top-0 left-0 w-[100vw] flex flex-col justify-between h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0'>
                        <div className='justify-between flex'>
                            <h1 className='font-bold'>Menu</h1>
                            <div className='cursor-pointer text-3xl'>
                                <IoMdClose onClick={closemanu} />
                            </div>
                        </div>
                        {navData.map((item) => (
                            <div key={item.id} className=''>
                                <div className='flex justify-between'>
                                    <Link><p>{item.title}</p></Link>
                                    <Link><FaChevronDown /></Link>
                                </div>
                                <hr className='h-1' />
                            </div>
                        ))}
                    </div>
                )}

                {searchmodel && (
                    <div className='absolute transition delay-300 bg-white flex justify-center items-center gap-2 top-6 w-[100%] h-24'>
                        <input type="search" placeholder='search' className='p-3 outline-none border-2 border-black w-[70%]' />
                        <IoMdClose className='text-4xl' onClick={closesearch} />
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Navbar;
