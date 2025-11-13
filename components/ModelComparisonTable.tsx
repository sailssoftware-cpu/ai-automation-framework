
import React from 'react';

const ModelComparisonTable: React.FC = () => {
  const data = [
    { feature: 'Code Robustness', geminiFlash: '⭐⭐⭐⭐', geminiPro: '⭐⭐⭐⭐⭐', geminiOpus: '⭐⭐⭐⭐⭐', others: '⭐⭐⭐' },
    { feature: 'Error Resolution', geminiFlash: '⭐⭐⭐⭐', geminiPro: '⭐⭐⭐⭐⭐', geminiOpus: '⭐⭐⭐⭐⭐', others: '⭐⭐⭐' },
    { feature: 'Speed', geminiFlash: '⭐⭐⭐⭐⭐', geminiPro: '⭐⭐⭐⭐', geminiOpus: '⭐⭐⭐', others: '⭐⭐⭐⭐' },
    { feature: 'Code Enhancement', geminiFlash: '⭐⭐⭐⭐', geminiPro: '⭐⭐⭐⭐⭐', geminiOpus: '⭐⭐⭐⭐⭐', others: '⭐⭐⭐' },
    { feature: 'Documentation Quality', geminiFlash: '⭐⭐⭐⭐', geminiPro: '⭐⭐⭐⭐⭐', geminiOpus: '⭐⭐⭐⭐⭐', others: '⭐⭐⭐' },
    { feature: 'Resource Consumption', geminiFlash: '⭐⭐⭐', geminiPro: '⭐⭐', geminiOpus: '⭐', others: '⭐⭐⭐⭐' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-100">
            <th className="text-left p-4 font-semibold text-[var(--text-color)] border border-slate-300">Feature</th>
            <th className="text-center p-4 font-semibold text-[var(--text-color)] border border-slate-300">Gemini Flash</th>
            <th className="text-center p-4 font-semibold text-[var(--text-color)] border border-slate-300">Gemini Pro</th>
            <th className="text-center p-4 font-semibold text-[var(--text-color)] border border-slate-300">Gemini Opus</th>
            <th className="text-center p-4 font-semibold text-[var(--text-color)] border border-slate-300">Other Models</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-[var(--surface-color)]">
              <td className="p-4 font-medium text-[var(--text-color)] border border-slate-300">{row.feature}</td>
              <td className="p-4 text-center border border-slate-300">{row.geminiFlash}</td>
              <td className="p-4 text-center border border-slate-300">{row.geminiPro}</td>
              <td className="p-4 text-center border border-slate-300">{row.geminiOpus}</td>
              <td className="p-4 text-center border border-slate-300">{row.others}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModelComparisonTable;