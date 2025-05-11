import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Apollo Data Enrichment',
      description:
        "Led the development of Apollo's data enrichment platform, enabling users to enrich their CRM data with Apollo's database of over 200M contacts.",
      image: '/placeholder.svg?height=300&width=500',
      tags: ['React', 'TypeScript', 'Redux', 'Cypress', 'Vitest'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Treebo Hotel Listings',
      description:
        'Revamped the hotel listing experience with modular components and optimized image loading for better performance across devices.',
      image: '/placeholder.svg?height=300&width=500',
      tags: ['React', 'Next.js', 'JavaScript', 'Responsive Design'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Yapsody Ticketing Platform',
      description:
        "Led the frontend architecture for v2.0 of Yapsody's ticketing platform with scalable modules for user roles and permissions.",
      image: '/placeholder.svg?height=300&width=500',
      tags: ['React', 'Redux', 'JavaScript', 'Design System'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Tallery Gallery',
      description:
        'Developed an asset management platform with React.js, focusing on reusable components and SEO optimization.',
      image: '/placeholder.svg?height=300&width=500',
      tags: ['React', 'React Native', 'JavaScript', 'SEO'],
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Development Endeavors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-black border-gray-300 dark:border-gray-800 overflow-hidden hover:border-blue-500 transition-colors hover-lift"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image || '/placeholder.svg'}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 h-24 overflow-hidden">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 text-black dark:text-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
