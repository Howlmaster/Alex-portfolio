import React from "react";
import { GitIcon, DiscordIcon, TeamsIcon } from "./icons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="absolute bottom-0 w-full text-white shadow-md bg-cyan-500 dark:bg-cyan-600 transition-colors duration-200">
      <div className="container w-full px-6 mx-auto py-4 sm:py-6">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          {/* Left side - Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-lg">
              © {currentYear} Alexandar Gamboa. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm opacity-80 mt-1">
              Senior Web Scraping & Automation & Full Stack Developer
            </p>
          </div>
          
          {/* Center - Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://teams.microsoft.com/l/chat/0/0?users=NelsonAlex999@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors duration-200 hover:bg-cyan-400 dark:hover:bg-cyan-500 rounded-full"
              aria-label="Microsoft Teams"
            >
              <TeamsIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/alexandergamboa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors duration-200 hover:bg-cyan-400 dark:hover:bg-cyan-500 rounded-full"
              aria-label="GitHub"
            >
              <GitIcon className="w-5 h-5" />
            </a>
            <a
              href="https://discord.com/users/alexandergamboa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors duration-200 hover:bg-cyan-400 dark:hover:bg-cyan-500 rounded-full"
              aria-label="Discord"
            >
              <DiscordIcon className="w-5 h-5" />
            </a>
          </div>
          
          {/* Right side - Contact Info */}
          <div className="text-center sm:text-right">
            <p className="text-xs sm:text-sm">
              <a 
                href="mailto:alexandergamboa402@gmail.com"
                className="hover:underline transition-colors duration-200"
              >
                alexandergamboa402@gmail.com
              </a>
            </p>
            <p className="text-xs opacity-80 mt-1">
              Available for freelance projects
            </p>
          </div>
        </div>
        
        {/* Bottom border with accent */}
        <div className="mt-4 pt-4 border-t border-cyan-400 dark:border-cyan-500">
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
            <p className="text-xs opacity-80">
              Built with Next.js, React & Tailwind CSS
            </p>
            <p className="text-xs opacity-80">
              Last updated: 06/01/2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
