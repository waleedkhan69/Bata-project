import React from 'react';

const Benefit = () => {
    const data = { name: 'waleed', age: 12, isStudent: true }
    const { age } = data
    console.log(age)
    const benifitdata = [
        { title: "Benefits:", p1: "50 Welcome Bonus points on registration.", p2: "1 Points for every PKR 100 purchase.", p3: "Birthday Coupon", p4: "Enrollment Anniversary Coupon" },
        { title: "Registration:", p1: "Anyone can become a member through bata.com.pk/account/login or from Bata Store during purchase.", p2: "Valid Mobile number, Name, Email ID will be required to create an account." },
        { title: "Point earn and redemption:", p1: "Members can earn 1 point for every PKR 100 purchase and redeem on next transaction.", p2: "1 point is equivalent to PKR 1 ", p3: "Minimum redeemable amount of points is 100.", p4: "Earned points are valid for 12 month.", p5: "For point redemption, members will receive an OTP through SMS and Email." },
        { title: "Terms & Condition::", p1: "Registered member can earn & redeem points both in stores and online.", p2: "Any coupon, unless stated will not be applicable on discount or other ongoing campaign.", p3: "Members must provide mobile numbers at cash counter to earn & redeem points against their purchase(s).", p4: "Point Redemptions will only be allowed in a multiple of 100 points.", p5: "Bonus points validity vary on offer type.", p6: "For online purchase, Points will be added after delivery of the product and completion of transaction." },
        { title: "BataClubs FAQs :", p1: "What are the benefits of joining the BataClub?", p2: "By joining the BataClub, you get access to many benefits, every step of the way. Welcome bonus, birthday coupon, enrolment anniversary and many more benefits. Also, thanks to your BataClub membership, you do not need the receipt of your product if you want to exchange or return it.", p3: "What information do I need to give you to join the BataClub?", p4: "To join the Bata Club, you only need to give us your name and email address/mobile phone number. After registering, you get 50 bonus Loyalty Points just for registering & 100 bonus Loyalty Points if you choose to share with us additional information.", p5: "How do I use my Loyalty Points?", p6: "Loyalty Points can be used but redemption is allowed in a multiple of 100 points only. 1 Loyalty Point is equal to 1 PKR. Only available points are redeemable.", p7: "How do I collect Loyalty Points?", p8: "For every 100 PKR spent at Bata, you receive 1 Loyalty Point. You can also collect Loyalty Points by being an active member of the BataFamily: answer quizzes, participate in sweepstakes and lucky draws, review products and refer friends!", p9: "Can I use my rewards on Bata.com?", p10: "Yes. Your BataClub membership is recognized in every Bata store in your country and online. Both your benefits and rewards are available on the www.bata.com.pk." },

    ]
    return (
        <div>
            <div className='flex flex-col justify-center items-center p-4 gap-4'>
                    <h1 className='font-semibold text-3xl'>Banifit of Beauty products</h1>
                    <hr className='w-[90%]' />
                </div>
            {benifitdata.map((item, index) => {
                const { title, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10 } = item
                return <div key={index}>
                    <div>
                        <h1 className='p-2 font-medium underline'>{item.title}</h1>
                        <ul className='list-disc pl-5'>

                          <div className='p-4'>
                          {p1 ? <li>{p1}</li> : ""}
                            {p2 ? <li>{p2}</li> : ""}
                            {p3 ? <li>{p3}</li> : ""}
                            {p4 ? <li>{p4}</li> : ""}
                            {p5 ? <li>{p5}</li> : ""}
                            {p6 ? <li>{p6}</li> : ""}
                            {p7 ? <li>{p7}</li> : ""}
                            {p8 ? <li>{p8}</li> : ""}
                            {p9 ? <li>{p9}</li> : ""}
                          </div>
                        </ul>
                    </div>

                </div>
            })}
        </div>
    );
};

export default Benefit;
