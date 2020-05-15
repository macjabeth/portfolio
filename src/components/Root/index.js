import React, { useEffect, useState } from 'react';
import Card from './Card';
import Link from './Link';
import Badge from './Badge';

const Index = () => {
  const [repo, setRepo] = useState({});

  useEffect(() => {
    fetch('https://api.github.com/users/macjabeth')
      .then(res => res.json())
      .then(data => setRepo(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="py-4 px-6">
      {/* Navigation */}
      <Card className="bg-teal-50 flex justify-around" roundTop roundBottom>
        <header className="flex flex-col items-center justify-center">
          {repo.avatar_url ? (
            <img src={repo.avatar_url} className="h-28 w-28 border border-teal-400 rounded-full"
                 alt="Jonathan's Photo" />
          ) : (
            <span className="inline-flex items-center justify-center h-28 w-28 rounded-full bg-teal-400">
              <span className="text-xl font-medium leading-none text-white">JP</span>
            </span>
          )}
          <h1 className="font-black mt-4">Jonathan Picazo</h1>
          <a href={repo.html_url || '#'} target="_blank" rel="noopener"
             className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-indigo-100 text-indigo-800">
            <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="3" />
            </svg>
            {repo.public_repos | '?'} repos
          </a>
        </header>
        <nav className="flex flex-col">
          <a className="p-2 flex items-center" href="#summary">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Summary
          </a>
          <a className="p-2 flex items-center" href="#about">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd" fillRule="evenodd" />
            </svg>
            About
          </a>
          <a className="p-2 flex items-center" href="#skills">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Skills
          </a>
          <span className="p-2 flex items-center opacity-25 cursor-pointer">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Services
          </span>
          <span className="p-2 flex items-center opacity-25 cursor-pointer">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Projects
          </span>
          <span className="p-2 flex items-center opacity-25 cursor-pointer">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Contact
          </span>
        </nav>
      </Card>


      {/* Summary */}
      <div id="summary" />
      <Card className="bg-blue-300 mt-4" roundTop center>
        <h2 className="font-extrabold uppercase opacity-50">Summary</h2>
        <hr className="my-4 border-blue-500" />
        <p>
          He is a <strong>full-stack web developer</strong> with a track record of creating effective programs and
          projects quickly, without sacrificing quality or client needs.
        </p>
      </Card>
      <Card className="bg-blue-200" center>
        <p>
          He is a <strong>lifelong learner</strong> committed to staying current on new technologies.
        </p>
      </Card>
      <Card className="bg-blue-100" roundBottom center>
        <p>
          He is a <strong>team player</strong> willing to take the lead on executing tasks and experimenting with new
          ideas.
        </p>
      </Card>

      {/* About */}
      <div id="about" />
      <Card className="bg-pink-300 mt-4" roundTop center>
        <h2 className="font-extrabold uppercase opacity-50">About</h2>
        <hr className="my-4 border-pink-500" />
        <p>
          He is currently a Team Lead at <strong><Link
          href="https://lambdaschool.com/courses/full-stack-web-development"
          className="border-pink-700">Lambda School</Link></strong> and
          believes that you can achieve anything once you put your mind to it.
        </p>
      </Card>
      <Card className="bg-pink-200" center>
        <p>
          His <strong>unique background</strong> in game design is what led him to pursue a career in software
          engineering
          and web development.
        </p>
      </Card>
      <Card className="bg-pink-100" roundBottom center>
        <p>
          His favourite games were text-based. He learned the entire Lua scripting language to become better at his
          craft.
          Check out his favourite MUD client <Link href="https://www.mudlet.org/"
                                                   className="border-pink-400">here</Link>.
        </p>
      </Card>

      {/* Skills */}
      <div id="skills" />
      <Card className="bg-orange-300 mt-4" roundTop center>
        <h2 className="font-extrabold uppercase opacity-50">Skills</h2>
        <hr className="my-4 border-orange-500" />
        <p>
          The industry evolves quickly, so he works constantly to keep his skills current on the latest technologies.
        </p>
      </Card>
      <Card className="bg-orange-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <ul className="flex flex-col">
            <li>Languages</li>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Node.js</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>Python</Badge>
            <Badge>Lua</Badge>
            <Badge>SQL</Badge>
          </ul>
          <ul className="flex flex-col">
            <li>Frameworks</li>
            <Badge>React</Badge>
            <Badge>Express</Badge>
            <Badge>Apollo</Badge>
            <Badge>Gatsby</Badge>
            <Badge>Next.js</Badge>
            <Badge>Vue</Badge>
          </ul>
          <ul className="flex flex-col">
            <li>Tools</li>
            <Badge>Git</Badge>
            <Badge>Docker</Badge>
            <Badge>AWS</Badge>
            <Badge>Figma</Badge>
          </ul>
        </div>
      </Card>
      <Card className="bg-orange-100" roundBottom center>
        <p>While he does love to work on his professional and creative skills, like everyone else he has a few hobbies.
          He loves movies, yoga, cooking, and playing with his puppers... Arf!</p>
      </Card>
    </div>
  );
};

export default Index;