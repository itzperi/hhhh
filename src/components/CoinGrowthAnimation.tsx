import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Single500Note } from './Single500Note';
import { TenRupeeCoin } from './TenRupeeCoin';

export const CoinGrowthAnimation: React.FC<{ onJoinClick: () => void }> = ({ onJoinClick }) => {
  // Progression across 5 distinct stages (~4.4s glide):
  // 1. Small ₹1 coin (left corner)
  // 2. Big ₹1 coin (growing)
  // 3. ₹10 coin (Indian bimetallic coin with ₹10 and radiating rays)
  // 4. Single ₹500 note (Mahatma Gandhi ₹500 note)
  // 5. Bunch of cash (stack of ₹500 notes bound with green rubber bands)
  // Then 2.0s celebratory cash animation with floating notes and glints
  const [phase, setPhase] = useState<'glide' | 'cash'>('glide');
  const [loopKey, setLoopKey] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (phase === 'glide') {
      timer = setTimeout(() => {
        setPhase('cash');
      }, 4400); // 4.4s smooth glide through all 5 stages
    } else {
      timer = setTimeout(() => {
        setLoopKey((k) => k + 1);
        setPhase('glide');
      }, 2000); // 2.0s cash celebration
    }
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="w-full bg-[#ffffff] border border-[#000000] rounded-[28px] md:rounded-[36px] p-5 md:p-8 select-none shadow-[0_4px_0_#000000] hover:shadow-[0_8px_0_#000000] transition-shadow duration-300">
      
      {/* Clean minimal frame header - purely decorative sticker dots, zero clutter text */}
      <div className="flex items-center justify-between pb-3.5 border-b border-[#000000] mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-[#fb4903] border border-[#000000] shadow-xs" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#ffd731] border border-[#000000] shadow-xs" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#55db9c] border border-[#000000] shadow-xs" />
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#55db9c] animate-ping" />
          <span className="w-2 h-2 rounded-full bg-[#4da2ff]" />
          <span className="w-2 h-2 rounded-full bg-[#e9ccff]" />
        </div>
      </div>

      {/* Main Track Viewport: ZERO TEXT INSIDE, PURE VISUAL ANIMATION */}
      <div className="relative rounded-[24px] border border-[#000000] bg-[#dceeff] overflow-hidden h-[300px] sm:h-[360px] flex flex-col justify-between p-4 sm:p-6">
        
        {/* Curved Track SVG in background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 1000 360" fill="none" className="w-full h-full object-fill" preserveAspectRatio="none">
            {/* Lower hill curve */}
            <path
              d="M0 120 Q 320 140, 580 210 T 1000 270 L 1000 360 L 0 360 Z"
              fill="#c0deff"
              stroke="#000000"
              strokeWidth="2"
            />
            {/* Deep foundation curve */}
            <path
              d="M0 190 Q 320 210, 580 270 T 1000 320 L 1000 360 L 0 360 Z"
              fill="#9ecaff"
              opacity="0.65"
            />
            {/* Dashed guide roller path */}
            <path
              d="M30 110 Q 320 140, 580 205 T 900 265"
              stroke="#000000"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* PURE ANIMATION STAGE (NO LABELS, NO TEXT) */}
        <div className="relative w-full h-full z-20 flex items-center justify-center">
          
          {/* PHASE 1: DYNAMIC 4.4s GLIDE & MORPH (Small ₹1 Coin -> Big ₹1 Coin -> ₹10 Coin -> Single ₹500 Note -> Bunch of Cash) */}
          {phase === 'glide' && (
            <motion.div
              key={`glide-${loopKey}`}
              initial={{
                left: '6%',
                top: '18%',
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                left: ['6%', '24%', '45%', '67%', '84%'],
                top: ['18%', '23%', '35%', '48%', '62%'],
              }}
              transition={{
                duration: 4.4,
                ease: 'easeInOut',
                times: [0, 0.22, 0.44, 0.70, 1],
              }}
              className="absolute flex flex-col items-center justify-center pointer-events-none"
            >
              {/* Central Morphing Visual */}
              <div className="relative flex items-center justify-center">
                
                {/* 1. Small ₹1 Coin (0.0s to 1.0s) - Rolls upside down (180deg) and completes roll (360deg) */}
                <motion.div
                  initial={{ opacity: 1, scale: 0.7, rotate: 0 }}
                  animate={{
                    opacity: [1, 1, 0, 0, 0],
                    scale: [0.7, 0.95, 1.15, 1.15, 1.15],
                    rotate: [0, 180, 360, 360, 360],
                  }}
                  transition={{ duration: 4.4, times: [0, 0.17, 0.23, 0.25, 1], ease: 'linear' }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#000000] overflow-hidden bg-[#ffffff] shadow-md flex items-center justify-center"
                >
                  <img
                    src="/assets/aistudio/image_f9435ffd.png"
                    alt="Small Coin"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* 2. Expands into Big ₹1 Coin (0.9s to 1.9s) - Keeps rolling upside down (540deg) to 720deg */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.75, rotate: 360 }}
                  animate={{
                    opacity: [0, 0, 1, 1, 0, 0],
                    scale: [0.75, 0.85, 1.35, 1.55, 1.6, 1.6],
                    rotate: [360, 360, 540, 720, 720, 720],
                  }}
                  transition={{ duration: 4.4, times: [0, 0.18, 0.25, 0.38, 0.45, 1], ease: 'linear' }}
                  className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border-3 border-[#000000] overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#ffd731] to-[#b38600] shadow-[0_6px_0_#000000,inset_0_4px_8px_rgba(255,255,255,0.9)] flex items-center justify-center p-1"
                >
                  <img
                    src="/assets/aistudio/image_f9435ffd.png"
                    alt="Big Coin"
                    className="w-full h-full object-cover rounded-full filter contrast-125 brightness-110"
                  />
                </motion.div>

                {/* 3. Morphs into ₹10 Coin (1.8s to 2.9s) - Rolls upside down (900deg) to 1080deg */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, rotate: 720 }}
                  animate={{
                    opacity: [0, 0, 1, 1, 0, 0],
                    scale: [0.7, 0.8, 1.25, 1.45, 1.5, 1.5],
                    rotate: [720, 720, 900, 1080, 1080, 1080],
                  }}
                  transition={{ duration: 4.4, times: [0, 0.38, 0.46, 0.60, 0.68, 1], ease: 'linear' }}
                  className="absolute flex items-center justify-center"
                >
                  <TenRupeeCoin size={105} className="w-24 h-24 sm:w-28 sm:h-28" />
                </motion.div>

                {/* 4. Morphs into Single ₹500 Note (2.8s to 3.7s) - Unfolds into crisp banknote */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.65, rotate: -8 }}
                  animate={{
                    opacity: [0, 0, 0, 1, 1, 0],
                    scale: [0.65, 0.65, 0.78, 1.15, 1.25, 1.3],
                    rotate: [-8, -8, -4, 0, 2, 0],
                  }}
                  transition={{ duration: 4.4, times: [0, 0.60, 0.67, 0.76, 0.82, 0.88], ease: 'easeInOut' }}
                  className="absolute"
                >
                  <Single500Note imgSrc="/assets/aistudio/image_6064e1b2.png" className="w-52 sm:w-64" />
                </motion.div>

                {/* 5. Multiplies into Bunch of Cash (Image 3: Stack with green rubber bands) (3.5s to 4.4s) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
                  animate={{
                    opacity: [0, 0, 0, 0, 1],
                    scale: [0.6, 0.6, 0.6, 0.85, 1.2],
                    rotate: [0, 0, 0, -2, 0],
                  }}
                  transition={{ duration: 4.4, times: [0, 0.78, 0.83, 0.89, 1], ease: 'easeInOut' }}
                  className="absolute w-44 sm:w-56 rounded-[14px] border-3 border-[#000000] overflow-hidden bg-[#ffffff] shadow-[0_8px_0_#000000]"
                >
                  <img
                    src="/assets/aistudio/image_3de8c78d.png"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_a812184f.png';
                    }}
                    alt="Bunch of Cash"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

              </div>

              {/* Dynamic Ground Shadow */}
              <motion.div
                animate={{
                  width: ['45px', '75px', '95px', '135px', '180px'],
                  opacity: [0.35, 0.42, 0.48, 0.58, 0.68],
                }}
                transition={{ duration: 4.4, ease: 'easeInOut' }}
                className="h-3 bg-black/35 rounded-full filter blur-[1px] mt-1.5"
              />
            </motion.div>
          )}

          {/* PHASE 2: ANIMATED LUMP OF NOTES (Stays 2.0s with floating bills & glint shimmer) */}
          {phase === 'cash' && (
            <motion.div
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.4 }}
              className="absolute right-4 sm:right-12 bottom-3 z-30 flex flex-col items-center"
            >
              <div className="relative">
                
                {/* Floating currency notes drifting upwards from the lump */}
                <motion.div
                  initial={{ y: 0, opacity: 0, scale: 0.7, x: 0 }}
                  animate={{ y: [-10, -32, -50], opacity: [0, 1, 0], scale: [0.7, 1, 0.9], x: [-15, -25, -35] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' }}
                  className="absolute -top-4 left-6 w-16 h-8 bg-[#d8f8c7] border border-[#000000] rounded-[6px] shadow-sm pointer-events-none z-30 flex items-center justify-center font-bold text-[10px] text-[#000000]"
                >
                  ₹500
                </motion.div>

                <motion.div
                  initial={{ y: 0, opacity: 0, scale: 0.7, x: 0 }}
                  animate={{ y: [-5, -28, -45], opacity: [0, 1, 0], scale: [0.7, 1, 0.9], x: [15, 28, 40] }}
                  transition={{ repeat: Infinity, duration: 1.9, ease: 'easeOut', delay: 0.3 }}
                  className="absolute -top-3 right-6 w-16 h-8 bg-[#c8f0b5] border border-[#000000] rounded-[6px] shadow-sm pointer-events-none z-30 flex items-center justify-center font-bold text-[10px] text-[#000000]"
                >
                  ₹500
                </motion.div>

                {/* Animated Layered Banknote Background Silhouette 1 (Gentle floating tilt) */}
                <motion.div
                  animate={{ y: [-4, 4, -4], rotate: [2, 5, 2] }}
                  transition={{ repeat: Infinity, duration: 2.0, ease: 'easeInOut' }}
                  className="absolute -top-3.5 -right-3 w-52 sm:w-64 h-32 bg-[#c2ecae] border-2 border-[#000000] rounded-[16px] shadow-sm pointer-events-none opacity-85"
                />

                {/* Animated Layered Banknote Background Silhouette 2 (Opposite tilt) */}
                <motion.div
                  animate={{ y: [3, -3, 3], rotate: [-2, -5, -2] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  className="absolute -top-2 -left-2.5 w-52 sm:w-64 h-32 bg-[#d6f5c5] border-2 border-[#000000] rounded-[16px] shadow-sm pointer-events-none opacity-90"
                />

                {/* The Lump of Notes Main Image with Dynamic Glint Sweep & Hover Pulse */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                  className="relative w-52 sm:w-64 rounded-[20px] border-3 border-[#000000] overflow-hidden bg-[#ffffff] shadow-[0_12px_0_#000000] p-1.5 bg-[#f4ffea]"
                >
                  {/* Diagonal Animated Glint/Sheen sweep across the cash notes */}
                  <motion.div
                    initial={{ x: '-120%' }}
                    animate={{ x: '220%' }}
                    transition={{ repeat: Infinity, duration: 1.3, ease: 'easeInOut', repeatDelay: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-22deg] z-20 pointer-events-none"
                  />

                  <img
                    src="/assets/aistudio/image_3de8c78d.png"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/aistudio/image_a812184f.png';
                    }}
                    alt="Lump of Notes"
                    className="w-full h-auto rounded-[14px] object-cover relative z-10"
                  />
                </motion.div>

                {/* Sparkle Icons around the lump */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 180] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                  className="absolute -top-5 -right-4 bg-[#ffd731] border border-[#000000] rounded-full p-1.5 shadow-sm z-40"
                >
                  <Sparkles className="w-4 h-4 text-[#000000]" />
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.25, 1], rotate: [180, 90, 0] }}
                  transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut', delay: 0.3 }}
                  className="absolute -bottom-2 -left-4 bg-[#55db9c] border border-[#000000] rounded-full p-1.5 shadow-sm z-40"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#000000]" />
                </motion.div>

              </div>
            </motion.div>
          )}

        </div>

      </div>

      {/* Action strip below the animation */}
      <div className="flex items-center justify-end mt-4 pt-3.5 border-t border-[#000000]/15">
        <button
          onClick={onJoinClick}
          className="rounded-[1600px] border border-[#000000] bg-[#000000] hover:bg-[#333333] active:scale-[0.98] text-[#ffffff] font-aeonik font-bold text-xs tracking-[0.032em] uppercase py-2.5 px-6 transition-all flex items-center gap-2 cursor-pointer shrink-0 whitespace-nowrap shadow-[0_3px_0_#000000] hover:shadow-[0_5px_0_#4da2ff] hover:-translate-y-0.5 ml-auto"
        >
          START SAVING TODAY
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
