import React from 'react'
import { BookGrid } from '../components/BookGrid.js/BookGrid'
import { Categories } from '../components/Categories.js/Categories'

export const Library = () => {
    return (
        <div className="container">
            <div className="row">
                <BookGrid />
                <div className="categories">
                    <Categories />
                </div>
            </div>
        </div>
    )
}
