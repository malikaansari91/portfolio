'use client';

import { experienceData } from '@/lib/constants';

export default function Experience() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Professional Background
      </h2>
      <div className="space-y-10">
        {experienceData.map((company, index) => {
          return (
            <div
              key={index}
              className="bg-gray-100/5 dark:bg-black border border-gray-300 dark:border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="p-4 pb-1">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center">
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={`${company.company} logo`}
                          className="h-8 w-8 object-contain"
                        />
                      ) : (
                        <span className="text-black dark:text-white font-semibold text-xs">
                          {company.company.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-black dark:text-white">
                        {company.company}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                        {company.companyInfo}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {company.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="py-3 px-4">
                    <h4 className="text-lg font-bold text-black dark:text-white mb-0.5">
                      {role.title}
                    </h4>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">
                      {role.period}
                    </p>

                    <div className="space-y-2">
                      {role.achievements && (
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                          {role.achievements}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-3">
                      {role.skills.map((skill, i) => (
                        <div key={i} className="relative group">
                          <img
                            alt={`${skill} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            src={`https://www.fernand3z.dev/icons/${getIconFilename(
                              skill.toLowerCase()
                            )}`}
                          />
                          <span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-0.5 px-1.5 rounded whitespace-nowrap transition-opacity duration-200">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Function to map skill names to their SVG icon filenames
function getIconFilename(skill: string): string {
  switch (skill) {
    case 'react':
    case 'react.js':
      return 'react-svgrepo-com.svg';
    case 'typescript':
      return 'typescript-svgrepo-com.svg';
    case 'javascript':
      return 'javascript-svgrepo-com.svg';
    case 'next.js':
      return 'nextjs-icon-svgrepo-com.svg';
    case 'vitest':
      return 'vite-svgrepo-com.svg';
    case 'chrome extension':
      return 'chrome-svgrepo-com.svg';
    case 'eslint':
      return 'eslint-svgrepo-com.svg';
    case 'performance optimization':
      return 'performance-svgrepo-com.svg';
    case 'i18n':
      return 'language-svgrepo-com.svg';
    case 'responsive design':
      return 'responsive-design-svgrepo-com.svg';
    case 'lighthouse':
      return 'lighthouse-svgrepo-com.svg';
    case 'design systems':
      return 'design-svgrepo-com.svg';
    case 'email marketing':
      return 'email-marketing-svgrepo-com.svg';
    case 'frontend architecture':
      return 'architecture-svgrepo-com.svg';
    case 'user permissions':
      return 'permission-svgrepo-com.svg';
    case 'react native':
      return 'react-svgrepo-com.svg';
    case 'seo':
      return 'seo-svgrepo-com.svg';
    case 'mobile development':
      return 'mobile-svgrepo-com.svg';
    case 'asset management':
      return 'asset-svgrepo-com.svg';
    // Default mappings for common skills
    case 'html':
      return 'html-5-svgrepo-com.svg';
    case 'css':
      return 'css-svgrepo-com.svg';
    case 'tailwind':
      return 'tailwind-svgrepo-com.svg';
    case 'node.js':
      return 'node-svgrepo-com.svg';
    case 'express':
      return 'express-svgrepo-com.svg';
    case 'postgresql':
    case 'postgres':
      return 'postgresql-svgrepo-com.svg';
    case 'mongodb':
      return 'mongodb-svgrepo-com.svg';
    case 'firebase':
      return 'firebase-svgrepo-com.svg';
    case 'git':
      return 'git-svgrepo-com.svg';
    case 'github':
      return 'github-svgrepo-com.svg';
    case 'aws':
      return 'aws-svgrepo-com.svg';
    case 'docker':
      return 'docker-svgrepo-com(1).svg';
    default:
      return 'code-svgrepo-com.svg'; // Default icon for unknown skills
  }
}
