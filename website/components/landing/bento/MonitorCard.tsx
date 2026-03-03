'use client';

import { useEffect, useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { CardWrapper } from './CardWrapper';
import { motion } from 'framer-motion';

export const MonitorCard = () => {
  const [time, setTime] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 55 ? 0 : prev + 2));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const progress = Math.min((time / 60) * 100, 100);

  return (
    <CardWrapper className="min-h-[180px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-blue-600" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Sitting Monitor
          </h3>
          <p className="text-xs text-gray-500">
            Real-time posture tracking
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
            className="h-full bg-blue-600 rounded-full"
          />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Current sitting:{' '}
          <span className="font-semibold">{time} min</span>
        </p>
      </div>
    </CardWrapper>
  );
};