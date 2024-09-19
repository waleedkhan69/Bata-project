import React, { Fragment } from 'react'

const CustomerCare = () => {
    return (
        <Fragment>

            <div className=' h-screen flex flex-col justify-between px-2 '>
                <div className='flex flex-col justify-center items-center p-4 gap-4'>
                    <h1 className='font-semibold'>contact Info</h1>
                    <hr className='w-[90%]' />
                </div>
              <div className='flex flex-col gap-2'>
              <h1 className='font-semibold'>CONTACT US</h1>
                <p>Can’t find what you are looking for, we’ll be glad to answer you in person. <span className='text-blue-500 underline'>Email us anytime at customercare.batapk@gmail.com</span> <br />
                    We’ll get back to you within 2 working days of receiving your email.</p>
              </div>
              <div className='flex flex-col gap-2'>
              <h1 className='font-semibold'>Customers can reach us:</h1>
                    <p>Customers can Call us on 042-32761261</p>
                    <p>Customers can also visit our Facebook  and Twitter page to leave comments and enquiries.</p>
              </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold'>Our teams are here to help during:</h1>
                        <p>Monday - Friday: 9:00am to 4:00pm</p>
                        <p>If you’d like to write to us or acquire more information, drop us a line at the following address:</p>

                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-semibold'>Customer Care Department:</h1>
                        <p>Bata Pakistan Limited,</p>
                        <p>Batapur, Lahore,</p>

                    </div>
                    <div className='font-semibold'>
                        We look forward to hearing from you!
                    </div>
                </div>
           
        </Fragment>
    )
}

export default CustomerCare