'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface BrushStrokeProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const BrushStroke: React.FC<BrushStrokeProps> = ({
  color = '#2DFFF5',
  width = 300,
  height = 30,
  className = '',
}) => {
  // Generate a unique ID for the filter
  const filterId = React.useId();
  
  // Generate a stable seed based on the component's props
  const seed = React.useMemo(() => {
    const str = `${color}-${width}-${height}`;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash % 100);
  }, [color, width, height]);
  
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        overflow: 'visible',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <defs>
        <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.08"
            numOctaves="2"
            result="noise"
            seed={seed}
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="4"
          />
        </filter>
      </defs>
      
      {/* Main highlight stroke */}
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        d={`M10,${height/2} Q${width/4},${height/4} ${width/2},${height/2} T${width-10},${height/2}`}
        stroke={color}
        strokeWidth={height}
        strokeLinecap="round"
        filter={`url(#${filterId})`}
        fill="none"
        style={{ mixBlendMode: 'multiply' }}
      />
    </svg>
  );
};

export default BrushStroke;
