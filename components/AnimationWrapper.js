import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const squareVariants = {
  visible: {
    opacity: 1,
    // x: 0,
    y: 1,
    transition: {
      type: 'spring',
      duration: 1,
      bounce: 0.3,
    },
  },
  hidden: { opacity: 0, y: 100 },
};
export const AnimWrapper = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({});
  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start('visible');
    }

    // if (!inView) {
    //   controls.start('hidden');
    // }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className="flex-1 "
    >
      {children}
    </motion.div>
  );
};
