import './BookGrid.css'
import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BookGrid = () => {
    return (
        <div className="book-grid">
            <Swiper spaceBetween={30} slidesPerView={4}>
                <SwiperSlide>
                <div class="book-grid__book">
                    <div class="book__cover" style={{backgroundImage:'url(https://1.bp.blogspot.com/-D2I5IQPi4Os/XOsemT2JokI/AAAAAAAAAjU/yhsbsPjfjl8cIrb41SeYW75RYxSz7t-GwCPcBGAYYCw/s320/%25E3%2582%25B2%25E3%2583%25BC%25E3%2583%259E%25E3%2583%25BC%25E3%2582%25BA%2521%2B-%2Bvol%2B8.jpg)'}}>
                        <div class="book__detail">Gamers! - Vol.8</div>
                    </div>
                    <div class="book__page"></div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="book-grid__book">
                    <div class="book__cover" style={{backgroundImage:'url(https://1.bp.blogspot.com/-D2I5IQPi4Os/XOsemT2JokI/AAAAAAAAAjU/yhsbsPjfjl8cIrb41SeYW75RYxSz7t-GwCPcBGAYYCw/s320/%25E3%2582%25B2%25E3%2583%25BC%25E3%2583%259E%25E3%2583%25BC%25E3%2582%25BA%2521%2B-%2Bvol%2B8.jpg)'}}>
                        <div class="book__detail">Gamers! - Vol.8</div>
                    </div>
                    <div class="book__page"></div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="book-grid__book">
                    <div class="book__cover" style={{backgroundImage:'url(https://1.bp.blogspot.com/-D2I5IQPi4Os/XOsemT2JokI/AAAAAAAAAjU/yhsbsPjfjl8cIrb41SeYW75RYxSz7t-GwCPcBGAYYCw/s320/%25E3%2582%25B2%25E3%2583%25BC%25E3%2583%259E%25E3%2583%25BC%25E3%2582%25BA%2521%2B-%2Bvol%2B8.jpg)'}}>
                        <div class="book__detail">Gamers! - Vol.8</div>
                    </div>
                    <div class="book__page"></div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div class="book-grid__book">
                    <div class="book__cover" style={{backgroundImage:'url(https://1.bp.blogspot.com/-D2I5IQPi4Os/XOsemT2JokI/AAAAAAAAAjU/yhsbsPjfjl8cIrb41SeYW75RYxSz7t-GwCPcBGAYYCw/s320/%25E3%2582%25B2%25E3%2583%25BC%25E3%2583%259E%25E3%2583%25BC%25E3%2582%25BA%2521%2B-%2Bvol%2B8.jpg)'}}>
                        <div class="book__detail">Gamers! - Vol.8</div>
                    </div>
                    <div class="book__page"></div>
                </div>
                </SwiperSlide>

            </Swiper>
            {/* <button type="button" className="load custom-btn">Load more</button> */}
        </div>
    )
}
