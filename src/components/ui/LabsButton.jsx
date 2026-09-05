'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight01Icon, ArrowRight02Icon } from 'hugeicons-react';

export default function LabsButton({
  children,
  href,
  onClick,
  icon: Icon = ArrowUpRight01Icon,
  iconPosition = 'left', // 'left' (as in LabsStdio screenshot) or 'right'
  variant = 'primary', // 'lime-solid' | 'primary' (dark to lime) | 'white' (dark to white)
  active = false,
  className = '',
  target,
  rel,
  download,
  type = 'button',
}) {
  const isLimeSolid = variant === 'lime-solid' || active;
  const isWhiteVariant = variant === 'white';

  const fillColor = isWhiteVariant ? 'bg-white' : 'bg-[#a6f30d]';
  const hoverBorder = isLimeSolid
    ? 'border-[#a6f30d]'
    : isWhiteVariant
    ? 'hover:border-white'
    : 'hover:border-[#a6f30d]';

  const baseBackground = isLimeSolid
    ? 'bg-[#a6f30d] text-black border-[#a6f30d] shadow-md shadow-[#a6f30d]/20'
    : 'bg-[#1F1E25] text-white border-white/20';

  const content = (
    <>
      {/* 1. Bottom-to-Top Fill Sweep Background (For non-solid variants) */}
      {!isLimeSolid && (
        <span
          className={cn(
            "absolute inset-0 z-0 rounded-full translate-y-[115%] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0 pointer-events-none",
            fillColor
          )}
        />
      )}

      {/* 2. Signature LabsStdio Vertical Rolling Slot-Machine Scroll Animation */}
      <span className="relative z-10 block overflow-hidden h-[1.35rem] leading-[1.35rem] select-none pointer-events-none">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
          
          {/* Layer 1: Default Idle State (Scrolls UP out of view on hover) */}
          <span className="h-[1.35rem] flex items-center gap-2.5 whitespace-nowrap font-questrial font-bold text-xs uppercase tracking-wider">
            {iconPosition === 'left' && Icon && (
              <Icon
                className={cn(
                  "w-3.5 h-3.5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                  isLimeSolid ? "text-black" : "text-white group-hover:!text-black"
                )}
              />
            )}
            <span
              className={cn(
                "transition-colors duration-300",
                isLimeSolid ? "text-black" : "text-white group-hover:!text-black"
              )}
            >
              {children}
            </span>
            {iconPosition === 'right' && Icon && (
              <Icon
                className={cn(
                  "w-3.5 h-3.5 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                  isLimeSolid ? "text-black" : "text-white group-hover:!text-black"
                )}
              />
            )}
          </span>

          {/* Layer 2: Hover State (Scrolls UP into view from below) */}
          <span className="h-[1.35rem] flex items-center gap-2.5 whitespace-nowrap font-questrial font-bold text-xs uppercase tracking-wider text-black">
            {iconPosition === 'left' && Icon && (
              <Icon className="w-3.5 h-3.5 shrink-0 text-black" />
            )}
            <span className="text-black">
              {children}
            </span>
            {iconPosition === 'right' && Icon && (
              <Icon className="w-3.5 h-3.5 shrink-0 text-black" />
            )}
          </span>

        </span>
      </span>
    </>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-6 py-3 transition-all duration-300 shadow-md active:scale-[0.98] cursor-pointer",
    baseBackground,
    hoverBorder,
    className
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        download={download}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClasses}
    >
      {content}
    </button>
  );
}


