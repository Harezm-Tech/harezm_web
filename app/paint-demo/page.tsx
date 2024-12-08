'use client';

import { useEffect, useState } from 'react';
import PaintStroke from '@/components/PaintStroke';

export default function PaintDemoPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-zinc-900">
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="flex flex-col items-center gap-6 mb-16">
          <div className="text-5xl md:text-6xl font-bold flex items-center gap-4">
            <PaintStroke variant="cyan">BLOCKCHAIN</PaintStroke>
            <span className="text-[#2DFFF5] font-mono">{"//"}</span>
            <PaintStroke variant="yellow">FUTURE</PaintStroke>
          </div>
        </h1>
        
        <div className="w-full flex flex-col items-center gap-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <PaintStroke variant="cyan">KEY FEATURES</PaintStroke>
          </h2>
          <ul className="flex flex-col items-center gap-8 text-xl md:text-2xl">
            <li>
              <PaintStroke variant="purple">Decentralized</PaintStroke>
            </li>
            <li>
              <PaintStroke variant="yellow">Secure</PaintStroke>
            </li>
            <li>
              <PaintStroke variant="cyan">Revolutionary</PaintStroke>
            </li>
          </ul>
        </div>
        
        <div>
          <PaintStroke variant="cyan">
            <span className="text-2xl md:text-3xl font-bold">
              Join the Revolution
            </span>
          </PaintStroke>
        </div>
      </div>
    </main>
  );
}
