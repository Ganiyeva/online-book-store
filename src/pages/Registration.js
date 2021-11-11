import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className="reg-page">
            <h1>Registration</h1>
            <form>
                <input placeholder="Number"/>
                <input placeholder="E-adress"/>
                <input placeholder="Passcode"/>
                <button type="submit">Registrate</button>
                <Link to="/passcode">Forgot passcode</Link>
            </form>
        </div>
    )
}

export default Registration;
