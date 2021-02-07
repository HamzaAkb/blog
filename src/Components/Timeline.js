import { React, useEffect, useState } from 'react';
import Cardx from './Card';
import db from '../firebase.config';

const Timeline = () => {
  const [Cards, setCards] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const response = db.collection('article');
    const data = await response.get();
    let arr = [];
    data.docs.forEach((item) => {
      arr.push(item.data());
    });
    setCards(arr);
  };

  // const Cardx = Cards.map((card) => <Cardx content={card} />);

  return (
    <>
      {Cards.map((card) => (
        <Cardx content={card} />
      ))}
    </>
  );
};
export default Timeline;
