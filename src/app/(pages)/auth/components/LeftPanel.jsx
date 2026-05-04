'use client'
import ImageWithSkeleton from '@/components/ImageSkeleton';
import {motion} from 'framer-motion';
import { Clock, Star } from 'lucide-react';

export default function LeftPanel() {
    return (
        <div className="relative hidden lg:flex flex-col justify-between px-12 py-10 overflow-hidden bg-bg-base w-1/2 min-h-screen">
            <div className="absolute top-[-15%] left-[-10%] w-130 h-130 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(240,165,0,0.4),transparent_70%)] blur-[90px]" />
            <div className="absolute bottom-[-8%] left-[60%] w-120 h-120 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(45,212,191,0.4),transparent_70%)] blur-[100px]" />

            <div className="relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                <span className="font-family-sans font-semibold text-tx-secondary text-title">Skill</span>
                <span className="font-family-sans font-semibold text-accent-gold text-title -ml-1">Sphere</span>
            </div>

            <div className="relative z-10 flex flex-col gap-2.5 perspective-[1000px]">
                <h1
                    className="font-medium text-tx-primary leading-hero tracking-hero text-display"
                >
                    <span className='font-family-display'>Your next</span>{' '}
                    <em className="font-family-display italic font-light">skill</em>
                    <br />
                    <span className='font-family-display'>is one lesson</span>
                    <br />
                    <span className='font-family-display'>away.</span>
                </h1>

                <p className="font-family-body text-tx-secondary text-body leading-body max-w-[65%]">
                    Join 50,000+ learners shipping real projects with mentors from the industry&apos;s best teams.
                </p>

                <motion.div
                    initial={{ rotateX: 10, rotateY: 10, x: "0%", y: "0%" }}
                    animate={{ y: ["0%", "-10%", "0%"] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-90 rounded-2xl border border-border bg-bg-card shadow-card"
                >
                    <div className="relative h-40 overflow-hidden p-3 rounded-2xl w-[91%] mx-auto mt-4">
                        <ImageWithSkeleton
                            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80"
                            alt="Course preview"
                            className="w-full h-full object-cover"
                            fill
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,7,15,0.7)_0%,transparent_60%)]" />
                    </div>

                    <div className="px-4 py-3 flex flex-col gap-2">
                        <div>
                            <span
                                className="font-family-sans font-semibold text-accent-teal px-2.5 py-1 rounded-full text-label bg-[rgba(45,212,191,0.15)] border border-[rgba(45,212,191,0.30)]"
                                style={{ letterSpacing: '0.10em' }}
                            >
                                WEB DEV
                            </span>
                        </div>
                        <p className="font-family-sans font-bold text-tx-primary text-body leading-snug">
                            Modern Full-Stack Web Dev
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <Star size={13} className="text-accent-gold fill-accent-gold" />
                                <span className="font-family-mono text-tx-primary text-small">4.9</span>
                            </div>
                            <div className="flex items-center gap-1 text-tx-tertiary">
                                <Clock size={13} />
                                <span className="font-family-mono text-tx-tertiary text-small">32h</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}