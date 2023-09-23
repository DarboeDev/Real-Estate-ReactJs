import React from 'react'
import data from '/slider.json'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Residencies = () => {

  return (
    <section className="residencies">
         <h2 className="gold-text">Best Choices</h2>
         <h1 className="dark-blue">Popular Recidencies</h1>
         <div className="carosel">
         <Swiper
          // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
            // When window width is >= 1024px (desktop)
         1024: {
      slidesPerView: 4,
         },
        // When window width is >= 768px (tablets)
        768: {
          slidesPerView: 2,
        },
        // When window width is < 768px (phones)
        0: {
          slidesPerView: 1,
        },
      }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {data.map((item, index) =>(
        <SwiperSlide  key={item.id}>
            <div className="residence">
                <img src={item.image} alt="" />
                <h4 className="price text"><span className="plus-icon">D</span>{item.price}</h4>
                <h1 className="house-name">{item.name}</h1>
                <p className="detail text">{item.detail}</p>
            </div>
        </SwiperSlide>
      ))}
    </Swiper>
         </div>
    </section>
  )
}

export default Residencies