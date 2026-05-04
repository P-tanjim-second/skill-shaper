'use client'
import ImageWithSkeleton from '@/components/ImageSkeleton';
import { useSession } from '@/lib/auth-client';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import LockModal from './LockModal';
import Link from 'next/link';

const ProfilePage = () => {
    const { data } = useSession()
    const user = data?.user;

    if (!user) {
        return <LockModal isOpen={true}></LockModal>
    }

    return (
        <div className='min-h-screen px-6 py-16 w-11/13 mx-auto bg-bg-base'>
            <div className="hero-pill animate-fade-up mb-3" style={{ animationDelay: '0ms' }}>
                <span className="pill-dot" aria-hidden="true" />
                <span className="font-sans font-semibold tracking-label uppercase text-label text-accent-gold">
                    You studio
                </span>
            </div>

            <div className='flex flex-col md:flex-row'>
                <h1 className="font-bold font-family-sans text-tx-primary text-display">
                    My <span className="italic font-medium font-family-display">Profile</span>
                </h1>

                <div className="mx-auto flex w-full max-w-105 items-center justify-center">
                    <section
                        className="relative w-full overflow-hidden rounded-[28px] border border-border bg-bg-card px-6 py-7 shadow-card sm:px-7 sm:py-8"
                        style={{
                            backgroundImage:
                                'radial-gradient(circle at top, rgba(240,165,0,0.08), transparent 45%), linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0))',
                        }}
                    >
                        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/3" />

                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-6">
                                <div className="absolute -inset-1 rounded-full bg-[radial-gradient(circle,rgba(240,165,0,0.22),transparent_68%)] blur-md" />
                                <div className="relative w-28 h-28 rounded-full overflow-hidden p-0.5 shadow-[0_0_0_1px_rgba(240,165,0,0.35)]">
                                    <ImageWithSkeleton
                                        src={user.image}
                                        alt="Profile pic"
                                        className="rounded-full border border-white/10 object-cover "
                                        fill
                                    />
                                </div>
                            </div>

                            <h1 className="font-family-cabinet-grotesk text-[clamp(1.4rem,4vw,2rem)] font-semibold leading-none tracking-hero text-tx-primary">
                                {user.name}
                            </h1>
                            <p className="mt-3 font-family-dm-sans text-small text-tx-secondary sm:text-small">
                                {user.email}
                            </p>
                        </div>

                        <div className="mt-8 flex gap-3">
                            {[
                                { value: '4', label: 'COURSES' },
                                { value: '2', label: 'DONE' },
                                { value: '18', label: 'HOURS' },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex-1 rounded-[22px] border border-border bg-bg-elevated sm:px-3 py-4 text-center shadow-[0_6px_18px_rgba(0,0,0,0.18)]"
                                >
                                    <div className="flex-1 font-family-jetbrains-mono text-[clamp(1.2rem,3vw,1.7rem)] leading-none text-accent-gold">
                                        {item.value}
                                    </div>
                                    <div className="flex-1 mt-2 font-family-cabinet-grotesk text-label font-medium tracking-label text-tx-secondary">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href={'/update-profile'}>
                            <button
                                type="button"
                                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[18px] bg-accent-gold px-5 py-4 font-family-cabinet-grotesk text-[15px] font-semibold tracking-[-0.01em] text-bg-base shadow-[0_14px_30px_rgba(240,165,0,0.18)] transition-transform duration-200 group overflow-hidden relative cursor-pointer active:scale-[0.99]"
                            >
                                <span
                                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 group-hover:animate-[shimmer_0.8s]"
                                    style={{
                                        transform: 'skewX(-20deg)',
                                    }}
                                />
                                <span>Update Profile</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;