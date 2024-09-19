import React, { Fragment, useState } from 'react'

const Help4Location = () => {
    const Locationdata = [
        {
            city: "Lahore",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Khan Ghr",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "layari",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Palestine",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Murrre",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Bangladesh",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "pakistan",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Ireland",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Duniya puer",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Jauipur",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Delhi",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "DGK",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Blochistan",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "Bahawalpur",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
        {
            city: "lodhran",
            Locationdetails: [
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
                { productname: "Bata Shoe Store", locat: "Main Bazar, Opposite MCB, Islampura, Lahore, Lahore, Punjab", timetable: "11:00 am 11:00 pm", adres: "Lahore, Punjab", no: "042-37154812" },
            ]
        },
    ]
   
    const [selectedCity, setSelectedCity] = useState(null)

    const handleChange = (city) => {

        setSelectedCity(selectedCity === city ? null : city)
    }

    return (
        <Fragment>
            <div className='h-80 overflow-y-scroll'>
                {Locationdata.map((item, index) => (
                    <div key={index} className='text-2xl shadow-lg p-3'>
                        <h1 
                            onClick={() => handleChange(item.city)} 
                            className={`bg-white py-3 hover:bg-red-600 cursor-pointer ${selectedCity === item.city ? 'bg-red-600' : ''}`}
                        > 
                            {item.city}
                        </h1>
                      
                        {selectedCity === item.city && (
                            <div className=''>
                                {item.Locationdetails.map((detail, index) => (
                                    <div key={index} className=''>
                                        <h1>{detail.productname}</h1>
                                        <p>{detail.locat}</p>
                                        <p>{detail.timetable}</p>
                                        <p>{detail.adres}</p>
                                        <p>{detail.no}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {/* <div className='h-80 overflow-y-scroll'>
                {Locationdata.map((item, index) => {
                    return <div key={index}>
                        <h1
                            onClick={handlechange(item.city)}
                            className={`bg-white hover:bg-red-700 text-3xl py-3 shadow-lg ${selectedCity === item.city ? "bg-red-600" : ""} cursor-pointer`}>
                            {item.city}
                        </h1>
                        {
                            selectedCity === item.city && (
                                <div>
                                    {item.Locationdetails.map((detail, index) => (
                                        <div key={index}>
                                            <h1>{detail.productname}</h1>
                                            <p>{detail.locat}</p>
                                            <p>{detail.timetable}</p>
                                            <p>{detail.adres}</p>
                                            <p>{detail.no}</p>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </div>

                })}


            </div> */}
        </Fragment>
    )
}

export default Help4Location
