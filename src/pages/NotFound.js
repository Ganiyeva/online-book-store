import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate  } from "react-router-dom";

export const NotFound = () => {
    let history = useNavigate();

    // function handleClick() {
    //     history.go("-1");
    // }
    return (
        <div>
            <nav className="shelf">
                <Link to="/" className="book home-page">Home</Link>
                <Link to="/library" className="book about-us">Library</Link>
                <button onClick={() => history(-1)} className="book faq">Enter</button>
                <Link to="/register" className="book contact">Login</Link>
                
                <span className="book not-found"></span>
                
                <span className="door left"></span>
                <span className="door right"></span>
            </nav>
            {/* <h1 className="error__title">Error 404</h1>
            <p className="error__text">The page you're loking for can't be found</p> */}

        </div>
    )
}
