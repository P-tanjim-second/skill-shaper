'use client'

import { useState, useEffect, useMemo } from 'react';
import CourseCard from '@/components/CourseCard';
import { SearchField } from '@heroui/react';

const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const filtering = (activeLevel, courses, search) => {
    if (search.trim() !== '') {
        return courses.filter(course => course.title.toLowerCase().includes(search.trim().toLowerCase()))
    }
    if (activeLevel === 'All') {
        return courses
    }
    return courses.filter(course => course.level.toLowerCase() == activeLevel.toLowerCase())

}


export default function AllCoursesSection() {
    const [courses, setCourses] = useState([]);
    const [activeLevel, setActiveLevel] = useState('All');
    const [search, setSearch] = useState('')

    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('/coursesData.json');
            const data = await res.json();
            setCourses(data);
        };

        loadData();
    }, []);

    const filteredCourses = useMemo(() => {
        return filtering(activeLevel, courses, search)
    }, [activeLevel, courses, search]);

    return (
        <section
            className="min-h-screen px-6 py-16 w-11/13 mx-auto bg-bg-base"
        >
            <div className="hero-pill animate-fade-up mb-3" style={{ animationDelay: '0ms' }}>
                <span className="pill-dot" aria-hidden="true" />
                <span className="font-sans font-semibold tracking-label uppercase text-label text-accent-gold">
                    The catalog
                </span>
            </div>

            <h1 className="font-bold font-family-sans text-tx-primary text-display">
                All <span className="italic font-medium font-family-display">Courses</span>
            </h1>
            <p className="text-tx-secondary mb-10">
                Browse the full library and filter by level.
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
                <div className="flex-1 space-y-4">
                    <SearchField fullWidth name="search">
                        <SearchField.Group className=" h-12 rounded-lg bg-white/5 px-4 transition-all duration-200  focus-within:shadow-lg focus-within:shadow-amber-400/30 focus-within:ring-1 focus-within:ring-accent-gold/60">
                            <SearchField.SearchIcon />
                            <SearchField.Input placeholder="Search courses by title..." className="bg-transparent outline-none" onChange={(e) => {
                                setSearch(e.target.value)
                                setActiveLevel('')
                                e.target.value === '' && setActiveLevel('All')
                                }} value={search}/>
                            <SearchField.ClearButton onClick={() => {
                                setSearch('')
                                setActiveLevel('All')
                            }}/>
                        </SearchField.Group>
                    </SearchField>
                </div>
                <div className='space-x-2 space-y-2'>
                    {LEVELS.map((level) => {
                        const isActive = activeLevel === level;

                        return (
                            <button
                                key={level}
                                onClick={() => {
                                    setActiveLevel(level)
                                    setSearch('')
                                }}
                                className="px-5 h-12 rounded-xl font-semibold cursor-pointer"
                                style={{
                                    background: isActive
                                        ? 'var(--color-accent-gold)'
                                        : 'var(--color-bg-card)',
                                    color: isActive
                                        ? 'var(--color-bg-base)'
                                        : 'var(--color-tx-secondary)',
                                    border: isActive
                                        ? '1px solid var(--color-accent-gold)'
                                        : '1px solid var(--color-border)',
                                }}
                            >
                                {level}
                            </button>
                        );
                    })}
                </div>
            </div>

            <p className="text-tx-secondary mb-6">
                Showing{' '}
                <span className="font-bold text-tx-primary">
                    {filteredCourses.length}
                </span>{' '}
                of{' '}
                <span className="font-bold text-tx-primary">
                    {courses.length}
                </span>{' '}
                courses
            </p>

            {filteredCourses.length > 0 ? (
                <div
                    className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            ) : (
                <div
                    className="flex flex-col items-center justify-center py-24 rounded-2xl border bg-bg-card border-border"
                >
                    <span className="italic text-tx-tertiary text-4xl mb-3">
                        No results
                    </span>

                    <p className="text-tx-tertiary">
                        No courses found in this level.
                    </p>
                </div>
            )}
        </section>
    );
}