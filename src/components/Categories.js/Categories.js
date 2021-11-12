import './Categories.css'
import React from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const GOOGLE_API_KEY = 'AIzaSyBEHIje4bmaXSixVqZ9HXZ0bqDBnOUmnxc';
const NYTIMES_API_KEY = 'caf84bdb-c39b-45fe-b2a9-12ed9a889b2d';
const GOOGLE_API = `https://www.googleapis.com/books/v1/volumes?q=flower&key=${GOOGLE_API_KEY}`;
const NYTIMES_API = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${NYTIMES_API_KEY}`;
const BOOKS__API = `https://www.googleapis.com/books/v1/volumes?q=quilting`

export const Categories = (cat) => {
    useEffect(() => {
        fetch(BOOKS__API)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <button type="button" className="categorie">{cat.name} Top books</button>
            <button type="button" className="categorie">{cat.name} Top books</button>
            <button type="button" className="categorie">{cat.name} Top books</button>
            <button type="button" className="categorie">{cat.name} Top books</button>
            <button type="button" className="categorie">{cat.name} Top books</button>
            <button type="button" className="categorie">{cat.name} Top books</button>
        </div>
    )
}
