import { Rate } from 'antd';
import "./bookcard.css";

const BookCard = () => {
  return (
    <div className="card">
      <img className="image" src="img/book.jpg" alt="" />
      <Rate />
      <h4 className="name"> Жизнь — это подарок. 102 истории о том, как находить счастье в мелочах </h4>
      <h5 className="author"> Стефанос Ксенакис </h5>
    </div>
  )
}

export default BookCard;