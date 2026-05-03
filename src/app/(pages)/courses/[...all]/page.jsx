import React from 'react';

import {
  Star,
  Check,
  Users,
} from 'lucide-react';
import ImageWithSkeleton from '@/components/ImageSkeleton';
import SidebarCard from './components/SidebarCard';
import CurriculumModule from './components/CurriculumModule';
import DetailsImageSkeleton from './components/DetailsImageSkeleton';

const course = {
  badge: 'WEB DEV',
  title: 'Modern Full-Stack Web Development',
  instructor: {
    name: 'Aarav Mehta',
    role: 'Senior Engineer @ Vercel',
    avatar: 'https://i.pravatar.cc/40?img=8',
  },
  rating: 4.9,
  ratingCount: 2410,
  enrolled: 8428,
  description:
    'Build production-grade apps with React, TypeScript, Node and Postgres. From design systems to deployment, youll ship a real SaaS as your capstone.',
  learnings: [
    'Architect scalable React + TypeScript apps',
    'Design REST and tRPC APIs with Node',
    'Model data and ship migrations in Postgres',
    'Deploy to the edge with CI/CD pipelines',
    'Write tests that you actually trust',
  ],
  stats: { hours: 32, lessons: 64, level: 'Intermediate' },
  thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80',
  heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80',
  perks: ['Certificate included', 'Lifetime access', 'Mobile friendly'],
  modules: [
    {
      id: 1,
      label: 'Module 01',
      title: 'Foundations',
      lessons: ['TypeScript essentials', 'React patterns', 'State that scales'],
    },
    {
      id: 2,
      label: 'Module 02',
      title: 'Backend craft',
      lessons: ['Node.js APIs', 'Postgres & Prisma', 'tRPC end-to-end'],
    },
    {
      id: 3,
      label: 'Module 03',
      title: 'Ship it',
      lessons: ['CI/CD pipelines', 'Edge deployment', 'SaaS capstone'],
    },
  ],
};


const CourseDetailsPage = async ({params}) => {
    const urlArr = await params;
    const [title, id] = urlArr.all
    console.log(id)
    return (
    <div
      className="min-h-screen"
      style={{ background: 'var(--color-bg-base)' }}
    >
      <div
        className="mx-auto px-6 py-10 "
        style={{ maxWidth: '1100px' }}
      >
        {/* ── Two-column layout ── */}
        <div
          className="flex flex-col lg:flex-row gap-8 items-start relative" 
        >
          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-8 flex-1 overflow-hidden">

            {/* Hero image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '340px' }}>
              <DetailsImageSkeleton
                src={course.heroImage}
                alt={course.title}
                className={"w-full h-full object-cover"}
                fill
              />
              {/* dark gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(7,7,15,0.55) 0%, transparent 55%)',
                }}
              />
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full
                              border font-family-sans font-semibold text-accent-teal"
                  style={{
                    fontSize: 'var(--text-label)',
                    letterSpacing: '0.12em',
                    background: 'rgba(45,212,191,0.10)',
                    borderColor: 'rgba(45,212,191,0.30)',
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: 'var(--color-accent-teal)' }}
                  />
                  {course.badge}
                </div>
              </div>
            </div>

            {/* Course title */}
            <div className="flex flex-col gap-4">
              <h1
                className="font-family-display font-bold text-tx-primary"
                style={{
                  fontSize: 'var(--text-heading)',
                  letterSpacing: 'var(--tracking-tight)',
                  lineHeight: 1.15,
                }}
              >
                {course.title}
              </h1>

              {/* Instructor + meta row */}
              <div className="flex items-center gap-4 flex-wrap">
                {/* Avatar + name */}
                <div className="flex items-center gap-2.5">
                  <div className='w-9 h-9 rounded-full overflow-hidden'>
                    <DetailsImageSkeleton
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="rounded-full overflow-hidden border border-border object-cover"
                    fill
                  />
                  </div>
                  <div>
                    <p
                      className="font-family-sans font-semibold text-tx-primary leading-none mb-0.5"
                      style={{ fontSize: 'var(--text-small)' }}
                    >
                      {course.instructor.name}
                    </p>
                    <p
                      className="font-family-body text-tx-tertiary leading-none"
                      style={{ fontSize: 'var(--text-small)' }}
                    >
                      {course.instructor.role}
                    </p>
                  </div>
                </div>

                {/* Divider dot */}
                <span className="w-1 h-1 rounded-full bg-tx-tertiary" />

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-accent-gold fill-accent-gold" />
                  <span
                    className="font-family-mono font-medium text-tx-primary"
                    style={{ fontSize: 'var(--text-small)' }}
                  >
                    {course.rating}
                  </span>
                  <span
                    className="font-family-body text-tx-tertiary"
                    style={{ fontSize: 'var(--text-small)' }}
                  >
                    ({course.ratingCount.toLocaleString()})
                  </span>
                </div>

                {/* Divider dot */}
                <span className="w-1 h-1 rounded-full bg-tx-tertiary" />

                {/* Enrolled */}
                <div className="flex items-center gap-1.5">
                  <Users size={13} className="text-tx-tertiary" />
                  <span
                    className="font-family-body text-tx-secondary"
                    style={{ fontSize: 'var(--text-small)' }}
                  >
                    {course.enrolled.toLocaleString()}
                    <span className="text-tx-tertiary"> enrolled</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="font-family-body text-tx-secondary"
                style={{ fontSize: 'var(--text-body)', lineHeight: 'var(--leading-body)' }}
              >
                {course.description}
              </p>
            </div>

            {/* Gold divider */}
            <div
              className="h-px w-full"
              style={{
                background:
                  'linear-gradient(90deg,transparent 0%,rgba(240,165,0,0.20) 30%,rgba(240,165,0,0.38) 50%,rgba(240,165,0,0.20) 70%,transparent 100%)',
              }}
            />

            {/* ── What you'll learn ── */}
            <div className="flex flex-col gap-4">
              <h2
                className="font-family-sans font-bold text-tx-primary"
                style={{ fontSize: 'var(--text-title)', letterSpacing: 'var(--tracking-tight)' }}
              >
                What youll learn
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {course.learnings.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className="text-accent-gold mt-0.5 shrink-0"
                    />
                    <span
                      className="font-family-body text-tx-secondary"
                      style={{ fontSize: 'var(--text-body)', lineHeight: 1.5 }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gold divider */}
            <div
              className="h-px w-full"
              style={{
                background:
                  'linear-gradient(90deg,transparent 0%,rgba(240,165,0,0.20) 30%,rgba(240,165,0,0.38) 50%,rgba(240,165,0,0.20) 70%,transparent 100%)',
              }}
            />

            {/* ── Curriculum ── */}
            <div className="flex flex-col gap-4">
              <h2
                className="font-family-sans font-bold text-tx-primary"
                style={{ fontSize: 'var(--text-title)', letterSpacing: 'var(--tracking-tight)' }}
              >
                Curriculum
              </h2>
              <div className="flex flex-col gap-2">
                {course.modules.map((mod, i) => (
                  <CurriculumModule key={mod.id} module={mod} defaultOpen={i === 0} />
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div
            className="shrink-0 sticky top-25 w-full lg:w-auto lg:flex-[0.5]"
          >
            <SidebarCard course={course} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default CourseDetailsPage;