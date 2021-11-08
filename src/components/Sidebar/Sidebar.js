import './Sidebar.css';
import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="cart">
                <i className="icon-shopping_basket"></i>
                <span className="shopping-count">0</span>
            </div>
            <div className="search bottom-icon">
                <i className="icon-search"></i>
            </div>
            <div className="contact bottom-icon">
                <i className="icon-person"></i>
            </div>
            <div className="customization bottom-icon">
                <i className="icon-cog"></i>
            </div>
        </aside>
    )
}

export default Sidebar
