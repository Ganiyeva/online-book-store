import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="reg-page">
            <h1>Registration</h1>
            <form>
                <input type="tel" placeholder="Number"/>
                <input type="text" placeholder="E-adress"/>
                <input type="password" placeholder="Passcode"/>
                <button className="reg-btn" type="button">Enter</button>
                <button className="reg-btn" type="submit">Registrate</button>
                <Link className="reg-link" to="/passcode">Forgot passcode?</Link>
            </form>
        </div>
    )
}

export default Registration;
