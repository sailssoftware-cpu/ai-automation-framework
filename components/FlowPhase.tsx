
import React from 'react';
import { FlowPhaseProps } from '../types';

const FlowPhase: React.FC<FlowPhaseProps> = ({ phaseNumber, title, items, bgColorClass }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${bgColorClass}`}>
          {phaseNumber}
        </div>
        <h3 className="text-xl font-bold text-[var(--text-color)]">{title}</h3>
      </div>
      <div className="grid md:grid-cols-4 gap-4 ml-11">
        {items.map((item, index) => (
          <div key={index} className={`bg-slate-50 rounded-lg p-4 border border-slate-200 ${item.colSpan ? `md:col-span-${item.colSpan}` : ''}`}>
            <h4 className="font-semibold text-[var(--text-color)] mb-2">{item.heading}</h4>
            <p className="text-sm text-[var(--text-color)]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowPhase;