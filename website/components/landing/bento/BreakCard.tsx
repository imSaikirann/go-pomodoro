'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';
import { CardWrapper } from './CardWrapper';

export const BreakCard = () => {
  const tips = [
    'Stretch your shoulders',
    'Drink some water',
    'Look away for 20 seconds',
    'Take a short walk',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [tips.length]);

  return (
    <CardWrapper className="lg:col-span-2 min-h-[180px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center">
          <Bell className="w-5 h-5 text-blue-600" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Smart Breaks
          </h3>
          <p className="text-xs text-gray-500">
            Context-aware recovery tips
          </p>
        </div>
      </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl bg-blue-50 dark:bg-blue-950/30 p-5 text-center"
      >
        <p className="font-semibold text-blue-700 dark:text-blue-300">
          {tips[index]}
        </p>
      </motion.div>
    </CardWrapper>
  );
};