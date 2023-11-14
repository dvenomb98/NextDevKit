import React, { FC } from 'react';
import { ToolIcons } from './ToolIcons';

const Features: FC = () => {
  return (
    <section className="flex flex-col items-center gap-10">
      <h3 className="h3">Built with latest technologies</h3>
      <div className="flex items-center gap-10 sm:grid sm:grid-cols-2">
        <a href="https://nextjs.org/">{ToolIcons.nextjs()}</a>
        <a href="https://www.typescriptlang.org/">{ToolIcons.ts()}</a>
        <a href="https://tailwindcss.com/">{ToolIcons.tailwind()}</a>
        <a href="https://ui.shadcn.com/">{ToolIcons.shadcnUI()}</a>
        <a href="https://vercel.com/">{ToolIcons.vercel()}</a>
      </div>
    </section>
  );
};

export default Features;
