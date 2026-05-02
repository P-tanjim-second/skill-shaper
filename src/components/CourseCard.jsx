'use client'
import '../app/styles/hero.css'
import ImageSkeleton from './ImageSkeleton';
import { Clock } from '@gravity-ui/icons';
import { RatingCounter } from './RatingCounter';

const CourseCard = ({ course }) => {

    return (
        <div className='p-5 hover:scale-101 hover:-translate-y-2 rounded-2xl h-120 relative overflow-hidden bg-gray-400 cursor-pointer group'>
            <div className="absolute z-10 inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
            <ImageSkeleton
                src={course.image}
                alt={course.title}
                className={'object-cover z-0'}
                fill
            ></ImageSkeleton>
            <div className='z-20 absolute inset-0 font-family-sans h-full w-full flex flex-col gap-3 justify-end p-4'>
                <div className='flex gap-4 text-label uppercase tracking-label text-white'>
                    <p className='px-2.5 py-1 backdrop-blur-2xl rounded-full border border-gray-700'>{course.category}</p>
                    <p className='px-2.5 py-1  bg-[#2bd4bd] rounded-full'>{course.level}</p>
                </div>
                <div className='space-y-2.5'>
                    <h4 className='text-xl font-semibold' style={{ color: "white" }}>{course.title}</h4>
                    <div className='flex flex-col gap-3 text-white text-small overflow-hidden'>
                        <div className='flex gap-3'>
                            <div className='w-6 h-6 rounded-full relative overflow-hidden shadow-card'>
                                <ImageSkeleton
                                    src={course.instructorImage}
                                    alt={course.instructor}
                                    className={'object-cover z-0'}
                                    fill
                                ></ImageSkeleton>
                            </div>
                            <p>{course.instructor}</p>
                            <hr className='h-4 border border-gray-600 ' />
                            <p className='flex gap-1 text-label '><Clock></Clock> {course.duration}h</p>
                        </div>
                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] ease-in-out">
                            <div className="overflow-hidden">
                                <p className='text-small text-white/90 leading-relaxed'>
                                    {course.description}
                                </p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <RatingCounter rating={course.rating}></RatingCounter>
                            <p className='text-white font-family-mono text-[14px]'>{course.rating}</p>
                        </div>
                    </div>
                    <p className='course-view-btn flex  group items-center gap-2 text-small cursor-pointer text-accent-gold'>View All Courses
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" className="hero-btn-arrow" aria-hidden="true">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;