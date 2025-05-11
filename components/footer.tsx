import { Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="bg-white dark:bg-black border-t border-gray-200 dark:border-black pb-6 md:pb-0"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center h-14 py-4 md:py-0">
          {/* Left: Copyright */}
          <div className="flex justify-center md:justify-start mb-2 md:mb-0 text-gray-500 dark:text-gray-300 text-sm items-center">
            © 2025 Malika Ansari. All rights reserved.
          </div>
          {/* Right: Icons */}
          <div className="flex justify-center md:justify-end items-center space-x-8">
            <a
              href="https://www.linkedin.com/in/malika-ansari-b89a81137/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/malikaansari91"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors hover-lift"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:malikaansari91@gmail.com"
              className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors hover-lift"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
