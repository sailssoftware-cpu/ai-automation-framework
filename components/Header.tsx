
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="mb-8 sm:mb-12 text-[var(--text-color)]">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-color)] mb-4 leading-tight">
        Building Enterprise-Grade Automation Frameworks with AI: From Vision to Reality
      </h1>
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[var(--text-color)]">
        <span className="px-3 py-1 bg-primary-accent-light text-primary-accent rounded-full text-xs sm:text-sm font-medium">
          AI Development
        </span>
        <span className="px-3 py-1 bg-secondary-accent-light text-secondary-accent rounded-full text-xs sm:text-sm font-medium">
          Test Automation
        </span>
      </div>
    </header>
  );
};

export default Header;