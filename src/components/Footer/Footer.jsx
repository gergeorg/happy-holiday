import React from 'react';

import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as PinterestIcon } from '../../img/pinterest.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as StumbleuponIcon } from '../../img/stumbleupon.svg';
import Container from '../Container/Container';

import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.contacts}>
            <p>
              Design: <a href='https://t.me/Mrshmallowww'>Anastasia Ilina</a>
            </p>
            <p>
              Сoder: <a href='https://t.me/gergeorg'>Georgey Gerasimov</a>
            </p>
            <p>© HBCard, 2022</p>
          </div>

          <ul className={style.social}>
            <li className={style.item}>
              <a href='https://vk.com' className={style.link} aria-label='vk'>
                <VKIcon />
              </a>
            </li>

            <li className={style.item}>
              <a href='https://t.me' className={style.link} aria-label='telegram'>
                <TGIcon />
              </a>
            </li>

            <li className={style.item}>
              <a href='https://ru.pinterest.com/' className={style.link} aria-label='pinterest'>
                <PinterestIcon />
              </a>
            </li>

            <li className={style.item}>
              <a href='https://www.stumbleupon.com/' className={style.link} aria-label='stumbleupon'>
                <StumbleuponIcon />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
