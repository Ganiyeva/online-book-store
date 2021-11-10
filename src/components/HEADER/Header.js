import {Link}  from 'react-router-dom';


const Header = () => {
    return(
        <div>
            <img src="" alt="book-logo"/>
            <div className="container">
                    <Link to="/src/pages/Home.js">👌 Home</Link>
                <nav>
                </nav>
            </div>
        </div>
    );
};

export default Header;