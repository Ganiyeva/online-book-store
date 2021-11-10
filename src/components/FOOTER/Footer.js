import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Следите за новостями</p>
                    <div>
                        <i className="icon-vk"></i>
                        <i className="icon-facebook"></i>
                        <i className="icon-instagram"></i>
                        <i className="icon-play"></i>
                    </div>
                </div>

                <div className="col">
                    <p>Служба поддержки</p>
                    <Link to="8 800 333 27 37">8 800 333 27 37</Link>
                    <Link to="support@mybook.ru">support@mybook.ru</Link>
                </div>
            </div>
        </div>
    )
};
export default Footer;