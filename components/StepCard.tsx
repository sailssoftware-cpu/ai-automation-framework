
import React from 'react';
import { StepCardProps } from '../types';

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[var(--text-color)] text-white rounded-full flex items-center justify-center text-xl font-bold">
          {stepNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[var(--text-color)] mb-2">{title}</h3>
          <p className="text-[var(--text-color)]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;