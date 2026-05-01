'use client';

import Image from 'next/image';
import Link from 'next/link';

const AVATARS = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=2',
  'https://i.pravatar.cc/40?img=3',
  'https://i.pravatar.cc/40?img=4',
];

const GoldUnderline = () => (
  <svg
    viewBox="0 0 300 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -bottom-3 -right-2.5 w-[55%]"
    aria-hidden="true"
  >
    <path
      d="M2 12 C60 4, 120 16, 180 8 C240 0, 270 14, 298 7"
      stroke="var(--color-accent-gold)"
      strokeWidth="2.8"
      strokeLinecap="round"
      className="hero-underline-path"
    />
  </svg>
);

// ── Star Rating ──
const Stars = ({ rating = 4.9 }) => {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  return (
    <span className="flex items-center gap-0.5" aria-label={`${rating} stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const isHalf = !filled && half && i === full;
        return (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              {isHalf && (
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="var(--color-accent-gold)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                </linearGradient>
              )}
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={
                filled
                  ? 'var(--color-accent-gold)'
                  : isHalf
                  ? `url(#half-${i})`
                  : 'rgba(255,255,255,0.2)'
              }
            />
          </svg>
        );
      })}
    </span>
  );
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">

      {/* ── Background Orbs ── */}
      <div aria-hidden="true" className="pointer-events-none">
        {/* Amber left orb */}
        <div className="hero-orb hero-orb-amber" />
        {/* Teal right orb */}
        <div className="hero-orb hero-orb-teal" />
        {/* Subtle grid */}
        <div className="hero-grid" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-8">

        <div className="hero-pill animate-fade-up" style={{ animationDelay: '0ms' }}>
          <span className="pill-dot" aria-hidden="true" />
          <span className="font-sans font-semibold tracking-label uppercase text-label text-accent-gold">
            Learn · Build · Excel
          </span>
        </div>

        <h1
          className="font-display font-bold leading-hero text-tx-primary animate-fade-up text-hero tracking-hero"
          style={{
            animationDelay: '100ms',
          }}
        >
          <span>Upgrade Your</span>
          <br />
          <span className="relative inline-block">
            <em className="font-[] font-light italic">Skills&nbsp;</em>
            <span>Today.</span>
            <GoldUnderline />
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="font-body text-tx-secondary max-w-xl animate-fade-up"
          style={{
            fontSize: '17px',
            lineHeight: '1.75',
            animationDelay: '200ms',
          }}
        >
          Join 50,000+ learners mastering Web Dev, Design, Marketing &amp; AI —
          guided by operators from Vercel, Linear, Apple and DeepMind.
        </p>

        {/* CTA Row */}
        <div
          className="flex items-center gap-4 flex-wrap justify-center animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          {/* Primary — gold */}
          <Link href="/courses">
            <button className="hero-btn-primary font-sans font-semibold">
              Explore Courses
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                   strokeLinejoin="round" className="hero-btn-arrow" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>

          {/* Secondary — dark glass */}
          <button className="hero-btn-secondary font-sans font-semibold">
            <span className="hero-play-icon" aria-hidden="true">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
                <path d="M1 1l10 6L1 13V1z" />
              </svg>
            </span>
            Watch Demo
          </button>
        </div>

        {/* Social Proof */}
        <div
          className="flex items-center gap-4 flex-wrap justify-center animate-fade-up"
          style={{ animationDelay: '400ms' }}
        >
          {/* Stacked avatars */}
          <div className="flex items-center -space-x-2.5">
            {AVATARS.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Student ${i + 1}`}
                width={36}
                height={36}
                className="rounded-full border-2 object-cover"
                style={{ borderColor: 'var(--color-bg-base)' }}
              />
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Stars rating={4.9} />
            <span
              className="font-mono font-medium"
              style={{ color: 'var(--color-accent-gold)', fontSize: '15px' }}
            >
              4.9
            </span>
            <span className="font-body text-tx-secondary" style={{ fontSize: '13px' }}>
              · rated by 12,000+ students ·
            </span>
            <span
              className="font-mono font-semibold"
              style={{ color: 'var(--color-accent-gold)', fontSize: '14px' }}
            >
              +8,400
            </span>
            <span className="font-body text-tx-secondary" style={{ fontSize: '13px' }}>
              this month
            </span>
          </div>
        </div>

      </div>

      {/* ── Scoped Styles ── */}
      <style>{`
        /* Background orbs */
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        .hero-orb-amber {
          width: 560px;
          height: 560px;
          top: -25%;
          left: -12%;
          background: radial-gradient(circle, rgba(240,165,0,0.3), transparent 100%);
          animation: floatA 20s ease-in-out infinite alternate;
        }
        .hero-orb-teal {
          width: 500px;
          height: 500px;
          top: 20%;
          right: -15%;
          background: radial-gradient(circle, rgba(45,212,191,0.3), transparent 100%);
          animation: floatB 26s ease-in-out infinite alternate;
        }
        .hero-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* Orb float animations */
        @keyframes floatA {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(50px, 70px) scale(1.1); }
        }
        @keyframes floatB {
          0%   { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-60px, 50px) scale(1.08); }
        }

        /* Label pill */
        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9999px;
          background: rgba(240, 165, 0, 0.08);
          border: 1px solid rgba(240, 165, 0, 0.28);
          backdrop-filter: blur(8px);
        }
        .pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--color-accent-gold);
          box-shadow: 0 0 8px rgba(240,165,0,0.8);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }

        /* Gold underline path draw */
        .hero-underline-path {
          stroke-dasharray: 320;
          stroke-dashoffset: 320;
          animation: drawLine 1s ease 0.5s forwards;
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        /* Primary button */
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 9999px;
          background: var(--color-accent-gold);
          color: #07070F;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
                      filter 0.2s ease;
        }
        .hero-btn-primary:hover {
          transform: scale(1.04);
          filter: brightness(1.08);
        }
        .hero-btn-primary:hover .hero-btn-arrow {
          transform: translateX(4px);
        }
        .hero-btn-arrow {
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }

        /* Secondary button */
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 28px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.05);
          color: var(--color-text-primary);
          border: 1px solid rgba(255,255,255,0.12);
          font-size: 15px;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: background 0.2s ease, border-color 0.2s ease,
                      transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.22);
          transform: scale(1.03);
        }

        /* Play icon circle */
        .hero-play-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
        }

        /* Fade-up entrance animation */
        .animate-fade-up {
          opacity: 0;
          transform: translateY(24px);
          animation: fadeUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Light mode overrides */
        [data-theme="light"] .hero-btn-secondary {
          background: rgba(0,0,0,0.04);
          border-color: rgba(0,0,0,0.12);
          color: var(--color-text-primary);
        }
        [data-theme="light"] .hero-btn-secondary:hover {
          background: rgba(0,0,0,0.08);
        }
        [data-theme="light"] .hero-orb-amber {
          background: radial-gradient(circle, rgba(240,165,0,0.12), transparent 70%);
        }
        [data-theme="light"] .hero-orb-teal {
          background: radial-gradient(circle, rgba(45,212,191,0.09), transparent 70%);
        }
        [data-theme="light"] .hero-grid {
          background-image:
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
    </section>
  );
}