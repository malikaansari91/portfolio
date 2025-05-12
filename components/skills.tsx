'use client';

import { useMemo } from 'react';
import { skillColumns } from '@/lib/constants';

export default function Skills() {
  // Flatten all skills for mobile
  const allSkills = skillColumns.flatMap((col) => col.skills);
  type Skill = { name: string; icon: string };
  const skillColumnsMobile: Skill[][] = useMemo(() => {
    const cols: Skill[][] = [[], [], []];
    allSkills.forEach((skill, i) => {
      cols[i % 3].push(skill);
    });
    return cols;
  }, [allSkills]);

  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
        My Digital Playground
      </h2>
      <div className="bg-white dark:bg-black border border-gray-300 dark:border-gray-800 rounded-lg p-4 md:p-8 hover-lift">
        {/* Mobile: 3 columns, md+: 5 columns */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
          {/* Mobile view: 3 columns */}
          <div className="block md:hidden contents">
            {skillColumnsMobile.map((skills, columnIndex) => (
              <div key={columnIndex}>
                <div className="space-y-2 md:space-y-4">
                  {skills.map((skill, skillIndex) => (
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
          {/* Desktop view: 5 columns */}
          <div className="hidden md:contents">
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
        src={icon}
      />
      <span className="text-xs md:text-sm font-medium text-foreground">
        {name}
      </span>
    </div>
  );
}
