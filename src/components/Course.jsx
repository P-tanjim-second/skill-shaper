import Link from 'next/link';
import '../app/styles/hero.css'
import CourseCard from './CourseCard';

const Course = async () => {
    const coursesDataPromise = await fetch(`${process.env.BASE_WEB_URL}/coursesData.json`);
    const coursesData = await coursesDataPromise.json();
    const demandedCourse = coursesData.filter(course => course.rating >= 4.9).slice(0, 3);

    return (
        <section className='w-11/13 mx-auto my-10'>
            <div className="hero-pill animate-fade-up mb-3" style={{ animationDelay: '0ms' }}>
                <span className="pill-dot" aria-hidden="true" />
                <span className="font-sans font-semibold tracking-label uppercase text-label text-accent-gold">
                    Hand-picked for you
                </span>
            </div>
            <h1 className='text-display font-semibold font-family-sans tracking-hero leading-10 md:leading-17'>
                Most <span className='font-family-display italic font-medium'>Popular</span> <br /> Courses
            </h1>
            <div className='flex justify-between mt-2'>
                <p className='text-tx-secondary text-small md:text-body'>Curated by our team based on enrollment, ratings and outcomes.</p>
                <Link href={'/courses'}>
                    <p className='course-view-btn flex justify-center group items-center gap-2 text-small md:text-body cursor-pointer text-accent-gold'>View All Courses
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                            strokeLinejoin="round" className="hero-btn-arrow" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></p>
                </Link>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10'>
                {
                    demandedCourse.map((course) => {
                        return <CourseCard key={course.id} course={course}></CourseCard>
                    })
                }
            </div>
        </section>
    );
};

export default Course;