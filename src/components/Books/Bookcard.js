import { Rate } from 'antd';
import "./bookcard.css";

const BookCard = ({bookObj}) => {

  return (
    <div className="card">
      <div>
        {bookObj.imageLinks ? <img className="image" src={bookObj.imageLinks.smallThumbnail} alt={bookObj.title} /> : <div></div>}
      </div>
      <Rate />
      <h4 className="name"> {bookObj.title} </h4>
      <h5 className="author"> {bookObj.authors} </h5>
    </div>
  )
}

export default BookCard;