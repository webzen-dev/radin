import { createContext, useContext, ReactNode } from 'react';
import { Variants } from 'framer-motion';

interface AnimationContextType {
  itemVariants: Variants;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 100, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  return (
    <AnimationContext.Provider value={{ itemVariants }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};
