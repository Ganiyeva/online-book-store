import Link from 'react';


const Header = () => {
    return(
        <div>
            <img src="img/Book.svg" alt="book-logo"/>
            <div className="container">
                <nav>
                    <Link to="/src/pages/Home.js">Home</Link>
                    <Link to="/src/pages/Filter.js">Filter</Link>
                    <Link to="/src/pages/ReadBook.js">ReadBook</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;