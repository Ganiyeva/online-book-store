import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../../global";
import BookCard from "./Bookcard";
import "./booklist.css";

const BookList = ({type, title}) => {

  SwiperCore.use([Navigation]);

  const [bookList, setBookList] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${type}&key=${GOOGLE_API_KEY}`).then(res => {
      if(!res.ok) {
        throw Error(res.status);
      };
      return res.json();
    }).then(data =>{
      setBookList(data.items);
       console.log(data.items)
    })
    .catch((err) => {
      setError(err);
    });
  }, []);

  return (
    <div className="book-content">
      <div className="container">
        <div className="slider-content">
          <h3> {title} </h3>
          <div className="content-401">
            {error ? <img src="img/error_401.webp" alt="error 401" className="logo-401" /> : ''}
          </div>
          <Swiper modules={Navigation} navigation={true} pagination={{ clickable: true }} grabCursor={true} spaceBetween={0} slidesPerView={8}>
            { bookList.map(el => (<SwiperSlide key={el.id} > <BookCard bookObj={el.volumeInfo} id={el.id} /> </SwiperSlide>)) }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BookList;