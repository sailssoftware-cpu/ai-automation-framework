
import React from 'react';
import { AchievementCardProps } from '../types';

const AchievementCard: React.FC<AchievementCardProps> = ({ title, content, type }) => {
  const icon = type === 'did' ? (
    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" stroke="var(--primary-action-color)" strokeWidth="2" />
      <path d="M6 10L9 13L14 7" stroke="var(--primary-action-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg className="w-5 h-5 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="10,2 12,8 18,8 13,12 15,18 10,14 5,18 7,12 2,8 8,8" fill="var(--primary-action-color)" />
    </svg>
  );

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 border border-slate-200">
      <h4 className="text-lg sm:text-xl font-semibold text-[var(--text-color)] mb-3">{title}</h4>
      <ul className="space-y-2">
        {content.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            {icon}
            <span className="text-sm sm:text-base text-[var(--text-color)]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AchievementCard;