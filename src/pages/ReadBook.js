import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import { GOOGLE_API_KEY } from '../global';
import { BookGrid } from '../components/BookGrid/BookGrid';

export const ReadBook = () => {
    const [book, setBook] = useState({});
    const { id } = useParams();

    let categorie;
    if(book && book.volumeInfo) {
        if(book.volumeInfo.categories) {
            categorie = book.volumeInfo.categories
        } else {
            categorie = 'inspirational'
        }
    }

    

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setBook(data);
        })
    }, [id])

    return (
        <div className="container">
            { book && book.volumeInfo ? 
                <>
                    <div className="row">
                        <div className="book-img_bg" style={{backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`}}>
                            <div className="book-img_shadow">
                                <img className="book-img" src={book.volumeInfo.imageLinks.thumbnail}/>
                            </div>
                        </div>
                        <div className="book-info">
                            <h1>{book.volumeInfo.title}</h1>
                            <span>Author: {book.volumeInfo.authors}</span>
                            <span>Pages: {book.volumeInfo.printedPageCount}</span>
                            <span>Published date: {book.volumeInfo.publishedDate}</span>
                            <p className="book-text">{book.volumeInfo.description}</p>
                            <button className="share-btn"><ShareIcon/></button>
                        </div>
                        
                        
                    </div> 


                    <h3 className="similar-title">Similar books</h3> 
                    <BookGrid genre={categorie} />
                </>

            : ''}
        </div>
    )
}
