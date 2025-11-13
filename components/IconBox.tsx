
import React from 'react';
import { IconBoxProps } from '../types';

const IconBox: React.FC<IconBoxProps> = ({ icon, title, textColorClass = 'text-[var(--text-color)]' }) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-4">
      <div className={`w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 ${textColorClass}`}>
        {icon}
      </div>
      <h2 className={`text-2xl sm:text-3xl font-bold ${textColorClass}`}>{title}</h2>
    </div>
  );
};

export default IconBox;