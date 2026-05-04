'use client';

import { Lock } from 'lucide-react';
import Link from 'next/link';

export default function LockModal({ isOpen, courseTitle,courseId }) {


    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
        >
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <div
                className={`relative w-full max-w-130 mx-4 rounded-2xl
                   border border-white/10 bg-[#0E0E1A]
                   shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                   p-10 text-center
                   animate-[fadeIn_0.2s_ease-out]`}
            >
                <div className={`mx-auto w-16 h-16 rounded-full
                        bg-white/5 border border-yellow-500/30
                        flex items-center justify-center`}>
                    <Lock className="text-yellow-400" size={26} strokeWidth={1.8} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-white">
                    This content is for Sign Up members on
                </h2>

                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    Log in or create a free account to preview the full curriculum and enroll.
                </p>

                <div className="mt-6 flex gap-3">
                    <Link
                        href={`/auth/login?callbackUrl=${encodeURIComponent(`/courses/${courseTitle}/${courseId}`)}`}
                        className={`flex-1 h-12 flex items-center justify-center
                       rounded-xl bg-yellow-400 text-black font-semibold
                       group relative overflow-hidden active:scale-[0.98]
                       transition`}
                    >
                        <span
                            className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 group-hover:animate-[shimmer_0.8s]"
                            style={{
                                transform: 'skewX(-20deg)',
                            }}
                        />
                        Login to continue
                    </Link>

                    <Link
                        href="/auth/register"
                        className="flex-1 h-12 flex items-center justify-center
                       rounded-xl border border-white/15 text-white
                       hover:bg-white/5 transition"
                    >
                        Create account
                    </Link>
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
        </div>
    );
}