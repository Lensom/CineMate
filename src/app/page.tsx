"use client";

import { Typography } from "antd";
import { ApiMovieClient } from './Redux/sagas';

import Slider from '@/components/Slider/Slider';

import styles from './page.module.scss';

const { Title } = Typography;

async function getPopulars() {
  const { data } = await ApiMovieClient.get('movie/popular')
  return data.results;
}

async function getRated() {
  const { data } = await ApiMovieClient.get('movie/top_rated')
  return data.results;
}

const Home = async () => {
  const ratings = await getRated();
  const populars = await getPopulars();

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
