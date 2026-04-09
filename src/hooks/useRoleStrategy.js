import { useState } from 'react';

/**
 * Hook to manage Content Strategy Ordering
 * Based on the target role (analyst vs engineer)
 */
export const useRoleStrategy = (defaultRole = 'engineer') => {
  const [role, setRole] = useState(defaultRole);

  const getSectionOrder = () => {
    // Analyst Focus: Labs -> Experience -> Projects
    if (role === 'analyst') {
      return [
        'hero',
        'about',
        'skills',
        'labs',
        'experience',
        'projects',
        'certifications',
        'soc_methodology',
        'contact'
      ];
    }
    // Engineer Focus (Default): Projects -> Labs -> Experience
    return [
      'hero',
      'about',
      'skills',
      'projects',
      'labs',
      'experience',
      'certifications',
      'soc_methodology',
      'contact'
    ];
  };

  return {
    role,
    setRole,
    sectionOrder: getSectionOrder()
  };
};
