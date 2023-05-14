import { FC } from 'react'
import Image from 'next/image';
import { Card, Statistic, Row } from 'antd';

import { StarFilled } from '@ant-design/icons';

const { Meta } = Card;


interface IItem {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

const SliderItem: FC<IItem> = ({ id, title, poster_path, release_date, vote_average }) => {
  return <Card
    key={id}
    hoverable
    cover={<Image
      src={`${process.env.NEXT_PUBLIC_POSTER_SRC}t/p/w220_and_h330_face/${poster_path}`}
      width={220}
      height={330}
      alt={title}
    />}
  >
    <Meta title={title} description={release_date} />
    <Row>
      <StarFilled />
      <Statistic value={vote_average} suffix="/ 10" />
    </Row>
  </Card >
}

export default SliderItem