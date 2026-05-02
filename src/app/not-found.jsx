'use client';

import Link from 'next/link';

const AstronautIllustration = () => (
    <svg
        viewBox="0 0 400 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-sm mx-auto"
        aria-hidden="true"
    >
        {/* CSS vars scoped inside SVG — updates on theme toggle */}
        <style>{`
            .ast-svg {
                --suit:      var(--color-bg-elevated);
                --suit-deep: var(--color-bg-card);
                --rim:       rgba(255,255,255,0.1);
                --gold:      var(--color-accent-gold);
                --teal:      var(--color-accent-teal);
                --red:       var(--color-accent-red);
            }
            [data-theme="light"] .ast-svg {
                --suit:      #D4CFC8;
                --suit-deep: #BEB9B1;
                --rim:       rgba(0,0,0,0.12);
            }
        `}</style>

        <g className="ast-svg">
            {/* Shadow beneath astronaut */}
            <ellipse cx="200" cy="340" rx="100" ry="18"
                fill="var(--color-accent-gold)" fillOpacity="0.1" />

            {/* Tether line */}
            <path d="M200 160 C220 180, 260 170, 280 140"
                stroke="var(--color-accent-gold)" strokeOpacity="0.4" strokeWidth="1.5"
                strokeDasharray="4 4" strokeLinecap="round" />

            {/* Helmet outer shell */}
            <circle cx="200" cy="130" r="68"
                fill="var(--suit)" stroke="var(--rim)" strokeWidth="2" />

            {/* Helmet visor */}
            <ellipse cx="200" cy="128" rx="46" ry="40"
                fill="var(--color-accent-teal)" fillOpacity="0.08"
                stroke="var(--color-accent-teal)" strokeOpacity="0.4" strokeWidth="1.5" />

            {/* Visor reflections */}
            <path d="M176 110 Q185 104, 198 108"
                stroke="white" strokeOpacity="0.35" strokeWidth="2.5"
                strokeLinecap="round" />
            <path d="M174 120 Q178 116, 185 118"
                stroke="white" strokeOpacity="0.2" strokeWidth="1.5"
                strokeLinecap="round" />

            {/* Eyes */}
            <circle cx="194" cy="128" r="4"
                fill="var(--color-accent-gold)" fillOpacity="0.85" />
            <circle cx="208" cy="128" r="4"
                fill="var(--color-accent-gold)" fillOpacity="0.85" />

            {/* Smile */}
            <path d="M192 140 Q200 147, 210 140"
                stroke="var(--color-accent-gold)" strokeOpacity="0.85" strokeWidth="2"
                strokeLinecap="round" fill="none" />

            {/* Collar ring */}
            <ellipse cx="200" cy="196" rx="52" ry="14"
                fill="var(--suit)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* Body suit */}
            <rect x="152" y="196" width="96" height="100" rx="28"
                fill="var(--suit)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* Chest panel background */}
            <rect x="172" y="214" width="56" height="36" rx="8"
                fill="var(--suit-deep)"
                stroke="var(--color-accent-gold)" strokeOpacity="0.25" strokeWidth="1" />

            {/* Chest panel indicator lights */}
            <circle cx="184" cy="228" r="4" fill="var(--color-accent-gold)" />
            <circle cx="196" cy="228" r="4" fill="var(--color-accent-teal)" />
            <circle cx="208" cy="228" r="4" fill="var(--color-accent-red)" />

            {/* Progress bar track */}
            <rect x="178" y="238" width="44" height="4" rx="2"
                fill="var(--rim)" />
            {/* Progress bar fill */}
            <rect x="178" y="238" width="28" height="4" rx="2"
                fill="var(--color-accent-gold)" fillOpacity="0.6" />

            {/* Left arm — outline trick */}
            <path d="M152 210 C128 218, 118 240, 124 260"
                stroke="var(--rim)" strokeWidth="28"
                strokeLinecap="round" fill="none" />
            <path d="M152 210 C128 218, 118 240, 124 260"
                stroke="var(--suit)" strokeWidth="26"
                strokeLinecap="round" fill="none" />

            {/* Left glove */}
            <circle cx="124" cy="264" r="14"
                fill="var(--suit-deep)"
                stroke="var(--color-accent-gold)" strokeOpacity="0.35" strokeWidth="1.5" />

            {/* Right arm */}
            <path d="M248 210 C272 218, 282 240, 276 260"
                stroke="var(--rim)" strokeWidth="28"
                strokeLinecap="round" fill="none" />
            <path d="M248 210 C272 218, 282 240, 276 260"
                stroke="var(--suit)" strokeWidth="26"
                strokeLinecap="round" fill="none" />

            {/* Right glove */}
            <circle cx="276" cy="264" r="14"
                fill="var(--suit-deep)"
                stroke="var(--color-accent-gold)" strokeOpacity="0.35" strokeWidth="1.5" />

            {/* Book cover */}
            <rect x="280" y="252" width="32" height="24" rx="3"
                fill="var(--color-accent-gold)" />
            {/* Book pages */}
            <rect x="282" y="254" width="28" height="20" rx="2"
                fill="var(--color-bg-base)" />
            {/* Book lines */}
            <line x1="286" y1="260" x2="306" y2="260"
                stroke="var(--color-accent-gold)" strokeOpacity="0.6"
                strokeWidth="1.5" strokeLinecap="round" />
            <line x1="286" y1="265" x2="302" y2="265"
                stroke="var(--color-accent-gold)" strokeOpacity="0.4"
                strokeWidth="1.5" strokeLinecap="round" />
            <line x1="286" y1="270" x2="304" y2="270"
                stroke="var(--color-accent-gold)" strokeOpacity="0.4"
                strokeWidth="1.5" strokeLinecap="round" />

            {/* Left leg */}
            <rect x="162" y="290" width="36" height="54" rx="14"
                fill="var(--suit)" stroke="var(--rim)" strokeWidth="1.5" />
            {/* Right leg */}
            <rect x="202" y="290" width="36" height="54" rx="14"
                fill="var(--suit)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* Left boot */}
            <ellipse cx="180" cy="346" rx="22" ry="10"
                fill="var(--suit-deep)" stroke="var(--rim)" strokeWidth="1.5" />
            {/* Right boot */}
            <ellipse cx="220" cy="346" rx="22" ry="10"
                fill="var(--suit-deep)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* Stars */}
            <circle cx="60"  cy="60"  r="2"   fill='var(--color-tx-primary)' fillOpacity="0.7" />
            <circle cx="340" cy="40"  r="1.5" fill='var(--color-tx-primary)' fillOpacity="0.5" />
            <circle cx="80"  cy="300" r="1.5" fill='var(--color-tx-primary)' fillOpacity="0.4" />
            <circle cx="350" cy="280" r="2"   fill='var(--color-tx-primary)' fillOpacity="0.6" />
            <circle cx="130" cy="40"  r="1"   fill='var(--color-tx-primary)' fillOpacity="0.5" />
            <circle cx="310" cy="320" r="1"   fill='var(--color-tx-primary)' fillOpacity="0.4" />
            <circle cx="40"  cy="180" r="1.5"
                fill="var(--color-accent-gold)" fillOpacity="0.7" />
            <circle cx="360" cy="160" r="1.5"
                fill="var(--color-accent-teal)" fillOpacity="0.7" />

            {/* Small planet */}
            <circle cx="340" cy="90" r="22"
                fill="var(--suit-deep)"
                stroke="var(--color-accent-teal)" strokeOpacity="0.25" strokeWidth="1.5" />
            <ellipse cx="340" cy="90" rx="34" ry="8"
                fill="none"
                stroke="var(--color-accent-teal)" strokeOpacity="0.3" strokeWidth="1.5" />
            <circle cx="333" cy="84" r="4"
                fill="var(--color-accent-teal)" fillOpacity="0.2" />
        </g>
    </svg>
);

export default function NotFound() {
    return (
        <main className="min-h-dvh bg-bg-base flex flex-col items-center px-6 relative overflow-hidden">

            {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 rounded-full -top-20 -left-20
                        bg-[radial-gradient(circle,rgba(240,165,0,0.07),transparent_70%)]
                        blur-3xl" />
                <div className="absolute w-80 h-80 rounded-full bottom-0 right-0
                        bg-[radial-gradient(circle,rgba(45,212,191,0.06),transparent_70%)]
                        blur-3xl" />
            </div> */}

            <div className="relative z-10 flex flex-col items-center text-center gap-0 max-w-lg">

                <div className="w-72 md:w-80 animate-[float_4s_ease-in-out_infinite_alternate]">
                    <AstronautIllustration />
                </div>
                <div className='space-y-3 mx-auto flex flex-col justify-center items-center'>

                    <div className="flex items-center gap-3 justify-center ">
                        <span
                            className="font-family-mono font-bold text-accent-gold"
                            style={{ fontSize: 'clamp(64px, 12vw, 96px)', letterSpacing: '-0.04em', lineHeight: 0.7 }}
                        >
                            4
                        </span>
                        <span
                            className="font-family-mono font-bold text-tx-tertiary"
                            style={{ fontSize: 'clamp(64px, 12vw, 96px)', letterSpacing: '-0.04em', lineHeight: 0.7 }}
                        >
                            0
                        </span>
                        <span
                            className="font-family-mono font-bold text-accent-gold"
                            style={{ fontSize: 'clamp(64px, 12vw, 96px)', letterSpacing: '-0.04em', lineHeight: 0.7 }}
                        >
                            4
                        </span>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-1">
                        <h1
                            className="font-family-display  font-bold text-tx-primary"
                            style={{ fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em' }}
                        >
                            Lost in the cosmos?
                        </h1>
                        <p
                            className="font-family-body text-tx-secondary leading-relaxed"
                            style={{ fontSize: '15px' }}
                        >
                            This page drifted off into deep space. <br />
                            Head back and keep learning.
                        </p>
                    </div>

                    <div className="h-px w-48 mb-4 bg-[linear-gradient(90deg,transparent,rgba(240,165,0,0.3),transparent)]" />

                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        <Link href="/">
                            <button
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                         bg-accent-gold text-bg-base font-sans font-semibold
                         hover:brightness-110 hover:scale-[1.03]
                         transition-all duration-200"
                                style={{ fontSize: '14px' }}
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <path d="M3 12L12 3l9 9" />
                                    <path d="M9 21V12h6v9" />
                                </svg>
                                Back to Home
                            </button>
                        </Link>

                        <Link href="/courses">
                            <button
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                         bg-bg-card border border-border text-tx-secondary font-sans font-medium
                         hover:border-[rgba(240,165,0,0.3)] hover:text-tx-primary
                         transition-all duration-200"
                                style={{ fontSize: '14px' }}
                            >
                                Browse Courses
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            <style>{`
        @keyframes float {
          0%   { transform: translateY(0px) rotate(-1deg); }
          100% { transform: translateY(-18px) rotate(1deg); }
        }
      `}</style>
        </main>
    );
}