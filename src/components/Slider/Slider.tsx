import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import SliderItem from './components/Card/Card';

import 'swiper/css';
import styles from './slider.module.scss';

interface IProps {
  items: IItem[]
}

interface IItem {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Slider: FC<IProps> = ({ items }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={8}
      className={styles.slider}
    >
      {items.map(({ id, title, poster_path, release_date, vote_average }) => {
        return <SwiperSlide key={id}>
          <SliderItem id={id} title={title} poster_path={poster_path} release_date={release_date} vote_average={vote_average} />
        </SwiperSlide>
      })}
    </Swiper>
  );
};

export default Slider;