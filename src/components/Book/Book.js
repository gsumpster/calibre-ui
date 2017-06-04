import React from 'react';

import Star from 'src/icons/core/star.svg';
import css from './Book.css';

const Book = props => (
  <div className={css.book}>
    <img src={props.book.cover} alt="Book Cover" className={css.cover} />
    <div>
      <h5 className={css.title}>{props.book.title}</h5>
      <p className={css.author}>{props.book.author[0].name}</p>
      <div className={css.stars}>
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
      </div>
    </div>
  </div>
);

export default Book;
