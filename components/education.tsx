import { Card } from '@/components/ui/card';
import { GraduationCap, School } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Master of Information Technology',
      institution: 'Mumbai University',
      period: 'Jun 2015 - May 2017',
      icon: GraduationCap,
      completed: true,
    },
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Mumbai University',
      period: 'Jun 2012 - Apr 2015',
      icon: School,
      completed: true,
    },
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Where It All Began
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden hover-lift"
          >
            <div className="px-5 py-4 flex items-center gap-4">
              <div className="flex-shrink-0 flex items-center justify-center">
                <span className="inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 h-12 w-12 shadow-sm">
                  {edu.icon && (
                    <edu.icon className="h-6 w-6 text-gray-400 dark:text-gray-400" />
                  )}
                </span>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-sm md:text-lg font-bold text-black dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-0.5 font-medium">
                  {edu.institution}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 font-light">
                  {edu.period}
                </p>
                {!edu.completed && 'status' in edu && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {edu.status as string}
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
