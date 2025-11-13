
import React from 'react';
import { SectionWrapperProps } from '../types';

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  variant = 'default'
}) => {
  const baseClasses = 'mb-8 sm:mb-12 rounded-2xl p-4 sm:p-8 shadow-sm border';
  let variantClasses = '';

  switch (variant) {
    case 'default':
      variantClasses = 'section-gradient-default';
      break;
    case 'primary-accent':
      variantClasses = 'section-gradient-primary-accent';
      break;
    case 'secondary-accent':
      variantClasses = 'section-gradient-secondary-accent';
      break;
    case 'emerald':
      variantClasses = 'section-gradient-emerald';
      break;
    case 'violet':
      variantClasses = 'section-gradient-violet';
      break;
    case 'yellow':
      variantClasses = 'section-gradient-yellow';
      break;
    case 'white-surface':
      variantClasses = 'bg-white border-slate-200';
      break;
    case 'conclusion':
      variantClasses = 'section-gradient-conclusion p-6 sm:p-10 shadow-lg border border-slate-700';
      break;
  }

  return (
    <section className={`${baseClasses} ${variantClasses}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;