import classNames from 'classnames';
import React from 'react';

const Link: React.FC<React.LinkHTMLAttributes<any>> = (props) => (
  <a href={props.href} className={classNames('border-b', props.className)}
     target="_blank" rel="noopener" title={props.title}>
    {props.children}
  </a>
);

export default Link;