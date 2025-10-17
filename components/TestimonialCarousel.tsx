'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate esse cillum dolore.",
    author: "John Doe",
    title: "CEO, Example Company"
  },
  {
    id: 2,
    quote: "Equiteq provided exceptional guidance throughout our acquisition process. Their expertise in the tech sector is unmatched.",
    author: "Jane Smith",
    title: "Founder, Tech Solutions Inc"
  },
  {
    id: 3,
    quote: "The team's deep understanding of market dynamics helped us achieve the best possible outcome for our shareholders.",
    author: "Robert Johnson",
    title: "CFO, Digital Ventures"
  },
  {
    id: 4,
    quote: "Professional, thorough, and results-driven. Equiteq exceeded our expectations in every way.",
    author: "Sarah Williams",
    title: "Managing Director, Cloud Systems"
  }
];

export default function TestimonialCarousel() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{
        clickable: true,
        bulletClass: 'testimonial-pagination-bullet',
        bulletActiveClass: 'testimonial-pagination-bullet-active',
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="testimonial-swiper"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div>
            <p className="mb-4">{testimonial.quote}</p>
            <div className="testimonial-author">{testimonial.author}</div>
            <div className="testimonial-title">{testimonial.title}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
