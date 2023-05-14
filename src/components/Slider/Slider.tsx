import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface IProps {
  items: IItem[]
}

interface IItem {
  id: number;
  title: string;
  url: string;
  image: string;
  rating: string;
}

const Slider: FC<IProps> = ({ items }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={8}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map(({ id }) => {
        return <SwiperSlide key={id}>Slide 1</SwiperSlide>
      })}
    </Swiper>
  );
};

export default Slider;