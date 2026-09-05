'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * BlurReveal: Animate any component / container / text block from blurred to crystal clear on scroll
 */
export function BlurReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  yOffset = 16,
  blurAmount = '10px',
  once = true,
  as = 'div',
  ...props
}) {
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={{
        opacity: 0,
        filter: `blur(${blurAmount})`,
        y: yOffset,
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
      }}
      viewport={{ once, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * BlurWords: Staggered word-by-word blur-to-clear reveal for major headings & punchy titles
 */
export function BlurWords({
  text = '',
  className = '',
  wordClassName = '',
  delay = 0,
  staggerDelay = 0.04,
  duration = 0.6,
  blurAmount = '8px',
  once = true,
  as = 'div',
  ...props
}) {
  const Component = motion[as] || motion.div;
  const words = typeof text === 'string' ? text.split(' ') : [];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      className={`inline-flex flex-wrap gap-x-[0.3em] ${className}`}
      {...props}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: {
              opacity: 0,
              filter: `blur(${blurAmount})`,
              y: 12,
            },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
              transition: {
                duration,
                delay: delay + i * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          className={`inline-block ${wordClassName}`}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}

export default BlurReveal;
