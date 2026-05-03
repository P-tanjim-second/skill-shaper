import { ProgressBar } from '@heroui/react';
import ImageWithSkeleton from './ImageSkeleton';
import Link from 'next/link';
import { createSlug } from '@/utilits/createSlug';

export default function CarouselCard({ course }) {
    return (

        <article
            className={`card
        group relative w-full
        overflow-hidden
        bg-bg-card
        shadow-card
        hover:shadow-gold
        hover:-translate-y-1`}
        >
            <Link href={`/courses/${createSlug(course.title)}/${course.id}`}>
                <ImageWithSkeleton
                    src={course.image}
                    alt={course.title}
                    fill
                    className={`
          object-cover object-center
          scale-100 group-hover:scale-105
          duration-700
        `}
                    priority
                />

                <div
                    className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/10`}
                />

                <div
                    className="
          absolute inset-0
          bg-radial-[circle_at_top_right]
          from-accent-gold/25 via-transparent to-transparent
          opacity-70
        "
                />

                <div className='absolute inset-0 group text-left font-family-sans flex flex-col justify-between px-3 py-3'>
                    <div className='px-2 py-0.5 text-small text-[#ff0073] font-bold bg-[#aa1b5b7a] uppercase h-fit w-fit rounded-full'>
                        🔥 {course.level}
                    </div>

                    <h4 style={{ color: "white" }} className='tracking-tight leading-hero font-semibold'>
                        {
                            course.title.length >= 4 ? <>
                                {course.title.split(' ').slice(0, 4).join(' ')}
                                <br />
                                {course.title.split(' ').slice(4).join(' ')}
                            </>
                                : course.title
                        }
                    </h4>
                    <div className='space-y-1'>
                        <p className='text-gray-400 leading-hero text-small'><span className='text-white font-family-display'>{course.studentsEnrolled}</span> students enrolled this <br /> week</p>

                        <ProgressBar aria-label="Loading progress" className="w-50" value={course.studentsEnrolled.toString().slice(0, 2)} color='warning' size='sm'>
                            <ProgressBar.Track>
                                <ProgressBar.Fill />
                            </ProgressBar.Track>
                        </ProgressBar>
                    </div>
                </div>
            </Link>
        </article>
    );
}