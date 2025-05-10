import { Card } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Master of Information Technology",
      institution: "Mumbai University",
      period: "June 2015 - May 2017",
      icon: GraduationCap,
      completed: true,
    },
    {
      degree: "Bachelor of Information Technology",
      institution: "Mumbai University",
      period: "June 2012 - April 2015",
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
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-md flex items-center justify-center overflow-hidden">
                    {edu.icon && (
                      <edu.icon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.period}
                  </p>
                  {!edu.completed && "status" in edu && (
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {edu.status as string}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
