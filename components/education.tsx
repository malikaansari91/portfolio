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
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card
            key={index}
            className="bg-gray-100/20 dark:bg-black border border-gray-300 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-6 py-3 flex items-center gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center overflow-hidden">
                  {edu.icon && (
                    <edu.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                  )}
                </div>
              </div>
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-bold text-black dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  {edu.institution}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
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
