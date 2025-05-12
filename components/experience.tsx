'use client';

import { experienceData } from '@/lib/constants';

interface Skill {
  name: string;
  icon: string;
}

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Professional Background
      </h2>
      <div className="space-y-10">
        {experienceData.map((company, index) => {
          return (
            <div
              key={index}
              className="bg-white dark:bg-black border border-gray-300 dark:border-gray-800 rounded-lg overflow-hidden hover-lift"
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
                      <h3 className="text-base md:text-lg font-bold text-black dark:text-white">
                        {company.company}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                        {company.companyInfo}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                        {company.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="py-3 px-4">
                    <h4 className="text-base md:text-lg font-bold text-black dark:text-white mb-0.5">
                      {role.title}
                    </h4>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">
                      {role.period}
                    </p>

                    <div className="space-y-2">
                      {role.achievements && (
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {role.achievements}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-3">
                      {role.skills.map((skill: Skill, i: number) => (
                        <div key={i} className="relative group">
                          <img
                            alt={`${skill.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                            src={skill.icon}
                          />
                          <span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-0.5 px-1.5 rounded whitespace-nowrap transition-opacity duration-200">
                            {skill.name}
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
