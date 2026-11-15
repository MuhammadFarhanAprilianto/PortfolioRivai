'use client';

import React, { useRef, useState } from 'react';
import {
  PaintBoardIcon,
  Video01Icon,
  ScissorIcon,
  ColorsIcon,
  CheckmarkBadge01Icon,
  Target02Icon,
  Layers01Icon,
  Compass01Icon,
  FireIcon,
  SecurityCheckIcon,
  NotebookIcon,
  FlashIcon,
  Store01Icon,
  Megaphone01Icon,
  Camera01Icon,
  File01Icon,
  ToolsIcon,
  CpuIcon,
} from 'hugeicons-react';

// Specialized icon mapping for each of the competencies
const COMPETENCY_ICONS = {
  'Adobe Illustrator': { icon: PaintBoardIcon, color: '#FF9A00', glow: 'rgba(255, 154, 0, 0.4)' },
  'Adobe Premiere Pro': { icon: Video01Icon, color: '#9999FF', glow: 'rgba(153, 153, 255, 0.4)' },
  'Capcut Pro': { icon: ScissorIcon, color: '#00F2FE', glow: 'rgba(0, 242, 254, 0.4)' },
  'Canva': { icon: ColorsIcon, color: '#00C4CC', glow: 'rgba(0, 196, 204, 0.4)' },
  'Quality Control (QC)': { icon: CheckmarkBadge01Icon, color: '#a6f30d', glow: 'rgba(166, 243, 13, 0.4)' },
  'Go/No-Go Gauge': { icon: Target02Icon, color: '#a6f30d', glow: 'rgba(166, 243, 13, 0.4)' },
  'Feeler Gauge': { icon: Layers01Icon, color: '#a6f30d', glow: 'rgba(166, 243, 13, 0.4)' },
  'Caliper / Jangka Sorong': { icon: Compass01Icon, color: '#a6f30d', glow: 'rgba(166, 243, 13, 0.4)' },
  'Welder 3G SMAW (AWS)': { icon: FireIcon, color: '#FF5722', glow: 'rgba(255, 87, 34, 0.4)' },
  'Welder 3G GMAW (AWS)': { icon: FireIcon, color: '#FB923C', glow: 'rgba(251, 146, 60, 0.4)' },
  'Welder 3G GMAW': { icon: FireIcon, color: '#FB923C', glow: 'rgba(251, 146, 60, 0.4)' },
  'Welder GMAW': { icon: FireIcon, color: '#FB923C', glow: 'rgba(251, 146, 60, 0.4)' },
  'Welder Robotics': { icon: CpuIcon, color: '#06B6D4', glow: 'rgba(6, 182, 212, 0.4)' },
  'K3 & 5R/5S Safety': { icon: SecurityCheckIcon, color: '#10B981', glow: 'rgba(16, 185, 129, 0.4)' },
  'Drawing / Gambar Teknik': { icon: NotebookIcon, color: '#38BDF8', glow: 'rgba(56, 189, 248, 0.4)' },
  'Oxy-Fuel & Blender Cut': { icon: FlashIcon, color: '#F59E0B', glow: 'rgba(245, 158, 11, 0.4)' },
  'Store Branch Leadership': { icon: Store01Icon, color: '#EAB308', glow: 'rgba(234, 179, 8, 0.4)' },
  'Social Media Strategy': { icon: Megaphone01Icon, color: '#EC4899', glow: 'rgba(236, 72, 153, 0.4)' },
  'Photography & Video': { icon: Camera01Icon, color: '#A855F7', glow: 'rgba(168, 85, 247, 0.4)' },
  'Microsoft Office Suite': { icon: File01Icon, color: '#3B82F6', glow: 'rgba(59, 130, 246, 0.4)' },
};

export default function ThreeDCompetencyIcon({ name }) {
  const [isHovered, setIsHovered] = useState(false);

  const conf = COMPETENCY_ICONS[name] || {
    icon: ToolsIcon,
    color: '#a6f30d',
    glow: 'rgba(166, 243, 13, 0.4)',
  };

  const IconComp = conf.icon;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative shrink-0 flex items-center justify-center select-none"
    >
      {/* 3D Metallic Beveled Capsule Badge (Zero Zoom / Static Scale) */}
      <div
        className="relative w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(30,29,37,0.9) 60%, rgba(15,15,20,0.95) 100%)',
          boxShadow: isHovered
            ? `0 4px 12px -2px ${conf.glow}, inset 0 1px 1px rgba(255,255,255,0.3)`
            : '0 2px 6px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.15)',
          border: isHovered
            ? `1px solid ${conf.color}`
            : '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        {/* Ambient Top Highlight Rim */}
        <div className="absolute top-0 inset-x-1 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

        {/* Center Icon (Static Scale, Pure Color Transition) */}
        <div
          className="flex items-center justify-center transition-colors duration-300"
          style={{
            color: isHovered ? conf.color : '#ffffff',
            filter: isHovered ? `drop-shadow(0 0 5px ${conf.glow})` : 'none',
          }}
        >
          <IconComp className="w-4 h-4 transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
}
