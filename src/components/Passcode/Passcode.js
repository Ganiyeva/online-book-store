import React from 'react'

const Passcode = () => {
    return (
        <div className="reg-page">
            <h2>Passcode</h2>
            <label>Forgot passcode?</label>
            <input type="email" placeholder="E-mail address"/>
            <button className="reg-btn" type="submit">Enter</button>
        </div>
    )
}

export default Passcode
