import React from 'react';

interface TenRupeeCoinProps {
  className?: string;
  size?: number;
}

export const TenRupeeCoin: React.FC<TenRupeeCoinProps> = ({ 
  className = '',
  size = 110
}) => {
  return (
    <div 
      className={`relative rounded-full select-none flex items-center justify-center filter drop-shadow-[0_6px_0_#000000] ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        className="w-full h-full block"
      >
        <defs>
          {/* Outer Brass/Gold Metallic Gradients */}
          <radialGradient id="brassOuter" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#fff2ab" />
            <stop offset="25%" stopColor="#e5ba55" />
            <stop offset="60%" stopColor="#c39130" />
            <stop offset="85%" stopColor="#9e6e1a" />
            <stop offset="100%" stopColor="#7a5210" />
          </radialGradient>

          <linearGradient id="brassSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="30%" stopColor="#d8a946" />
            <stop offset="50%" stopColor="#fced9f" />
            <stop offset="70%" stopColor="#b68425" />
            <stop offset="100%" stopColor="#63420b" />
          </linearGradient>

          {/* Inner Silver Core Gradients */}
          <radialGradient id="silverInner" cx="38%" cy="36%" r="62%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#f3f4f6" />
            <stop offset="65%" stopColor="#d1d5db" />
            <stop offset="90%" stopColor="#9ca3af" />
            <stop offset="100%" stopColor="#6b7280" />
          </radialGradient>

          {/* Notch Shadow Gradient */}
          <linearGradient id="notchShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#573909" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ab8335" stopOpacity="0.3" />
          </linearGradient>

          {/* Emboss Drop Filter for ₹ and 10 */}
          <filter id="embossRelief" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="1" dy="1.5" stdDeviation="0.8" floodColor="#382506" floodOpacity="0.75" />
            <feDropShadow dx="-0.8" dy="-0.8" stdDeviation="0.4" floodColor="#ffffff" floodOpacity="0.85" />
          </filter>

          <filter id="silverRelief" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="1" dy="1.2" stdDeviation="0.6" floodColor="#374151" floodOpacity="0.65" />
            <feDropShadow dx="-0.6" dy="-0.6" stdDeviation="0.4" floodColor="#ffffff" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* Outer Heavy Coin Rim Border */}
        <circle cx="100" cy="100" r="98" fill="#5c3d0b" />
        <circle cx="100" cy="100" r="96" fill="url(#brassSheen)" />
        <circle cx="100" cy="100" r="94" fill="url(#brassOuter)" stroke="#4d3208" strokeWidth="1" />

        {/* Outer Rim Lathe Rings */}
        <circle cx="100" cy="100" r="91" fill="none" stroke="#ffe793" strokeWidth="0.8" opacity="0.6" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="#785012" strokeWidth="0.8" opacity="0.4" />

        {/* 10 Radiating Rays on Top Arc (Classic 10 Rupee Coin feature) */}
        {/* Ray angles around top half: -67.5° to +67.5° (10 rays total) */}
        {[
          -67.5, -52.5, -37.5, -22.5, -7.5,
          7.5, 22.5, 37.5, 52.5, 67.5
        ].map((angle, idx) => (
          <g key={idx} transform={`rotate(${angle} 100 100)`}>
            {/* Notch slot */}
            <path
              d="M 97.2 13 C 97.2 10.5, 102.8 10.5, 102.8 13 L 102.2 38 C 102.2 40, 97.8 40, 97.8 38 Z"
              fill="url(#notchShadow)"
              stroke="#523507"
              strokeWidth="0.6"
            />
            {/* Bright highlight tip */}
            <line x1="97.5" y1="38" x2="102.5" y2="38" stroke="#ffeb9c" strokeWidth="0.8" opacity="0.75" />
          </g>
        ))}

        {/* Outer / Inner Circular Seam & Groove */}
        <circle cx="100" cy="100" r="62" fill="#523507" opacity="0.7" />
        <circle cx="100" cy="100" r="60.5" fill="#e8ba55" opacity="0.9" />

        {/* Inner Silver/Cupronickel Disc */}
        <circle cx="100" cy="100" r="59" fill="url(#silverInner)" stroke="#4b5563" strokeWidth="1" />
        <circle cx="100" cy="100" r="57.5" fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.75" />
        <circle cx="100" cy="100" r="56" fill="none" stroke="#9ca3af" strokeWidth="0.6" opacity="0.4" />

        {/* Central Indian Rupee Symbol (₹) in upper half of silver disc */}
        <g filter="url(#silverRelief)" transform="translate(100, 72)">
          {/* Main ₹ glyph */}
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="system-ui, -apple-system, 'Aeonik', sans-serif"
            fontWeight="900"
            fontSize="38"
            fill="#4b5563"
            letterSpacing="-1"
          >
            ₹
          </text>
          {/* Embossed inner highlight for 3D metallic feel */}
          <text
            x="-0.5"
            y="-0.8"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="system-ui, -apple-system, 'Aeonik', sans-serif"
            fontWeight="900"
            fontSize="38"
            fill="#ffffff"
            fillOpacity="0.4"
            letterSpacing="-1"
          >
            ₹
          </text>
        </g>

        {/* Large Numeral "10" overlapping lower silver disc and extending into outer brass ring */}
        <g filter="url(#embossRelief)" transform="translate(100, 134)">
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="system-ui, -apple-system, 'Aeonik', sans-serif"
            fontWeight="900"
            fontSize="64"
            fill="#374151"
            letterSpacing="-2"
          >
            10
          </text>
          {/* Metallic Top Sheen Highlight */}
          <text
            x="-0.6"
            y="-1"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="system-ui, -apple-system, 'Aeonik', sans-serif"
            fontWeight="900"
            fontSize="64"
            fill="#ffffff"
            fillOpacity="0.45"
            letterSpacing="-2"
          >
            10
          </text>
        </g>

        {/* Outer Circular Highlight Arc (top shine) */}
        <path
          d="M 35 35 A 92 92 0 0 1 165 35"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* Coin Edge Outer Dark Rim */}
        <circle cx="100" cy="100" r="99" fill="none" stroke="#000000" strokeWidth="2" />
      </svg>
    </div>
  );
};
