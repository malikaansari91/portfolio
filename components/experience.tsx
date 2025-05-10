"use client";

import { experienceData } from "@/lib/constants";

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
              <div className="p-6 pb-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center">
                      {company.logo ? (
                        <img
                          src={company.logo}
                          alt={`${company.company} logo`}
                          className="h-10 w-10 object-contain"
                        />
                      ) : (
                        <span className="text-black dark:text-white font-semibold text-sm">
                          {company.company.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        {company.company}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {company.companyInfo}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {company.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {company.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="py-5 px-6 border-t border-gray-300 dark:border-gray-800"
                  >
                    <h4 className="text-xl font-bold text-black dark:text-white mb-1">
                      {role.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {role.period}
                    </p>

                    <div className="space-y-3">
                      {role.achievements &&
                        role.achievements.map(
                          (achievement: string, i: number) => (
                            <p
                              key={i}
                              className="text-gray-700 dark:text-gray-300 leading-relaxed"
                            >
                              • {achievement}
                            </p>
                          )
                        )}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-5">
                      {role.skills.map((skill, i) => (
                        <div key={i} className="relative group">
                          <img
                            alt={`${skill} icon`}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                            src={`https://www.fernand3z.dev/icons/${getIconFilename(
                              skill.toLowerCase()
                            )}`}
                          />
                          <span className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap transition-opacity duration-200">
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
    case "react":
    case "react.js":
      return "react-svgrepo-com.svg";
    case "typescript":
      return "typescript-svgrepo-com.svg";
    case "javascript":
      return "javascript-svgrepo-com.svg";
    case "next.js":
      return "nextjs-icon-svgrepo-com.svg";
    case "vitest":
      return "vite-svgrepo-com.svg";
    case "chrome extension":
      return "chrome-svgrepo-com.svg";
    case "eslint":
      return "eslint-svgrepo-com.svg";
    case "performance optimization":
      return "performance-svgrepo-com.svg";
    case "i18n":
      return "language-svgrepo-com.svg";
    case "responsive design":
      return "responsive-design-svgrepo-com.svg";
    case "lighthouse":
      return "lighthouse-svgrepo-com.svg";
    case "design systems":
      return "design-svgrepo-com.svg";
    case "email marketing":
      return "email-marketing-svgrepo-com.svg";
    case "frontend architecture":
      return "architecture-svgrepo-com.svg";
    case "user permissions":
      return "permission-svgrepo-com.svg";
    case "react native":
      return "react-svgrepo-com.svg";
    case "seo":
      return "seo-svgrepo-com.svg";
    case "mobile development":
      return "mobile-svgrepo-com.svg";
    case "asset management":
      return "asset-svgrepo-com.svg";
    // Default mappings for common skills
    case "html":
      return "html-5-svgrepo-com.svg";
    case "css":
      return "css-svgrepo-com.svg";
    case "tailwind":
      return "tailwind-svgrepo-com.svg";
    case "node.js":
      return "node-svgrepo-com.svg";
    case "express":
      return "express-svgrepo-com.svg";
    case "postgresql":
    case "postgres":
      return "postgresql-svgrepo-com.svg";
    case "mongodb":
      return "mongodb-svgrepo-com.svg";
    case "firebase":
      return "firebase-svgrepo-com.svg";
    case "git":
      return "git-svgrepo-com.svg";
    case "github":
      return "github-svgrepo-com.svg";
    case "aws":
      return "aws-svgrepo-com.svg";
    case "docker":
      return "docker-svgrepo-com(1).svg";
    default:
      return "code-svgrepo-com.svg"; // Default icon for unknown skills
  }
}
