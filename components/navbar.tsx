'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);
    // Improved scroll spy logic
    const handleScroll = () => {
      const sectionIds = ['home', 'skills', 'experience', 'education'];
      let current = sectionIds[0];
      let minDiff = Number.POSITIVE_INFINITY;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const diff = Math.abs(rect.top - 80);
          if (rect.top <= 80 && diff < minDiff) {
            minDiff = diff;
            current = id;
          }
        }
      });
      // If at the bottom of the page, force last section as active
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 2
      ) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  if (!mounted) return null;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-black"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center h-14">
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-base font-medium transition-colors px-0 py-0
                    ${
                      isActive
                        ? 'text-black dark:text-white'
                        : 'text-gray-500 dark:text-gray-400'
                    }
                    hover:text-black dark:hover:text-white`}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-black dark:text-white hover:text-black dark:hover:text-white focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5 text-black" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
