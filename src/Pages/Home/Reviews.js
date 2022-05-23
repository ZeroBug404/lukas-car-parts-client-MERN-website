import React from 'react';
import people1 from '../../images/clients/people1.png'
import people2 from '../../images/clients/people2.png'
import people3 from '../../images/clients/people3.png'

const Reviews = () => {
    const reviews = [
        {
            name: 'Randy',
            location: 'California',
            description: 'I ordered a Radiator for my car. It was a simple process in which I was able to purchase it through linking to my Google, Facebook account, or create an account. I entered my vehicle information into their site to ensure I got the right part. When it arrived via FedEx I noticed the package was opened. ',
            img: people1
        },
        {
            name: 'Mike',
            location: 'California',
            description: "I needed a part for my car and got online to search for it. I came across CarParts.com. They seemed to have the part I needed. I knew nothing about this online vendor so I cautiously ordered the part using PayPal. I waited two weeks and didn't see the part. I thought it might be a scam until I realized I never pressed ORDER",
            img: people2
        },
        {
            name: 'Amber',
            location: 'California',
            description: 'I have to give the customer service at Carparts.com a 10/10 **********. I had an issue with some items I ordered and needed to contact the company. Looking for an email address on their website I saw I could use the "chat" feature to contact them. Delightfully so! A young man named Jake helped me address my issue.',
            img: people3
        }
    ]

    return (
        <div className='bg-slate-100 mx-12 text-slate-900'>
            <h2 className='text-4xl font-bold text-center p-8'>From Our Clients</h2>
            <div className='grid grid-cols-3 gap-10 px-10'>
            
                {
                    reviews.map((review, index) => <div key={index} className="card bg-base-100 shadow-xl my-12">
                    <div className="card-body">
                      <p>{review.description}</p>
              
                      <div className="flex justify-start items-center my-5">
                        <div className="avatar mr-4">
                          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt="" />
                          </div>
                        </div>
                        <div>
                          <h2 className="card-title">{review.name}</h2>
                          <p>{review.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>)
                }
            </div>
            
        </div>
    );
};

export default Reviews;