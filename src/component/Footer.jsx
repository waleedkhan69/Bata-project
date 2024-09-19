import React, { Fragment, useState } from 'react';
import fb from "../Bataimages/facebook.png";
import ints from "../Bataimages/instagram.webp";
import ytb from "../Bataimages/youtube.png";
import linked from "../Bataimages/linkedin.png";
import { Link } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active section

  const Footerarry = [
    { title: "Shop", p1: "Woman", p2: "Man", p3: "Kids", p4: "Beauty Products", p5: "Local store", p6: "Amazing Products", p7: "Eat drink", p8: "Don't waste" },
    { title: "HELP CENTER", p1: "Track Order", p2: "", p3: "Contact Info", p4: "Fashion Girls", p5: "Local store", p6: "Site Map", p7: "Eat drink", p8: "Don't waste" },
    { title: "FRANCHISE", p1: "Woman", p2: "Man", p3: "Kids", p4: "Beauty Products", p5: "Local store", p6: "Amazing Products", p7: "Eat drink", p8: "Don't waste" },
    { title: "MY ACCOUNT", p1: "Woman", p2: "Man", p3: "Kids", p4: "Beauty Products", p5: "Local store", p6: "Amazing Products", p7: "Eat drink", p8: "Don't waste" },
    { title: "FOLLOW US", p1: fb, p2: ints, p3: ytb, p4: linked, p5: "Local store", p6: "Amazing Products", p7: "Eat drink", p8: "Don't waste" }
  ];

  return (
    <Fragment>
      <div className='h-[70vh] relative md:h-[90vh] grid bg-[#F3F3F3] lg:grid-cols-5 items-center md:grid-cols-4 gap-4 px-2'>
        {Footerarry.map((item, index) => {
          return (
            <div key={index} className='flex-col gap-2 h-64 hidden sm:hidden md:block lg:block items-start'>
              {index === 4 ? (
                <div>
                  <h1>{item.title}</h1>
                  <hr className='bg-black h-1 w-40' />
                  <div className='flex gap-2 mt-3'>
                    <img src={item.p1} alt="" />
                    <img src={item.p2} alt="" />
                    <img src={item.p3} alt="" />
                    <img src={item.p4} alt="" />
                  </div>
                  <p>{item.p5}</p>
                  <p>{item.p6}</p>
                  <p>{item.p7}</p>
                </div>
              ) : (
                <div>
                  <h1 className='font-semibold'>{item.title}</h1>
                  <hr className='bg-black h-1 w-40' />
                  <p>{item.p1}</p>
                  <p>{item.p2}</p>
                  <p>{item.p3}</p>
                  <p>{item.p4}</p>
                  <p>{item.p5}</p>
                  <p>{item.p6}</p>
                  <p>{item.p7}</p>
                  <p>{item.p8}</p>
                </div>
              )}
            </div>
          );
        })}

        {/* Mobile View */}
        <div className='absolute top-0 h-[70vh] md:hidden  w-[100%]'>
          {Footerarry.map((item, index) => {
            return (
              <div key={index} className='h-auto'>
                <div className=' p-3 h-auto flex justify-between border-b-2 border-black'>
                  <h1 className='font-semibold h-auto'>{item.title}</h1>
                  
                  <div onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                   
                 
                </div>
              
                {activeIndex === index && index !== 4 && (
                  <div className='p-3'>
                    <p>{item.p1}</p>
                    <p>{item.p2}</p>
                    <p>{item.p3}</p>
                    <p>{item.p4}</p>
                  </div>
                )}
                {activeIndex === index && index === 4 && (
                  <div className='flex gap-2 mt-3'>
                    <img src={item.p1} alt="Facebook" />
                    <img src={item.p2} alt="Instagram" />
                    <img src={item.p3} alt="YouTube" />
                    <img src={item.p4} alt="LinkedIn" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className='p-3'>
        <h1 className='font-semibold'>Our Products PAKISTAN'S FAVORITE FOOTWEAR BRAND</h1>
        <p>
          Since 1942 Bata Pakistan has been rendering its services to its valued customers by offering quality products. 
          <Link className='text-blue-600 underline'>Read more..</Link>
        </p>
      </div>
    </Fragment>
  );
}

export default Footer;
