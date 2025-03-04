
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface AnimatedTransitionProps {
  children: ReactNode;
  transitionKey: string;
  type?: 'fade' | 'slide' | 'up';
}

export const AnimatedTransition = ({ 
  children, 
  transitionKey,
  type = 'fade'
}: AnimatedTransitionProps) => {
  // Define animation variants
  const variants = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3 }
    },
    slide: {
      initial: { x: '100%', opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: '-100%', opacity: 0 },
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    up: {
      initial: { y: 20, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -20, opacity: 0 },
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const selectedVariant = variants[type];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transitionKey}
        initial={selectedVariant.initial}
        animate={selectedVariant.animate}
        exit={selectedVariant.exit}
        transition={selectedVariant.transition}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedTransition;
