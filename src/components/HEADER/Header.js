import {Link}  from 'react-router-dom';


const Header = () => {
    return(
        <div>
            <img src="" alt="book-logo"/>
            <div className="container">
                <nav>
                    <Link to="/src/pages/Home.js">Home</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;