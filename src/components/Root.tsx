import React, { useEffect, useState } from 'react';
import Badge from './Badge';
import Card from './Card';
import Header from './Header';
import Link from './Link';
import NavLink from './NavLink';
import { IGithubUser } from '../types/github';

const Root: React.FC = () => {
  const [repo, setRepo] = useState<IGithubUser | undefined>();

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
        <Header repo={repo} />
        <nav className="grid sm:gap-4 grid-cols-1 sm:grid-cols-2">
          <NavLink href="#summary">Summary</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="https://blog.jonathanpicazo.me/">Blog Posts</NavLink>
          <NavLink href="mailto:macbethjonathan@gmail.com">Contact</NavLink>
        </nav>
      </Card>

      {/* Summary */}
      <div id="summary" />
      <Card className="bg-blue-300 mt-4" roundTop center>
        <h2 className="font-extrabold uppercase opacity-50">Summary</h2>
        <hr className="my-4 border-blue-500" />
        <p>He is a <strong>full-stack web developer</strong> with a track record
          of creating effective programs and projects quickly, without
          sacrificing quality or client needs.</p>
      </Card>
      <Card className="bg-blue-200" center>
        <p>He is a <strong>lifelong learner</strong> committed to staying
          current on new technologies.</p>
      </Card>
      <Card className="bg-blue-100" roundBottom center>
        <p>He is a <strong>team player</strong> willing to take the lead on
          executing tasks and experimenting with new ideas.</p>
      </Card>

      {/* About */}
      <div id="about" />
      <Card className="bg-pink-300 mt-4" roundTop center>
        <h2 className="font-extrabold uppercase opacity-50">About</h2>
        <hr className="my-4 border-pink-500" />
        <p>He is currently a <strong>Team Lead</strong> at <Link
          href="https://lambdaschool.com/courses/full-stack-web-development"
          className="border-pink-700">Lambda School</Link> and believes
          that you can achieve anything once you put your mind to it. Watch him
          host a special <Link href="https://youtu.be/TnAwK6LBFXk"
                               className="border-pink-700">after-hours</Link> session
          for his students!</p>
      </Card>
      <Card className="bg-pink-200" center>
        <p>His <strong>unique background</strong> in game design is what led him
          to pursue a career in software engineering and web development.</p>
      </Card>
      <Card className="bg-pink-100" roundBottom center>
        <p>His favourite games were text-based. He learned the entire Lua
          scripting language to become better at his craft. Check out his
          favourite <strong><Link href="https://www.mudlet.org/"
                                  className="border-pink-400">MUD client</Link></strong> which
          uses Lua as its scripting engine.
        </p>
      </Card>

      {/* Skills */}
      <div id="skills" />
      <Card className="bg-orange-300 mt-4" roundTop center>
        <h2 className="font-extrabold uppercase opacity-50">Skills</h2>
        <hr className="my-4 border-orange-500" />
        <p>The industry evolves quickly, so he <strong>works
          constantly</strong> to keep his
          skills current on the latest technologies.</p>
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
        <p>While he does love to work on his professional and creative skillset,
          like everyone else he has a few <strong>hobbies</strong>. He loves
          movies, <span
            className="inline-block transform rotate-180"
            style={{ verticalAlign: 'text-top' }}>yoga</span>,
          cooking, and playing with his puppers... Arf!</p>
      </Card>

      {/* Projects */}
      <div id="projects" />
      <Card className="bg-cool-gray-300 mt-4" roundTop roundBottom center>
        <h2 className="font-extrabold uppercase opacity-50">Projects</h2>
        <hr className="my-4 border-cool-gray-500" />
        <p>He has many projects both personal and professional, all of which he
          is proud of. If you want to see more than the projects he has listed
          below, you can view his <Link href={repo?.html_url || '#'}
                                        className="border-cool-gray-700">GitHub
            profile</Link>.</p>
      </Card>

      <Card className="bg-cool-gray-200 mt-4" roundTop center>
        <p><strong>Swaap</strong> is a web and mobile app built to facilitate
          connections at events. He fully designed, implemented, and documented
          the entire backend using Apollo Server and Prisma.</p>
      </Card>
      <Card className="bg-cool-gray-100" center>
        <p>He enjoyed mentoring other junior members of his team and
          fostering a safe environment for them to work in.</p>
      </Card>
      <Card className="bg-cool-gray-50 flex justify-around" roundBottom>
        <Link href="https://swaap.co/"
              className="border-none text-sm flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span>Live Site</span>
        </Link>
        <Link href="https://github.com/Lambda-School-Labs?q=conference-contacts"
              className="border-none text-sm flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd" fillRule="evenodd" />
          </svg>
          <span className="-mt-0.5">Source</span>
        </Link>
      </Card>

      <Card className="bg-cool-gray-200 mt-4" roundTop center>
        <p><strong>Showbunny</strong> is a web and mobile app built using
          vanilla JS that allows searching and viewing information on trending
          movies and TV shows. He built it with his kitty friend.</p>
      </Card>
      <Card className="bg-cool-gray-100" center>
        <p>He participated in <Link
          href="https://hacktoberfest.digitalocean.com/"
          className="border-cool-gray-400">Hacktoberfest</Link> by adding a
          number of issues to encourage open-source collaboration on Showbunny.
          He then contributed to other projects which won him a free teeshirt!
        </p>
      </Card>
      <Card className="bg-cool-gray-50 flex justify-around" roundBottom>
        <Link href="https://showbunny.macjabeth.now.sh/"
              className="border-none text-sm flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span>Live Site</span>
        </Link>
        <Link href="https://github.com/macjabeth/showbunny"
              className="border-none text-sm flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd" fillRule="evenodd" />
          </svg>
          <span className="-mt-0.5">Source</span>
        </Link>
      </Card>
    </div>
  );
};

export default Root;
