"use client";

import Image from "next/image";

export default function Skills() {
  const skillColumns = [
    {
      delay: "delay-100",
      skills: [
        { name: "JavaScript", icon: "javascript-svgrepo-com.svg" },
        { name: "TypeScript", icon: "typescript-svgrepo-com.svg" },
        { name: "Python", icon: "python-svgrepo-com.svg" },
        { name: "Java", icon: "java-svgrepo-com.svg" },
        { name: "C", icon: "c.svg" },
        { name: "HTML", icon: "html-5-svgrepo-com.svg" },
        { name: "CSS", icon: "css-svgrepo-com.svg" },
      ],
    },
    {
      delay: "delay-200",
      skills: [
        { name: "React", icon: "react-svgrepo-com.svg" },
        { name: "Next.js", icon: "nextjs-icon-svgrepo-com.svg" },
        { name: "Tailwind", icon: "tailwind-svgrepo-com.svg" },
        { name: "NPM", icon: "npm-svgrepo-com.svg" },
        { name: "Hugo", icon: "hugo-svgrepo-com.svg" },
        { name: "WordPress", icon: "wordpress-color-svgrepo-com.svg" },
        { name: "Deno", icon: "Deno_Logo_2024.svg" },
      ],
    },
    {
      delay: "delay-300",
      skills: [
        { name: "Node.js", icon: "node-svgrepo-com.svg" },
        { name: "Express", icon: "express-svgrepo-com.svg" },
        { name: "PostgreSQL", icon: "postgresql-svgrepo-com.svg" },
        { name: "MongoDB", icon: "mongodb-svgrepo-com.svg" },
        { name: "Firebase", icon: "firebase-svgrepo-com.svg" },
        { name: "PHP", icon: "php-1-logo-svgrepo-com.svg" },
        { name: "SQL", icon: "sql-database-generic-svgrepo-com.svg" },
      ],
    },
    {
      delay: "delay-400",
      skills: [
        { name: "Docker", icon: "docker-svgrepo-com(1).svg" },
        { name: "Git", icon: "git-svgrepo-com.svg" },
        { name: "GitHub", icon: "github-svgrepo-com.svg" },
        { name: "GitLab", icon: "gitlab-svgrepo-com.svg" },
        { name: "AWS", icon: "aws-svgrepo-com.svg" },
        { name: "Azure", icon: "azure-svgrepo-com.svg" },
        { name: "Nginx", icon: "nginx-svgrepo-com.svg" },
      ],
    },
    {
      delay: "delay-500",
      skills: [
        { name: "Linux", icon: "linux-svgrepo-com(1).svg" },
        { name: "Ubuntu", icon: "ubuntu-svgrepo-com.svg" },
        { name: "Arch", icon: "arch-linux-svgrepo-com.svg" },
        { name: "Apple", icon: "apple-svgrepo-com.svg" },
        { name: "Slack", icon: "slack-svgrepo-com.svg" },
        { name: "Cursor", icon: "cursor.svg" },
        { name: "Vim", icon: "vim-svgrepo-com.svg" },
      ],
    },
    {
      delay: "delay-600",
      skills: [
        { name: "VS Code", icon: "vscode-svgrepo-com.svg" },
        { name: "Jupyter", icon: "jupyter-svgrepo-com.svg" },
        { name: "Terminal", icon: "terminal-svgrepo-com.svg" },
        { name: "PowerShell", icon: "powershell-svgrepo-com.svg" },
        { name: "Bash", icon: "bash-icon-svgrepo-com.svg" },
        { name: "Notion", icon: "notion-logo-svgrepo-com.svg" },
        { name: "Figma", icon: "figma-svgrepo-com.svg" },
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Skills && Technologies
      </h2>
      <div className="bg-gray-100/20 dark:bg-black border border-gray-300 dark:border-gray-800 rounded-lg p-8">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8">
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
