"use client";

import { Typography } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from "@/app/Redux/store";

import Slider from '@/components/Slider/Slider';

import { popularMoviesRequest, ratingMoviesRequest } from "features/movies/moviesSlice";

import styles from './page.module.scss';
import { useEffect } from 'react';

const { Title } = Typography;

const Home = () => {
  const dispatch = useDispatch();

  const { populars, ratings } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(popularMoviesRequest())
    dispatch(ratingMoviesRequest())
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Title>Популярні:</Title>
        <Slider items={populars} />
      </div>
      <div className={styles.wrapper}>
        <Title>Топ по рейтингу:</Title>
        <Slider items={ratings} />
      </div>
    </main>
  );
};

export default Home;
