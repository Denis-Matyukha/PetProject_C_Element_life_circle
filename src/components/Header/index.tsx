import React, { useEffect, useState } from 'react';
import s from './Header.module.scss';

const Header = () => {
  const addElemToArr = (): number[] => {
    return [new Date().getMilliseconds()];
  };

  const [dates, setDates] = useState<number[] | any>([]);

  useEffect(() => {
    const timeout = setInterval(() => {
      setDates((prevState: number[]): any => {
        if (prevState.length === 108) {
          setDates(prevState);
          clearInterval(timeout);
        }
        return [...prevState, ...addElemToArr()];
      });
    }, 10);
  }, []);

  return (
    <div className={s.root}>
      {dates.map((el: any, i: React.Key | null | undefined) => {
        const { id } = el;
        return <pre key={id}>{`    ${el}    `}</pre>;
      })}
    </div>
  );
};

export default Header;
