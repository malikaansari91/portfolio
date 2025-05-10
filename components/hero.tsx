"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, MessageSquare } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Hero() {
  const resumeUrl = "#"; // Placeholder for resume URL
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh]">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 dark:from-red-400 dark:via-pink-500 dark:to-pink-500 text-transparent bg-clip-text">
        Malika Ansari
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
        Passionate developer with a knack for solving complex problems through
        code. Mostly self-taught and driven by an unyielding curiosity to
        explore and master new technologies.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Contact Me!
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-white w-56">
            <div className="px-4 py-3 text-lg font-semibold border-b border-gray-200 dark:border-gray-800">
              Get in touch
            </div>
            <DropdownMenuItem className="py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800">
              <Link
                href="mailto:malikaansari91@gmail.com"
                className="flex items-center w-full"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span>Email</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800">
              <Link
                href="https://wa.me/919619575311"
                className="flex items-center w-full"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                <span>WhatsApp</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800">
              <Link
                href="https://linkedin.com/in/malika-ansari"
                className="flex items-center w-full"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href="https://github.com/malikaansari"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2 rounded-md"
          >
            <Github className="h-5 w-5" />
          </Button>
        </Link>
        <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-6 py-2 rounded-md"
          >
            My Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
