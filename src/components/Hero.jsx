'use client';

import '../app/styles/hero.css'
import Image from 'next/image';
import Link from 'next/link';
import { RatingCounter } from './RatingCounter';

const students = [
    'https://i.pravatar.cc/40?img=1',
    'https://i.pravatar.cc/40?img=2',
    'https://i.pravatar.cc/40?img=3',
    'https://i.pravatar.cc/40?img=4',
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">

            <div aria-hidden="true" className="pointer-events-none">
                <div className="hero-orb hero-orb-amber" />
                <div className="hero-orb hero-orb-teal" />
                <div className="hero-grid" />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-8">

                <div className="hero-pill animate-fade-up" style={{ animationDelay: '0ms' }}>
                    <span className="pill-dot" aria-hidden="true" />
                    <span className="font-sans font-semibold tracking-label uppercase text-label text-accent-gold">
                        Learn · Build · Excel
                    </span>
                </div>

                <h1
                    className=" font-extrabold  leading-hero text-tx-primary animate-fade-up text-hero tracking-hero"
                    style={{
                        animationDelay: '100ms',
                    }}
                >
                    <span>Upgrade Your</span>
                    <br />
                    <span className="relative inline-block">
                        <em className="font-family-display font-light italic text-tx-primary/90">Skills&nbsp;</em>
                        <span>Today.</span>
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
                    </span>
                </h1>

                <p
                    className="font-body text-small sm:text-body text-tx-secondary max-w-xl animate-fade-up"
                    style={{
                        lineHeight: '1.75',
                        animationDelay: '200ms',
                    }}
                >
                    Join 50,000+ learners mastering Web Dev, Design, Marketing &amp; AI
                    guided by operators from Vercel, Linear, Apple and DeepMind.
                </p>

                <div
                    className="flex items-center gap-4 flex-wrap justify-center animate-fade-up"
                    style={{ animationDelay: '300ms' }}
                >
                    <Link href="/courses">
                        <button className="hero-btn-primary group overflow-hidden relative font-sans font-semibold">
                            <span
                                className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 group-hover:animate-[shimmer_0.8s]"
                                style={{
                                    transform: 'skewX(-20deg)',
                                }}
                            />
                            Explore Courses
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                                strokeLinejoin="round" className="hero-btn-arrow" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>

                    <button className="hero-btn-secondary font-sans font-semibold">
                        <span className="hero-play-icon" aria-hidden="true">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor">
                                <path d="M1 1l10 6L1 13V1z" />
                            </svg>
                        </span>
                        Watch Demo
                    </button>
                </div>

                <div
                    className="flex items-center gap-4 flex-wrap justify-center animate-fade-up"
                    style={{ animationDelay: '400ms' }}
                >
                    <div className="flex items-center -space-x-2.5">
                        {students.map((src, i) => (
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

                    <div className="flex items-center gap-2">
                        <RatingCounter rating={4.9}></RatingCounter>
                        <span
                            className="font-mono font-medium text-small text-accent-gold"
                        >
                            4.9
                        </span>
                        <span className="font-body text-tx-secondary text-small">
                            · rated by 12,000+ students ·
                        </span>
                        <span
                            className="font-mono font-semibold text-accent-gold text-[14px]"
                        >
                            +8,400
                        </span>
                        <span className="font-body text-tx-secondary text-small">
                            this month
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}