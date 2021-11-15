import { Rate } from 'antd';
import { Link } from 'react-router-dom';
import "./bookcard.css";
import { Link  } from 'react-router-dom';

<<<<<<< HEAD

const BookCard = ({bookObj, id}) => {

  return (
    <Link to={`/readBook/${id}`}  className="card">
    <div>
=======
const BookCard = ({bookObj, id}) => {
  return (
    <Link to={`/readBook/${id}`} className="card">
>>>>>>> 99b3e652efd6edda894c8e21664b78f583161a6f
      <div>
        {bookObj.imageLinks ? <img className="image" src={bookObj.imageLinks.smallThumbnail} alt={bookObj.title} /> : <div></div>}
      </div>
      <Rate />
      <h4 className="name"> {bookObj.title} </h4>
      <h5 className="author"> {bookObj.authors} </h5>
<<<<<<< HEAD
    </div>
=======
>>>>>>> 99b3e652efd6edda894c8e21664b78f583161a6f
    </Link>
  )
}

export default BookCard;