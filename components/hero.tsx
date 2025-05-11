'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, Linkedin } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Hero() {
  const resumeUrl =
    'https://drive.google.com/file/d/1j_nGYuO5NEqTMEjyvyGmJPs97mxiwzL7/view?usp=sharing';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh]">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 dark:from-red-400 dark:via-pink-500 dark:to-pink-500 text-transparent bg-clip-text">
        Malika Ansari
      </h1>
      <p className="max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
        Passionate about crafting exceptional web experiences as a Frontend
        Developer. I specialize in building fast, scalable, and intuitive
        applications that engage and delight users. Let's create something great
        together!
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm px-3 py-1 rounded-md hover-lift"
            >
              Contact Me!
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white w-56">
            <div className="px-3 py-2 text-base font-semibold border-b border-gray-200 dark:border-gray-800">
              Get in touch
            </div>
            <DropdownMenuItem className="py-2 px-3 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800">
              <Link
                href="mailto:malikaansari91@gmail.com"
                className="flex items-center w-full"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span>Email</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className="py-2 px-3 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800">
              <Link
                href="https://www.linkedin.com/in/malika-ansari-b89a81137/"
                className="flex items-center w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="https://github.com/malikaansari91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm px-3 py-1 rounded-md hover-lift"
          >
            <Github className="h-5 w-5" />
          </Button>
        </Link>
        <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm px-3 py-1 rounded-md hover-lift"
          >
            My Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
