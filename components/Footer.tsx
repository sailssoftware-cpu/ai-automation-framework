
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 sm:mt-16 pt-8 border-t border-slate-300 text-[var(--text-color)]">
      <div className="flex flex-col items-center gap-6">
        <img
          src="https://50153138.fs1.hubspotusercontent-na1.net/hubfs/50153138/Sails/Sails/logo-1-1.png?width=860&amp;t=."
          alt="Company Logo"
          className="h-12 sm:h-16 w-auto"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        <p className="text-[var(--text-color)] text-base sm:text-lg text-center max-w-3xl">
          Ready to transform your automation framework development? Start with comprehensive documentation and let AI amplify your team's capabilities.
        </p>
        <p className="text-[var(--text-color)] text-sm">© 2025 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;