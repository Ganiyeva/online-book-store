import './Categories.css'
import React from 'react'

export const Categories = (cat) => {
    // useEffect(() => {
    //     fetch('https://www.poemist.com/api/v1/randompoems')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])
    return (
        <button type="button" className="categorie">{cat.name} Top books</button>
    )
}
