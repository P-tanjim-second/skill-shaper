'use client';

import Link from 'next/link';

const BrokenRobotIllustration = () => (
    <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-sm mx-auto"
        aria-hidden="true"
    >
        <style>{`
            .rob-svg {
                --body:      var(--color-bg-elevated);
                --body-deep: var(--color-bg-card);
                --rim:       rgba(255,255,255,0.09);
                --rim-dark:  rgba(255,255,255,0.05);
                --gold:      var(--color-accent-gold);
                --teal:      var(--color-accent-teal);
                --red:       var(--color-accent-red);
            }
            [data-theme="light"] .rob-svg {
                --body:      #CDCAC4;
                --body-deep: #B8B4AD;
                --rim:       rgba(0,0,0,0.1);
                --rim-dark:  rgba(0,0,0,0.06);
            }

            .eye-glitch {
                animation: eyeGlitch 3s ease-in-out infinite;
            }
            .screen-flicker {
                animation: flicker 2.5s ease-in-out infinite;
            }
            .spark-1 { animation: spark 1.8s ease-out infinite; }
            .spark-2 { animation: spark 2.2s ease-out 0.4s infinite; }
            .spark-3 { animation: spark 1.5s ease-out 0.9s infinite; }
            .float-bolt { animation: floatBolt 3s ease-in-out infinite alternate; }
            .float-gear  { animation: floatGear  4s ease-in-out infinite alternate; }
            .float-wave  { animation: floatWave  2.8s ease-in-out infinite alternate; }

            @keyframes eyeGlitch {
                0%, 85%, 100% { opacity: 1; transform: scaleX(1); }
                87%            { opacity: 0.2; transform: scaleX(0.4); }
                89%            { opacity: 1; transform: scaleX(1); }
                91%            { opacity: 0.1; transform: scaleX(0.6); }
            }
            @keyframes flicker {
                0%, 90%, 100% { opacity: 1; }
                92%            { opacity: 0.3; }
                94%            { opacity: 1; }
                96%            { opacity: 0.5; }
            }
            @keyframes spark {
                0%   { opacity: 1; transform: translate(0,0) scale(1); }
                100% { opacity: 0; transform: translate(var(--sx,6px), var(--sy,-14px)) scale(0.3); }
            }
            @keyframes floatBolt {
                from { transform: translateY(0) rotate(-8deg); }
                to   { transform: translateY(-10px) rotate(8deg); }
            }
            @keyframes floatGear {
                from { transform: translateY(0) rotate(0deg); }
                to   { transform: translateY(-8px) rotate(25deg); }
            }
            @keyframes floatWave {
                from { transform: translateY(0) rotate(5deg); }
                to   { transform: translateY(-12px) rotate(-5deg); }
            }
        `}</style>

        <g className="rob-svg">

            {/* ── Ground shadow ── */}
            <ellipse cx="200" cy="368" rx="90" ry="14"
                fill="var(--color-accent-red)" fillOpacity="0.08" />

            {/* ── Floating decorative elements ── */}

            {/* Lightning bolt — top left */}
            <g className="float-bolt" style={{ transformOrigin: '72px 80px' }}>
                <path d="M76 60 L66 85 L74 85 L62 108 L80 78 L72 78 Z"
                    fill="var(--color-accent-gold)" fillOpacity="0.7" />
            </g>

            {/* Gear — top right */}
            <g className="float-gear" style={{ transformOrigin: '326px 75px' }}>
                <circle cx="326" cy="75" r="16"
                    fill="none" stroke="var(--color-accent-teal)"
                    strokeOpacity="0.5" strokeWidth="3" strokeDasharray="6 3" />
                <circle cx="326" cy="75" r="7"
                    fill="var(--body-deep)"
                    stroke="var(--color-accent-teal)" strokeOpacity="0.4" strokeWidth="2" />
            </g>

            {/* Wifi / wave icon — right side */}
            <g className="float-wave" style={{ transformOrigin: '345px 210px' }}>
                <path d="M330 218 Q337 210, 345 218"
                    stroke="var(--color-accent-red)" strokeOpacity="0.6"
                    strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M324 224 Q337 208, 350 224"
                    stroke="var(--color-accent-red)" strokeOpacity="0.4"
                    strokeWidth="2" strokeLinecap="round" fill="none" />
                <circle cx="337" cy="223" r="2.5"
                    fill="var(--color-accent-red)" fillOpacity="0.7" />
            </g>

            {/* ── Antenna ── */}
            <line x1="200" y1="68" x2="200" y2="88"
                stroke="var(--body)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="200" cy="62" r="7"
                fill="var(--color-accent-red)"
                stroke="var(--color-accent-red)" strokeOpacity="0.3" strokeWidth="4" />

            {/* ── Head ── */}
            <rect x="148" y="88" width="104" height="88" rx="18"
                fill="var(--body)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* Head panel line */}
            <line x1="148" y1="114" x2="252" y2="114"
                stroke="var(--rim)" strokeWidth="1" />

            {/* ── Screen / face area ── */}
            <rect x="162" y="100" width="76" height="60" rx="10"
                fill="var(--body-deep)" stroke="var(--rim)" strokeWidth="1" />

            {/* Screen glow — red error tint */}
            <rect x="162" y="100" width="76" height="60" rx="10"
                fill="var(--color-accent-red)" fillOpacity="0.06"
                className="screen-flicker" />

            {/* ── Eyes ── */}
            {/* Left eye — normal */}
            <g className="eye-glitch" style={{ transformOrigin: '185px 126px' }}>
                <rect x="171" y="116" width="28" height="20" rx="5"
                    fill="var(--color-accent-teal)" fillOpacity="0.15"
                    stroke="var(--color-accent-teal)" strokeOpacity="0.5" strokeWidth="1.5" />
                <rect x="178" y="121" width="14" height="10" rx="3"
                    fill="var(--color-accent-teal)" fillOpacity="0.8" />
            </g>

            {/* Right eye — X / broken */}
            <rect x="201" y="116" width="28" height="20" rx="5"
                fill="var(--color-accent-red)" fillOpacity="0.12"
                stroke="var(--color-accent-red)" strokeOpacity="0.4" strokeWidth="1.5" />
            <line x1="207" y1="120" x2="223" y2="132"
                stroke="var(--color-accent-red)" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="223" y1="120" x2="207" y2="132"
                stroke="var(--color-accent-red)" strokeWidth="2.5" strokeLinecap="round" />

            {/* ── Mouth — squiggly error line ── */}
            <path d="M174 148 Q179 144, 184 148 Q189 152, 194 148 Q199 144, 204 148 Q209 152, 214 148 Q219 144, 224 148 Q228 152, 230 148"
                stroke="var(--color-accent-gold)" strokeOpacity="0.7"
                strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* ── Ear bolts ── */}
            <circle cx="148" cy="120" r="9"
                fill="var(--body-deep)" stroke="var(--rim)" strokeWidth="1.5" />
            <circle cx="148" cy="120" r="4"
                fill="var(--color-accent-gold)" fillOpacity="0.5" />
            <circle cx="252" cy="120" r="9"
                fill="var(--body-deep)" stroke="var(--rim)" strokeWidth="1.5" />
            <circle cx="252" cy="120" r="4"
                fill="var(--color-accent-teal)" fillOpacity="0.5" />

            {/* ── Neck ── */}
            <rect x="186" y="176" width="28" height="18" rx="5"
                fill="var(--body-deep)" stroke="var(--rim)" strokeWidth="1" />
            <line x1="192" y1="176" x2="192" y2="194"
                stroke="var(--rim)" strokeWidth="1" />
            <line x1="200" y1="176" x2="200" y2="194"
                stroke="var(--rim)" strokeWidth="1" />
            <line x1="208" y1="176" x2="208" y2="194"
                stroke="var(--rim)" strokeWidth="1" />

            {/* ── Body ── */}
            <rect x="136" y="194" width="128" height="110" rx="20"
                fill="var(--body)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* Body panel */}
            <rect x="154" y="210" width="92" height="60" rx="10"
                fill="var(--body-deep)" stroke="var(--rim-dark)" strokeWidth="1" />

            {/* Error screen on chest */}
            <rect x="160" y="216" width="80" height="48" rx="7"
                fill="var(--color-bg-base)" stroke="var(--color-accent-red)"
                strokeOpacity="0.3" strokeWidth="1" className="screen-flicker" />

            {/* Error text lines on chest screen */}
            <rect x="166" y="223" width="30" height="5" rx="2"
                fill="var(--color-accent-red)" fillOpacity="0.8" />
            <rect x="200" y="223" width="34" height="5" rx="2"
                fill="var(--color-accent-red)" fillOpacity="0.2" />
            <rect x="166" y="232" width="68" height="3" rx="1.5"
                fill="var(--color-tx-secondary)" fillOpacity="0.3" />
            <rect x="166" y="239" width="52" height="3" rx="1.5"
                fill="var(--color-tx-secondary)" fillOpacity="0.2" />
            <rect x="166" y="246" width="60" height="3" rx="1.5"
                fill="var(--color-tx-secondary)" fillOpacity="0.2" />

            {/* Status dots */}
            <circle cx="166" cy="257" r="3" fill="var(--color-accent-red)" />
            <circle cx="175" cy="257" r="3" fill="var(--color-accent-gold)" fillOpacity="0.7" />
            <circle cx="184" cy="257" r="3" fill="var(--color-accent-teal)" fillOpacity="0.5" />

            {/* ── Left arm — drooping/broken ── */}
            <path d="M136 214 C110 220, 98 248, 104 278"
                stroke="var(--rim)" strokeWidth="30"
                strokeLinecap="round" fill="none" />
            <path d="M136 214 C110 220, 98 248, 104 278"
                stroke="var(--body)" strokeWidth="28"
                strokeLinecap="round" fill="none" />
            {/* Arm panel detail */}
            <path d="M122 234 C114 244, 110 256, 112 266"
                stroke="var(--rim)" strokeWidth="6"
                strokeLinecap="round" fill="none" />

            {/* Left hand — open/limp */}
            <ellipse cx="104" cy="283" rx="13" ry="10"
                fill="var(--body-deep)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* Sparks from left hand — broken! */}
            <g style={{ '--sx': '8px', '--sy': '-12px' }} className="spark-1">
                <line x1="104" y1="277" x2="110" y2="265"
                    stroke="var(--color-accent-gold)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            <g style={{ '--sx': '-6px', '--sy': '-10px' }} className="spark-2">
                <line x1="97" y1="278" x2="91" y2="268"
                    stroke="var(--color-accent-gold)" strokeWidth="1.5" strokeLinecap="round" />
            </g>
            <g style={{ '--sx': '4px', '--sy': '-16px' }} className="spark-3">
                <line x1="108" y1="275" x2="112" y2="259"
                    stroke="var(--color-accent-red)" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* ── Right arm — raised/reaching ── */}
            <path d="M264 214 C288 208, 300 230, 296 256"
                stroke="var(--rim)" strokeWidth="30"
                strokeLinecap="round" fill="none" />
            <path d="M264 214 C288 208, 300 230, 296 256"
                stroke="var(--body)" strokeWidth="28"
                strokeLinecap="round" fill="none" />
            <path d="M282 222 C290 232, 292 244, 290 254"
                stroke="var(--rim)" strokeWidth="6"
                strokeLinecap="round" fill="none" />

            {/* Right hand — holding wrench */}
            <ellipse cx="296" cy="261" rx="13" ry="10"
                fill="var(--body-deep)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* Wrench */}
            <path d="M304 248 L318 262 L314 266 L300 252 Z"
                fill="var(--color-tx-secondary)" fillOpacity="0.6" />
            <circle cx="320" cy="264" r="7"
                fill="none" stroke="var(--color-tx-secondary)"
                strokeOpacity="0.6" strokeWidth="3" />
            <circle cx="320" cy="264" r="2"
                fill="var(--color-tx-secondary)" fillOpacity="0.4" />

            {/* ── Legs ── */}
            <rect x="156" y="298" width="38" height="58" rx="14"
                fill="var(--body)" stroke="var(--rim)" strokeWidth="1.5" />
            <rect x="206" y="298" width="38" height="58" rx="14"
                fill="var(--body)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* Knee joint details */}
            <rect x="160" y="318" width="30" height="8" rx="4"
                fill="var(--body-deep)" stroke="var(--rim-dark)" strokeWidth="1" />
            <rect x="210" y="318" width="30" height="8" rx="4"
                fill="var(--body-deep)" stroke="var(--rim-dark)" strokeWidth="1" />

            {/* ── Feet ── */}
            <ellipse cx="175" cy="357" rx="24" ry="11"
                fill="var(--body-deep)" stroke="var(--rim)" strokeWidth="1.5" />
            <ellipse cx="225" cy="357" rx="24" ry="11"
                fill="var(--body-deep)" stroke="var(--rim)" strokeWidth="1.5" />

            {/* ── Background stars ── */}
            <circle cx="55"  cy="55"  r="2"   fill="white" fillOpacity="0.6" />
            <circle cx="345" cy="35"  r="1.5" fill="white" fillOpacity="0.5" />
            <circle cx="65"  cy="310" r="1.5" fill="white" fillOpacity="0.35" />
            <circle cx="355" cy="300" r="2"   fill="white" fillOpacity="0.5" />
            <circle cx="120" cy="30"  r="1"   fill="white" fillOpacity="0.45" />
            <circle cx="42"  cy="165" r="1.5"
                fill="var(--color-accent-gold)" fillOpacity="0.6" />
            <circle cx="358" cy="170" r="1.5"
                fill="var(--color-accent-teal)" fillOpacity="0.6" />
        </g>
    </svg>
);

export default function ErrorPage({error,reset}){
    return (
        <main className="min-h-dvh bg-bg-base flex flex-col items-center px-6 relative overflow-hidden">

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute w-96 h-96 rounded-full -top-24 -right-24
                                bg-[radial-gradient(circle,rgba(255,77,109,0.07),transparent_70%)]
                                blur-3xl" />
                <div className="absolute w-80 h-80 rounded-full bottom-0 -left-16
                                bg-[radial-gradient(circle,rgba(240,165,0,0.06),transparent_70%)]
                                blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center gap-3 max-w-lg">

                <div className="w-64 md:w-72">
                    <BrokenRobotIllustration />
                </div>

                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                                bg-[rgba(255,77,109,0.08)] border border-[rgba(255,77,109,0.25)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-red shrink-0
                                     animate-pulse" />
                    <span className="font-sans font-semibold text-accent-red"
                          style={{ fontSize: '11px', letterSpacing: '0.12em' }}>
                        SYSTEM ERROR
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    {['5', '0', '0'].map((n, i) => (
                        <span
                            key={i}
                            className={`font-mono mt-1 font-bold ${i === 1 ? 'text-tx-tertiary' : 'text-accent-red'}`}
                            style={{
                                fontSize: 'clamp(60px, 11vw, 88px)',
                                letterSpacing: '-0.04em',
                                lineHeight: 0.9,
                            }}
                        >
                            {n}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    <p
                        className="font-body text-tx-secondary leading-relaxed"
                        style={{ fontSize: '15px' }}
                    >
                        Our robot is working on it wrench in hand.
                        <br />
                        Try again in a moment.
                    </p>

                    {error?.message && (
                        <p className="font-mono text-accent-red mt-1 px-4 py-2.5
                                      rounded-lg bg-[rgba(255,77,109,0.07)]
                                      border border-[rgba(255,77,109,0.15)]"
                           style={{ fontSize: '12px' }}>
                            An unexpected error occurred
                        </p>
                    )}
                </div>

                <div className="h-px w-48 bg-[linear-gradient(90deg,transparent,rgba(255,77,109,0.3),transparent)]" />

                <div className="flex items-center gap-3 flex-wrap justify-center">

                    {reset && (
                        <button
                            onClick={reset}
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                                       bg-accent-red text-white font-sans font-semibold
                                       hover:brightness-110 hover:scale-[1.03]
                                       transition-all duration-200"
                            style={{ fontSize: '14px' }}
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                <path d="M3 3v5h5" />
                            </svg>
                            Try Again
                        </button>
                    )}

                    <Link href="/">
                        <button
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full
                                       bg-bg-card border border-border
                                       text-tx-secondary font-sans font-medium
                                       hover:border-[rgba(240,165,0,0.3)] hover:text-tx-primary
                                       transition-all duration-200"
                            style={{ fontSize: '14px' }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M3 12L12 3l9 9" />
                                <path d="M9 21V12h6v9" />
                            </svg>
                            Back to Home
                        </button>
                    </Link>
                </div>

            </div>
        </main>
    );
}