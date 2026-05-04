import { ProgressBar } from '@heroui/react';
import ImageWithSkeleton from './ImageSkeleton';
import Link from 'next/link';
import { createSlug } from '@/utilits/createSlug';

export default function CarouselCard({ course }) {
    return (

        <article className="card group">
            <Link href={`/courses/${createSlug(course.title)}/${course.id}`} className="block w-full h-full relative">
                <div className="absolute inset-0 z-0">
                    <ImageWithSkeleton
                        src={course.image}
                        alt={course.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />
                </div>

                <div className="relative z-20 h-full flex flex-col justify-between p-6">
                    <div className="flex justify-between items-start">
                        <div className="px-3 py-1 text-[10px] font-bold bg-accent-gold/20 text-accent-gold border border-accent-gold/30 uppercase tracking-widest rounded-full backdrop-blur-md">
                            {course.level}
                        </div>
                        <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <span className="text-accent-gold text-[10px] font-bold uppercase tracking-widest block opacity-80">
                                {course.category}
                            </span>
                            <h4 className="text-white text-xl font-bold leading-tight font-family-sans group-hover:text-accent-gold transition-colors duration-300">
                                {course.title}
                            </h4>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between text-white/60 text-[11px] font-family-mono">
                                <span>{course.studentsEnrolled.toLocaleString()} Enrolled</span>
                                <span className="text-accent-gold">{Math.floor(course.studentsEnrolled / 1000)}% Complete</span>
                            </div>
                            
                            <ProgressBar 
                                aria-label="Course Popularity" 
                                value={Math.min(100, (course.studentsEnrolled / 150000) * 100)} 
                                color="warning" 
                                size="sm" 
                                className="opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}