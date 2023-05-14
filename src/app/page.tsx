"use client";

import { useDispatch } from 'react-redux';

import Slider from '@/components/Slider/Slider';

import { popularMoviesRequest } from "features/movies/moviesSlice";

import styles from './page.module.scss';
import { useEffect } from 'react';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularMoviesRequest())
  }, [])

  return (
    <main className={styles.main}>
      {/* <Slider /> */}
      main-
    </main>
  );
};

export default Home;
