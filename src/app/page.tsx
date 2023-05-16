"use client";

import { ApiMovieClient } from './Redux/sagas';

import Slider from '@/components/Slider/Slider';
import Text from '@/components/Typography/Text';

import styles from './page.module.scss';

// const { Title } = Typography;

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
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <Text level={1} isTitle>Популярні:</Text>
        <Slider items={populars} />
      </div>
      <div className={styles.wrapper}>
        <Text level={1} isTitle>Топ по рейтингу:</Text>
        <Slider items={ratings} />
      </div>
    </div>
  );
};

export default Home;
