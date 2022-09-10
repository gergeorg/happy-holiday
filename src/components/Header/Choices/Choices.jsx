import { useContext, useState } from 'react';

import { holidaysContext } from '../../../context/holidaysContext';

import style from './Choices.module.css';

const Choices = () => {
  const [isOpenChoices, setOpenChoices] = useState(false);
  const { holidays, holiday, changeHoliday } = useContext(holidaysContext);

  const toggleChoices = () => {
    setOpenChoices(!isOpenChoices);
  };

  return (
    <div className={style.wrapper}>
      <button onClick={toggleChoices} className={style.button}>
        {holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map((item) => (
            <li
              onClick={() => {
                changeHoliday(item[0]);
                toggleChoices();
              }}
              className={style.item}
              key={item[0]}
            >
              {item[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Choices;
