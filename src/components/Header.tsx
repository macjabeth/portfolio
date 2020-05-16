import React from 'react';
import { IGithubUser } from '../types/github';

interface IHeaderProps {
  repo: IGithubUser
}

const Header: React.FC<IHeaderProps> = ({ repo }) => (
  <header className="flex flex-col items-center justify-center text-center">
    {repo?.avatar_url ? (
      <img src={repo?.avatar_url}
           className="h-28 w-28 border-4 border-teal-100 rounded-full"
           alt="Jonathan's Photo" />
    ) : (
      <span
        className="inline-flex items-center justify-center h-28 w-28 rounded-full bg-teal-400">
          <span
            className="text-xl font-medium leading-none text-white">JP</span>
        </span>
    )}
    <h1 className="font-black mt-4">Jonathan Picazo</h1>
    <a href={repo?.html_url || '#'} target="_blank" rel="noopener"
       className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-indigo-100 text-indigo-800">
      <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
           fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="3" />
      </svg>
      {repo?.public_repos ?? '?'} repos
    </a>
  </header>
);

export default Header;