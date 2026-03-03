'use client';

import { Brain } from 'lucide-react';
import { CardWrapper } from './CardWrapper';

export const CoachCard = () => {
  return (
    <CardWrapper className="min-h-[180px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center">
          <Brain className="w-5 h-5 text-blue-600" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            AI Coach
          </h3>
          <p className="text-xs text-gray-500">
            Behavioral intelligence
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        Personalized focus recommendations based on your deep work patterns.
      </p>
    </CardWrapper>
  );
};