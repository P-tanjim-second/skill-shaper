'use client';

import '../app/styles/hero.css'
import Image from 'next/image';
import Link from 'next/link';

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
                    <Link href="/course">
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
                        <div className='flex'>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="#F0A500" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path d="M12.6722 2.04308C12.5459 1.78707 12.2851 1.625 11.9996 1.625C11.7142 1.625 11.4534 1.78707 11.3271 2.04308L8.67288 7.4211L2.73788 8.28351C2.45536 8.32456 2.22065 8.52244 2.13243 8.79395C2.04421 9.06546 2.11779 9.36351 2.32222 9.56278L6.61682 13.749L5.603 19.66C5.55475 19.9414 5.67041 20.2257 5.90137 20.3936C6.13233 20.5614 6.43853 20.5835 6.69122 20.4506L11.9996 17.6598L17.3081 20.4506C17.5608 20.5835 17.867 20.5614 18.0979 20.3936C18.3289 20.2257 18.4445 19.9414 18.3963 19.66L17.3825 13.749L21.6771 9.56278C21.8815 9.36351 21.9551 9.06546 21.8669 8.79395C21.7786 8.52244 21.5439 8.32456 21.2614 8.28351L15.3264 7.4211L12.6722 2.04308Z" fill="#F0A500" />
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="#F0A500" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path d="M12.6722 2.04308C12.5459 1.78707 12.2851 1.625 11.9996 1.625C11.7142 1.625 11.4534 1.78707 11.3271 2.04308L8.67288 7.4211L2.73788 8.28351C2.45536 8.32456 2.22065 8.52244 2.13243 8.79395C2.04421 9.06546 2.11779 9.36351 2.32222 9.56278L6.61682 13.749L5.603 19.66C5.55475 19.9414 5.67041 20.2257 5.90137 20.3936C6.13233 20.5614 6.43853 20.5835 6.69122 20.4506L11.9996 17.6598L17.3081 20.4506C17.5608 20.5835 17.867 20.5614 18.0979 20.3936C18.3289 20.2257 18.4445 19.9414 18.3963 19.66L17.3825 13.749L21.6771 9.56278C21.8815 9.36351 21.9551 9.06546 21.8669 8.79395C21.7786 8.52244 21.5439 8.32456 21.2614 8.28351L15.3264 7.4211L12.6722 2.04308Z" fill="#F0A500" />
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="#F0A500" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path d="M12.6722 2.04308C12.5459 1.78707 12.2851 1.625 11.9996 1.625C11.7142 1.625 11.4534 1.78707 11.3271 2.04308L8.67288 7.4211L2.73788 8.28351C2.45536 8.32456 2.22065 8.52244 2.13243 8.79395C2.04421 9.06546 2.11779 9.36351 2.32222 9.56278L6.61682 13.749L5.603 19.66C5.55475 19.9414 5.67041 20.2257 5.90137 20.3936C6.13233 20.5614 6.43853 20.5835 6.69122 20.4506L11.9996 17.6598L17.3081 20.4506C17.5608 20.5835 17.867 20.5614 18.0979 20.3936C18.3289 20.2257 18.4445 19.9414 18.3963 19.66L17.3825 13.749L21.6771 9.56278C21.8815 9.36351 21.9551 9.06546 21.8669 8.79395C21.7786 8.52244 21.5439 8.32456 21.2614 8.28351L15.3264 7.4211L12.6722 2.04308Z" fill="#F0A500" />
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="#F0A500" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path d="M12.6722 2.04308C12.5459 1.78707 12.2851 1.625 11.9996 1.625C11.7142 1.625 11.4534 1.78707 11.3271 2.04308L8.67288 7.4211L2.73788 8.28351C2.45536 8.32456 2.22065 8.52244 2.13243 8.79395C2.04421 9.06546 2.11779 9.36351 2.32222 9.56278L6.61682 13.749L5.603 19.66C5.55475 19.9414 5.67041 20.2257 5.90137 20.3936C6.13233 20.5614 6.43853 20.5835 6.69122 20.4506L11.9996 17.6598L17.3081 20.4506C17.5608 20.5835 17.867 20.5614 18.0979 20.3936C18.3289 20.2257 18.4445 19.9414 18.3963 19.66L17.3825 13.749L21.6771 9.56278C21.8815 9.36351 21.9551 9.06546 21.8669 8.79395C21.7786 8.52244 21.5439 8.32456 21.2614 8.28351L15.3264 7.4211L12.6722 2.04308Z" fill="#F0A500" />
                            </svg>
                            <svg width="15" height="15" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                                <path d="M13.0817 2.37507C13.0817 2.02651 12.8415 1.72389 12.5021 1.64469C12.1627 1.56549 11.8134 1.73058 11.6591 2.04315L9.00491 7.42117L3.06991 8.28358C2.78739 8.32463 2.55268 8.52251 2.46446 8.79402C2.37625 9.06553 2.44982 9.36358 2.65425 9.56285L6.94886 13.7491L5.93504 19.6601C5.88678 19.9415 6.00244 20.2258 6.2334 20.3936C6.46436 20.5614 6.77056 20.5836 7.02325 20.4507L12.6807 17.4764C12.9273 17.3468 13.0817 17.0912 13.0817 16.8126V2.37507Z" fill="#F0A500" />
                                <path d="M17.6405 20.4509L14.5993 18.852V17.1574L16.9934 18.416L16.1698 13.6142C16.1281 13.3709 16.2087 13.1226 16.3855 12.9503L19.8742 9.54963L15.0529 8.84905C14.8754 8.82326 14.7154 8.73521 14.5993 8.60409V5.27449L15.6588 7.42134L21.5938 8.28374C21.8763 8.3248 22.111 8.52268 22.1992 8.79419C22.2875 9.0657 22.2139 9.36375 22.0095 9.56301L17.7149 13.7492L18.7287 19.6602C18.7769 19.9416 18.6613 20.226 18.4303 20.3938C18.1993 20.5616 17.8931 20.5837 17.6405 20.4509Z" fill="#F0A500" />
                            </svg>
                        </div>
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