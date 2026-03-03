'use client';

import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const CardWrapper = ({ children, className = '' }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className={`
        group
        rounded-2xl p-6
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        shadow-sm hover:shadow-2xl
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};