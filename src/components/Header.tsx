import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
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
      <SkeletonTheme color="#d5f5f6" highlightColor="#afecef">
        <Skeleton circle={true} height={110} width={110} />
      </SkeletonTheme>
    )}
    <h1 className="font-black mt-4">Jonathan Picazo</h1>
    {repo?.avatar_url ? (
      <a href={repo?.html_url || '#'} target="_blank" rel="noopener"
         className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-indigo-100 text-indigo-800">
        <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
             fill="currentColor" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" />
        </svg>
        {repo?.public_repos ?? '?'} repos
      </a>
    ) : (
      <div id="loader">
        <SkeletonTheme color="#e5edff" highlightColor="#cddbfe">
          <Skeleton width={89.28} height={20} />
        </SkeletonTheme>
      </div>
    )}
  </header>
);

export default Header;