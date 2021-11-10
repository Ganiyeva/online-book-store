import { Link } from "react-router-dom";
import "./advertising.css";

const Advertising = () => {
  return (
    <section className="content">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title"> MyBook — читайте и слушайте по одной подписке </h1>
            <Link className="btn" to="/subscription"> 14 дней бесплатно </Link>
          </div>
          <div className="col">
            <img className="img" src="img/clip-isolation-1.png" alt="vector" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertising;