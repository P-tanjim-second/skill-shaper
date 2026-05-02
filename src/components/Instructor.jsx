import ImageWithSkeleton from "./ImageSkeleton";

const Instructor = async () => {
    const instructorsPromise = await fetch(`${process.env.BASE_WEB_URL}/topInstructor.json`);
    const instructors = await instructorsPromise.json();

    return (
        <section className="w-full bg-bg-base py-24 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">

                <div className="flex flex-col items-center gap-5 text-center">
                    <div className="inline-flex items-center gap-2.5
                          px-4 py-2 rounded-full
                          bg-[rgba(240,165,0,0.08)]
                          border border-[rgba(240,165,0,0.28)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold shrink-0" />
                        <span
                            className="font-sans font-semibold text-accent-gold text-label tracking-label"
                        >
                            TAUGHT BY OPERATORS
                        </span>
                    </div>

                    <h2
                        className="font-family-sans font-bold text-tx-primary leading-[1.1] tracking-hero"
                        style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
                    >
                        Top <em className="font-family-display font-medium italic">Instructors</em>
                    </h2>

                    <p
                        className="font-body text-tx-secondary max-w-lg leading-relaxed text-body"
                    >
                        Industry leaders who actually ship. No academic theory only
                        patterns earned in production.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                    {instructors.map(({ name, role, rating, courses, instructor }) => (
                        <div
                            key={name}
                            className="flex flex-col items-center gap-4
                         p-6 rounded-xl
                         hover:bg-bg-card
                         hover:-translate-y-1
                         transition-all duration-300 cursor-pointer group"
                        >
                            <div className="relative overflow-hidden rounded-full">
                                <ImageWithSkeleton
                                    src={instructor}
                                    alt={name}
                                    width={96}
                                    height={96}
                                    className="w-24 h-24 rounded-full object-cover
                             ring-2 ring-border
                             transition-all duration-300"
                                ></ImageWithSkeleton>
                            </div>

                            <div className="flex flex-col items-center gap-1.5 text-center">
                                <h3
                                    className="font-sans font-semibold text-tx-primary text-body"
                                >
                                    {name}
                                </h3>
                                <p
                                    className="font-body text-tx-secondary text-small"
                                >
                                    {role}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-accent-gold)">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span
                                    className="font-mono font-medium text-tx-primary text-small"
                                >
                                    {rating}
                                </span>
                                <span className="text-tx-tertiary text-small">·</span>
                                <span
                                    className="font-body text-tx-secondary text-small"
                                >
                                    {courses} courses
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Instructor;