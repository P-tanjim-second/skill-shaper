import '../app/styles/carousel.css'
import CarouselCard from './CarouselCard';

const TreadingNewReleases = async () => {
    const allCourse = await fetch(`${process.env.BASE_WEB_URL}/coursesData.json`) 
    const courses = await allCourse.json();
    const trendingCourse = courses.filter(course => course.level == "Advanced" || course.level == "Intermediate")

    return (
        <section className='w-11/13 min-h-dvh pt-24 px-6 mx-auto space-y-4'>
            <div className="hero-pill animate-fade-up" style={{ animationDelay: '0ms' }}>
                <span className="pill-dot" aria-hidden="true" />
                <span className="font-sans font-semibold tracking-label uppercase text-label text-accent-gold">
                    Hot right now
                </span>
            </div>
            <div className='font-family-sans flex justify-between flex-wrap leading-12 '>
                <h1 className='text-display font-bold'>Trending & <span className='font-family-display font-medium italic'>New Releases</span></h1>
                <p className='course-view-btn flex justify-center group items-center gap-2 text-small md:text-body cursor-pointer text-accent-gold'>View All Courses
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                        strokeLinejoin="round" className="hero-btn-arrow" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg></p>
            </div>
            <div className='carousel-wrap'>
                <div className='carousel mt-10'>
                    {
                        trendingCourse.map(course => {
                            return <CarouselCard key={course.id} course={course}></CarouselCard>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default TreadingNewReleases;