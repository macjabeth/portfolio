import React from 'react';

const Badge = (props) => (
  <li
    className="mt-2 inline-flex justify-center items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-orange-100 text-orange-800">
    {props.children}
  </li>
);

export default Badge;