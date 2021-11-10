import React from 'react'

export const NotFound = () => {
    return (
        <div>
            <nav className="shelf">
                <a className="book home-page">Home</a>
                <a className="book about-us">About</a>
                <a className="book faq">Store</a>
                <a className="book contact">Contact</a>
                
                <span className="book not-found"></span>
                
                <span className="door left"></span>
                <span className="door right"></span>
            </nav>
            {/* <h1 className="error__title">Error 404</h1>
            <p className="error__text">The page you're loking for can't be found</p> */}

        </div>
    )
}
