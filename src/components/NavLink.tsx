import classNames from 'classnames';
import React from 'react';

interface INavLink extends React.LinkHTMLAttributes<any> {
  /** Whether the section has yet to be implemented. */
  disabled?: boolean
}

const NavLink: React.FC<INavLink> = (props) => (
  <a
    className={classNames('p-2 flex items-center', { 'opacity-25': props.disabled })}
    href={props.href || '#'}>
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path
        d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
        clipRule="evenodd" fillRule="evenodd" />
    </svg>
    {props.children}
  </a>
);

export default NavLink;