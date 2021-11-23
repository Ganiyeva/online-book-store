import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import "./bookcard.css";
import { Link  } from 'react-router-dom';

const BookCard = ({bookObj, id}) => {
  return (
    <Link to={`/readBook/${id}`} className="card">
      <div>
        {bookObj.imageLinks ? <img className="image" src={bookObj.imageLinks.smallThumbnail} alt={bookObj.title} /> : <div></div>}
      </div>
      <Rate />
      <h4 className="name"> {bookObj.title} </h4>
      <h5 className="author"> {bookObj.authors} </h5>
    </Link>
  )
}

export default BookCard;