import classNames from 'classnames';
import React from 'react';

interface ICardProps extends React.HTMLAttributes<any> {
  /** Whether to give rounded top corners. */
  roundTop?: boolean
  /** Whether to give rounded bottom corners. */
  roundBottom?: boolean
  /** Whether to center the nested text. */
  center?: boolean
}

const Card: React.FC<ICardProps> = (props) => (
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