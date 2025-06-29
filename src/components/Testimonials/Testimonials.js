import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonials-cont' id='testimonials'>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className='test-cont'>
            <div>
              <img src='/Images/Me.jpeg' alt='pro'/>
            </div>
            <div>
              <h3>I believe in doing my best on every project I take up. While I’m just starting my journey, I’m confident that future collaborators will value my dedication and attention to detail.</h3>
              <h2>-- Farhan Siddiqui</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='test-cont'>
            <div>
              <img src='/Images/person.png' alt='pro'/>
            </div>
            <div>
              <h3>Working with Farhan on our college project was a great experience. He handled the frontend with precision and always pushed for high-quality results.</h3>
              <h2>-- Rohan Shikhare, Final Year IT Student</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='test-cont'>
            <div>
              <img src='/Images/person.png' alt='pro'/>
            </div>
            <div>
              <h3>Teaching Farhan has been a rewarding experience. His curiosity, consistency, and ability to quickly grasp new technical concepts really stood out. I’ve seen him grow from asking basic questions to building full web apps with confidence.</h3>
              <h2>-- Nuzhat Siddiqui, Software Engineer</h2>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides for more testimonials */}
      </Swiper>
    </div>
  );
};

export default Testimonials;
