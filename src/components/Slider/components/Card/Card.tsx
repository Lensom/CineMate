'use client'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Text from '@/components/Typography/Text'
import Button from '@/components/Buttons/Button'

import styles from './card.module.scss'

import StarSVG from 'images/icons/star.svg'

interface IItem {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

const SliderItem: FC<IItem> = ({ id, title, poster_path, release_date, vote_average }) => {
  return (
    <div
      key={id}
      className={styles['card']}
    >
      <div className={styles["card-image"]}>
        <Link href="#">
          <Image
            src={`${process.env.NEXT_PUBLIC_POSTER_SRC}t/p/w440_and_h660_face/${poster_path}`}
            width={220}
            height={330}
            alt={title}
          />
        </Link>
      </div>

      <div className={styles["card-body"]}>
        <Text level={5} isTitle>
          <Link href="#">
            {title}
          </Link>
        </Text>

        <div className={styles["card-info"]}>
          <Text level={6}>
            {release_date}
          </Text>

          <div className={styles["card-bottom"]}>
            <Image
              src={StarSVG.src}
              alt="рейтинг"
              width={16}
              height={16}
              quality={100}
            />
            <div className={styles["card-rating"]}>
              <Text level={5}>
                {vote_average}
              </Text>
              <Text level={5}>
                /
              </Text>
              <Text level={5}>
                10
              </Text>
            </div>
          </div>
          <div className={styles["card-add"]}>
            <Button link={'#'}>
              Додати до списку
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderItem