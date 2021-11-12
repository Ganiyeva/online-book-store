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
                       <a href="https://vk.com//" ><i className="icon-vk footer-icon"></i></a>
                       <a href="https://www.facebook.com/"> <i className="icon-facebook footer-icon"></i></a>
                       <a href="https://www.instagram.com/"> <i className="icon-instagram footer-icon"></i></a>
                       <a href="https://www.youtube.com/"> <i className="icon-play footer-icon"></i></a>
                    </div>
                </div>

                <div className="col">
                    <p>Служба поддержки</p>
                    <a className="foot-num" href="8 800 333 27 37 ">8 800 333 27 37</a>
                    <a  className="foot-num"  href=" support@mybook.ru">support@mybook.ru</a>
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