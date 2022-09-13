import React, { useContext } from 'react';

import CardBG from '../../../img/card-bg.jpg';
import { imgContext } from '../../../context/imgContext';

const ImageCard = (props) => {
  const { urlImg } = useContext(imgContext);

  return <img src={urlImg || CardBG} alt='Фон открытки' width={840} height={520} />;
};

export default ImageCard;
