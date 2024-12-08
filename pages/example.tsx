'use client';

import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import PaintStroke from '../components/PaintStroke';

const ExamplePage: NextPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container" style={{ 
      padding: '2rem',
      background: '#000000',
      color: '#FFFFFF',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
    }}>
      {/* Main heading with cyan highlight */}
      <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>
        <PaintStroke variant="cyan">Blockchain</PaintStroke>
        <span style={{ color: '#2DFFF5' }}>{" // "}</span>
        <PaintStroke>Future</PaintStroke>
      </h1>
      
      {/* Important feature section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          <PaintStroke variant="cyan">Key Features</PaintStroke>
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '1rem' }}>
            <PaintStroke variant="purple">Decentralized</PaintStroke>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <PaintStroke variant="yellow">Secure</PaintStroke>
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <PaintStroke variant="cyan">Revolutionary</PaintStroke>
          </li>
        </ul>
      </div>
      
      {/* Call to action section */}
      <div style={{ marginTop: '2rem' }}>
        <PaintStroke variant="cyan" style={{ fontSize: '1.5rem' }}>
          Join the Revolution
        </PaintStroke>
      </div>
    </div>
  );
};

export default ExamplePage;
