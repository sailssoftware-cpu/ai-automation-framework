
import React from 'react';
import { BenefitCardProps } from '../types';

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-[var(--text-color)]">{title}</h3>
      </div>
      <p className="text-lg text-[var(--text-color)] leading-relaxed">{description}</p>
    </div>
  );
};

export default BenefitCard;