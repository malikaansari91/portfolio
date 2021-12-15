import cn from 'classnames';

import { motion } from 'framer-motion';

export default function BlogPostCard({ title, list = [], gradient, styles }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      style={styles}
      className={cn('rounded-xl w-full  bg-gradient-to-r p-1', gradient)}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-2 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="flex items-start flex-col text-gray-800 dark:text-gray-200 capsize">
          {list.map((item, i) => {
            return (
              <div className="flex items-center" key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-2">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
