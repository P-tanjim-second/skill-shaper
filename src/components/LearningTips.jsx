import Link from 'next/link';

const Tips = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="var(--color-accent-gold)" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: 'Time Blocking',
        desc: 'Schedule 45minute deep work sessions with 15-minute breaks. Consistency beats intensity, every time.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="var(--color-accent-gold)" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="2" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="22" />
                <line x1="2" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="22" y2="12" />
            </svg>
        ),
        title: 'Active Recall',
        desc: 'Test yourself instead of passive re reading. Retention improves by up to 80% versus highlighting.',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="var(--color-accent-gold)" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
        ),
        title: 'Spaced Repetition',
        desc: 'Review material at increasing intervals 1 day, 3 days, 1 week for true long-term memory.',
    },
];

export default function LearningTips() {
    return (
        <section className="w-full bg-bg-base py-24 px-6">
            <div className="w-11/14 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2.5 w-fit
                          px-4 py-2 rounded-full
                          bg-[rgba(240,165,0,0.08)]
                          border border-[rgba(240,165,0,0.28)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                        <span className="font-sans font-semibold text-accent-gold text-label leading-[0.12em]">
                            THE METHOD
                        </span>
                    </div>

                    <h2 className="font-family-sans text-display font-bold text-tx-primary leading-[1.1] tracking-tight">
                        Study <em className="font-family-display italic font-medium">smarter,</em>
                        <br />
                        not harder.
                    </h2>

                    <p className="font-body text-tx-secondary leading-relaxed max-w-sm text-body">
                        Our learning framework draws from cognitive science
                        research. Three habits practiced consistently change
                        the trajectory of every student we work with.
                    </p>

                    <Link
                        href="/guide"
                        className="inline-flex items-center gap-2 w-fit
                       font-sans font-medium text-accent-gold
                       hover:gap-3 transition-all duration-200 text-small"
                    >
                        Read our learning guide
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                <div className="flex flex-col gap-4">
                    {Tips.map(({ icon, title, desc }) => (
                        <div
                            key={title}
                            className="flex items-start gap-5 p-6 rounded-xl
                         bg-bg-card border border-border
                         hover:border-[rgba(240,165,0,0.2)]
                         hover:bg-bg-elevated
                         hover:-translate-y-0.5
                         transition-all duration-300 cursor-default"
                        >
                            <div className="shrink-0 w-11 h-11 rounded-lg
                              bg-[rgba(240,165,0,0.1)]
                              border border-[rgba(240,165,0,0.15)]
                              flex items-center justify-center">
                                {icon}
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-sans font-semibold text-tx-primary text-body">
                                    {title}
                                </h3>
                                <p className="font-body text-tx-secondary leading-relaxed text-small">
                                    {desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}