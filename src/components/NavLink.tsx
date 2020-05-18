import classNames from 'classnames';
import React from 'react';

interface INavLink extends React.LinkHTMLAttributes<any> {
  /** Whether the section has yet to be implemented. */
  disabled?: boolean
}

const NavLink: React.FC<INavLink> = (props) => (
  <a
    className={classNames('p-2 flex items-center', { 'opacity-25': props.disabled })}
    href={props.href || '#'} aria-disabled={props.disabled}
    target={props.href[0] !== '#' ? '_target' : undefined}
    rel={props.href[0] !== '#' ? 'noopener' : undefined}>
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
      {props.href[0] === '#' ? (
        <path
          d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
          clipRule="evenodd" fillRule="evenodd" />
      ) : (
        <path
          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
          clipRule="evenodd" fillRule="evenodd" />
      )}
    </svg>
    {props.children}
  </a>
);

export default NavLink;