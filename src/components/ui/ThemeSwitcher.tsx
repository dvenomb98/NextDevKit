'use client';

import { useTheme } from 'next-themes';
import React, { FC } from 'react';
import { SunIcon, MoonIcon, ComputerIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const themes = [
  {
    value: 'light',
    icon: SunIcon,
  },
  {
    value: 'dark',
    icon: MoonIcon,
  },
  {
    value: 'system',
    icon: ComputerIcon,
  },
];

const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex gap-1">
      {themes.map((t) => {
        const ThemeIcon = t.icon;

        return (
          <button
            key={t.value}
            aria-roledescription="Theme switcher"
            onClick={() => setTheme(t.value)}
            className="p-1"
          >
            <ThemeIcon className={cn('w-5 h-5', theme === t.value ? 'text-color' : 'text-gray')} />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
