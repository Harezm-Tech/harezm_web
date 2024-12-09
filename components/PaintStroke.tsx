'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/PaintStroke.module.css';
import BrushStroke from './BrushStroke';

type ColorVariant = 'yellow' | 'purple' | 'dark' | 'light' | 'cyan';

interface PaintStrokeProps {
  children: React.ReactNode;
  variant?: ColorVariant;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const variantColors = {
  yellow: 'hsl(47, 67%, 82%)',  // secondary
  purple: 'hsl(276, 67%, 83%)',  // accent
  dark: '#1A1A1A',
  light: '#FFFFFF',
  cyan: 'hsl(169, 52%, 77%)'  // primary
};

const PaintStroke: React.FC<PaintStrokeProps> = ({
  children,
  variant = 'yellow',
  color,
  className = '',
  style = {},
}) => {
  const strokeColor = color || variantColors[variant];
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  const contentRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const updateDimensions = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width + 40, // Add padding
          height: rect.height + 10 // Add padding
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [children]);
  
  return (
    <div className={`${styles.paintContainer} ${className}`} style={style}>
      <motion.div 
        className={styles.brushStrokeContainer}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <BrushStroke 
          color={strokeColor} 
          width={Math.max(dimensions.width, 60)} 
          height={Math.max(dimensions.height, 20)}
        />
      </motion.div>
      <motion.span
        ref={contentRef}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`${styles.content} ${styles[variant]}`}
      >
        {children}
      </motion.span>
    </div>
  );
};

export default PaintStroke;
