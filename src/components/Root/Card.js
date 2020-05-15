import classNames from 'classnames';
import React from 'react';

const Card = (props) => (
  <div
    style={{ minWidth: 250 }}
    className={classNames('px-4 py-6 max-w-lg mx-auto', props.className, {
      'rounded-t-lg': props.roundTop,
      'rounded-b-lg': props.roundBottom,
      'text-center': props.center
    })}
  >
    {props.children}
  </div>
);

export default Card;