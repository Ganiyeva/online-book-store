import './BookGrid.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
// import usePrevious from '../hooks'
import { Swiper, SwiperSlide } from 'swiper/react';
import { GOOGLE_API_KEY } from '../../global';

export const BookGrid = ({genre}) => {

    const [books, setBooks] = useState([]);
    // const [totalPage, setTotalPage] = useState(0);

    // const prevGenre = usePrevious(genre);
    // let list;


    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&key=${GOOGLE_API_KEY}`)
        .then(res => res.json())
        .then(data => {
            setBooks(data.items);
            console.log(data.items[0].volumeInfo.imageLinks)
        })
    }, [genre])

    return (

        <div className="book-grid">
            <Swiper spaceBetween={30} slidesPerView={4}>
                {books.map(el => {
                    <SwiperSlide>
                        <div className="book-grid__book">
                            <div className="book__cover" >
                                <div className="book__detail">{el.volumeInfo.title}</div>
                            </div>
                            <div className="book__page"></div>
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>
            <button type="button" className="load custom-btn">Load more</button>
        </div>
    )
}
