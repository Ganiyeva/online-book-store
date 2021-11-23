import React from 'react'
import { useParams } from 'react-router-dom'
import { BookGrid } from '../components/BookGrid/BookGrid'
import { Categories } from '../components/Categories/Categories'

export const Library = () => {
    const { genreid } = useParams()
    return (
        <div className="container">
            <div className="">
                <div className="categories">
                    <Categories title='ART' id='Art' />
                    <Categories title='BIBLES' id='Bibles' />
                    <Categories title='COMPUTERS' id='Computers' />
                    <Categories title='COOKING' id='Cooking' />
                    <Categories title='DESIGN' id='Design' />
                    <Categories title='DRAMA' id='Drama' />
                    <Categories title='FICTION' id='Fiction' />
                    <Categories title='GAMES & ACTIVITIES' id='Games' />
                    <Categories title='GARDENING ' id='Gardening' />
                    <Categories title='HISTORY' id='History' />
                    <Categories title='LAW' id='Law' />
                    <Categories title='MATHEMATICS' id='Mathematics' />
                    <Categories title='MEDICAL' id='Medical' />
                    <Categories title='MUSIC' id='music' />
                    <Categories title='NATURE' id='nature' />
                    <Categories title='PERFORMING ARTS' id='PerformingArts' />
                    <Categories title='PETS' id='pets' />
                    <Categories title='PHILOSOPHY' id='Philosophy' />
                    <Categories title='PHOTOGRAPHY' id='Photography' />
                    <Categories title='POETRY' id='Poetry' />
                    <Categories title='PSYCHOLOGY' id='Psychology' />
                    <Categories title='REFERENCE' id='Reference' />
                    <Categories title='RELIGION' id='Religion' />
                    <Categories title='SCIENCE' id='Science' />
                    <Categories title='TRANSPORTATION' id='Transportation' />
                    <Categories title='TRAVEL' id='Travel' />
                </div>
                {<BookGrid genre={genreid} /> ? <BookGrid genre={genreid} /> : ''}
            </div>
        </div>
    )
}
