import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import { useState, useEffect } from "react";
import { NYTIMES_API } from "../../global";
import BookCard from "./Bookcard";
import "./booklist.css";

const BookList = () => {

  SwiperCore.use([Navigation]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch(NYTIMES_API).then(res => res.json()).then(data => {
      setBookList(data.results);
      console.log(data.results);
    })
  }, [])

  return (
    <div className="book-content">
      <div className="container">
        <div className="slider-content">
          <Swiper modules={Navigation} navigation={true} pagination={{ clickable: true }} grabCursor={true} spaceBetween={0} slidesPerView={8}>
              {bookList.map(el => (<SwiperSlide key={el.id} > <BookCard bookObj={el} /> </SwiperSlide>))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BookList;