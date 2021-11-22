import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img9 from '../assets/images/img-9.jpg';
// import img2 from '../assets/images/img-2.jpg'
// import img3 from '../assets/images/img-3.jpg'
// import img4 from '../assets/images/img-4.jpg'
// import img8 from '../assets/images/img-8.jpg'
const img2 = require('../assets/images/img-2.jpg').default;


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={img9}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            //? Image ini menggunakan Const Objek dan menggunakan require('').default
                            src={img2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            //? Image yg ditaro di public harus membuat folder assets dan harus menggunakan path seperti ini cara ini menggunakan '
                            src={'/assets/images/img-3.jpg'}
                            // src={"../assets/images/img-3.jpg"}
                            // src={img3}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            //? Image yg ditaro di public harus membuat folder assets dan harus menggunakan path seperti ini cara ke 2 cara ini menggunakan ` kutip disebelah angka 1
                            src={`${process.env.PUBLIC_URL}/assets/images/img-4.jpg`}
                            // src={img4}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem

                            //? Image menggunakan {require('image') dan . default}
                            src={require('../assets/images/img-8.jpg').default}
                            // src={img8}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
