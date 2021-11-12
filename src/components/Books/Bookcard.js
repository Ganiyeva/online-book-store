import { Rate } from 'antd';
import "./bookcard.css";
import { useEffect, useState } from 'react';
import {GOOGLE_API_KEY} from "../../global";

const GOOGLE_BOOK = `https://www.googleapis.com/books/v1/volumes?q=isbn:0399178570&key=${GOOGLE_API_KEY}`;

const BookCard = ({bookObj}) => {

  const [image, setImage] = useState('');

  useEffect(() => {
    if(bookObj.isbns && bookObj.isbns.length > 0) {
      const isbnCode = bookObj.isbns[0].isbn10;
      console.log(isbnCode)
      fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnCode}&key=${GOOGLE_API_KEY}`).then(res => res.json()).then(data => {
        if(data.items) setImage(data.items[0].volumeInfo.imageLinks?.thumbnail);
      });
    }
  }, []);

  return (
    <div className="card">
      <div>
        {bookObj.isbns !== [] ? <img className="image" src={image} alt={bookObj.title} /> : <div></div> }
      </div>
      <Rate />
      <h4 className="name"> {bookObj.title} </h4>
      <h5 className="author"> {bookObj.author} </h5>
    </div>
  )
}

export default BookCard;