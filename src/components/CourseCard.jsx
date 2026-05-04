'use client'
import '../app/styles/hero.css'
import ImageSkeleton from './ImageSkeleton';
import { Clock } from '@gravity-ui/icons';
import { RatingCounter } from './RatingCounter';
import Link from 'next/link';
import { createSlug } from '@/utilits/createSlug';
const CourseCard = ({ course }) => {

    return (
        <Link href={`/courses/${createSlug(course.title)}/${course.id}`} className="block group">
            <div className='relative h-120 rounded-3xl overflow-hidden bg-bg-card border border-white/5 transition-all duration-500 hover:border-accent-gold/50 hover:shadow-glow hover:-translate-y-2'>
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <ImageSkeleton
                        src={course.image}
                        alt={course.title}
                        className='object-cover transition-transform duration-700 group-hover:scale-105'
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-transparent z-10" />
                </div>

                {/* Content Overlay */}
                <div className='relative z-20 h-full flex flex-col justify-end p-6 gap-4'>
                    <div className='flex gap-2'>
                        <span className='px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white/90'>
                            {course.category}
                        </span>
                        <span className='px-3 py-1 bg-accent-teal/20 backdrop-blur-md border border-accent-teal/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-accent-teal'>
                            {course.level}
                        </span>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='text-2xl font-bold text-white group-hover:text-accent-gold transition-colors duration-300 leading-tight'>
                            {course.title}
                        </h4>
                        
                        <div className='flex items-center gap-3 text-white/70 text-small'>
                            <div className='flex items-center gap-2'>
                                <div className='w-6 h-6 rounded-full relative overflow-hidden border border-white/20'>
                                    <ImageSkeleton
                                        src={course.instructorImage}
                                        alt={course.instructor}
                                        className='object-cover'
                                        fill
                                        sizes="24px"
                                    />
                                </div>
                                <span className='font-medium'>{course.instructor}</span>
                            </div>
                            <div className='w-1 h-1 bg-white/30 rounded-full' />
                            <div className='flex items-center gap-1.5'>
                                <Clock size={14} className="text-accent-gold" />
                                <span>{course.duration}h</span>
                            </div>
                        </div>

                        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                            <div className="overflow-hidden">
                                <p className='text-small text-white/60 leading-relaxed pt-2'>
                                    {course.description}
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between pt-4 border-t border-white/10 mt-2'>
                            <div className='flex items-center gap-2'>
                                <RatingCounter rating={course.rating} />
                                <span className='text-accent-gold font-bold text-small'>{course.rating}</span>
                            </div>
                            <div className='flex items-center gap-1 text-accent-gold text-[11px] font-bold uppercase tracking-widest group/btn'>
                                <span>View Course</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                                    strokeLinejoin="round" className="transition-transform group-hover/btn:translate-x-1">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;