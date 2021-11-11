import './footer.css';
import { Link } from "react-router-dom"


const Footer = () =>{
    return(
        <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Следите за новостями</p>
                    <div className="icon-div">
                        <i className="icon-vk footer-icon"></i>
                        <i className="icon-facebook footer-icon"></i>
                        <i className="icon-instagram footer-icon"></i>
                        <i className="icon-play footer-icon"></i>
                    </div>
                </div>

                <div className="col">
                    <p>Служба поддержки</p>
                    <Link className="foot-num" to="8 800 333 27 37 ">8 800 333 27 37</Link>
                    <Link  className="foot-num"  to=" support@mybook.ru">support@mybook.ru</Link>
                </div>

                <div className="col">
                    <p>Мы принимаем к оплате</p>
                    <div>
                        <img className="footer-img" src="img/mastercard.png" alt="mastercard"/>
                        <img  className="footer-img" src="img/visa.png" alt="visa"/>
                        <img  className="footer-img"  src="img/mir.png" alt="mir"/>
                        <img  className="footer-img"  src="img/paypal.png" alt="paypal"/>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
};
export default Footer;