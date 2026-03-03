'use client';

import { TerminalSquare } from 'lucide-react';
import { CardWrapper } from './CardWrapper';

export const CliCard = () => {
  return (
    <CardWrapper className="lg:col-span-2 min-h-[200px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-xl bg-gray-900 flex items-center justify-center">
          <TerminalSquare className="w-5 h-5 text-white" />
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            go-pomodoro CLI
          </h3>
          <p className="text-xs text-gray-500">
            Built for terminal-first developers
          </p>
        </div>
      </div>

      <div className="rounded-xl bg-black text-green-400 font-mono text-sm p-4 space-y-1">
        <p>$ npm install -g go-pomodoro</p>
        <p>$ pomodoro deep</p>
        <p className="text-green-500">✓ Deep work session started</p>
        <p className="text-gray-500">Focus lock enabled...</p>
      </div>
    </CardWrapper>
  );
};