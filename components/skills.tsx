'use client';

import Image from 'next/image';

export default function Skills() {
  const skillColumns = [
    {
      delay: 'delay-100',
      skills: [
        { name: 'JavaScript', icon: 'javascript-svgrepo-com.svg' },
        { name: 'TypeScript', icon: 'typescript-svgrepo-com.svg' },
        { name: 'HTML', icon: 'html-5-svgrepo-com.svg' },
        { name: 'React', icon: 'react-svgrepo-com.svg' },
        { name: 'Next.js', icon: 'nextjs-icon-svgrepo-com.svg' },
        { name: 'CSS', icon: 'css-svgrepo-com.svg' },
        { name: 'Copilot', icon: 'copilot-svgrepo-com.svg' },
      ],
    },
    {
      delay: 'delay-200',
      skills: [
        { name: 'Tailwind', icon: 'tailwind-svgrepo-com.svg' },
        { name: 'NPM', icon: 'npm-svgrepo-com.svg' },
        { name: 'Jest', icon: 'jest-svgrepo-com.svg' },
        { name: 'Redux', icon: 'redux-svgrepo-com.svg' },
        { name: 'React Native', icon: 'react-native-svgrepo-com.svg' },
        { name: 'React Query', icon: 'react-query-svgrepo-com.svg' },
        { name: 'Figma', icon: 'figma-svgrepo-com.svg' },
      ],
    },
    {
      delay: 'delay-300',
      skills: [
        { name: 'Node.js', icon: 'node-svgrepo-com.svg' },
        { name: 'jQuery', icon: 'jquery-svgrepo-com.svg' },
        { name: 'GraphQL', icon: 'graphql-svgrepo-com.svg' },
        { name: 'SASS', icon: 'sass-svgrepo-com.svg' },
        { name: 'Extensions', icon: 'extensions-svgrepo-com.svg' },
        { name: 'Storybook', icon: 'storybook-svgrepo-com.svg' },
        { name: 'Notion', icon: 'notion-logo-svgrepo-com.svg' },
      ],
    },
    {
      delay: 'delay-400',
      skills: [
        { name: 'Git', icon: 'git-svgrepo-com.svg' },
        { name: 'GitHub', icon: 'github-svgrepo-com.svg' },
        { name: 'GitLab', icon: 'gitlab-svgrepo-com.svg' },
        { name: 'Linux', icon: 'linux-svgrepo-com(1).svg' },
        { name: 'Ubuntu', icon: 'ubuntu-svgrepo-com.svg' },
        { name: 'Apple', icon: 'apple-svgrepo-com.svg' },
        { name: 'Terminal', icon: 'terminal-svgrepo-com.svg' },
      ],
    },
    {
      delay: 'delay-500',
      skills: [
        { name: 'Slack', icon: 'slack-svgrepo-com.svg' },
        { name: 'Cursor', icon: 'cursor.svg' },
        { name: 'Webpack', icon: 'webpack-svgrepo-com.svg' },
        { name: 'Vite', icon: 'vite-svgrepo-com.svg' },
        { name: 'Cypress', icon: 'cypress-svgrepo-com.svg' },
        { name: 'ESLint', icon: 'eslint-svgrepo-com.svg' },
        { name: 'VS Code', icon: 'vscode-svgrepo-com.svg' },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Skills && Technologies
      </h2>
      <div className="bg-gray-100/20 dark:bg-black border border-gray-300 dark:border-gray-800 rounded-lg p-8">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {skillColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`animate-slide-in ${column.delay}`}
            >
              <div className="space-y-2 md:space-y-4">
                {column.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2">
      <img
        alt={`${name} icon`}
        width={20}
        height={20}
        className="w-5 h-5"
        src={`https://www.fernand3z.dev/icons/${icon}`}
      />
      <span className="text-xs md:text-sm font-medium text-foreground">
        {name}
      </span>
    </div>
  );
}
