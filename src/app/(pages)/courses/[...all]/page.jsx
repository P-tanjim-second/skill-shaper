import React from 'react';

import {
  Star,
  Check,
  Users,
} from 'lucide-react';
import { promises as fs } from 'fs';
import path from 'path';
import SidebarCard from './components/SidebarCard';
import CurriculumModule from './components/CurriculumModule';
import DetailsImageSkeleton from './components/DetailsImageSkeleton';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import LockModal from './components/LockModal';
import { createSlug } from '@/utilits/createSlug';

const course = {
  instructor: {
    role: 'Senior Engineer @ Vercel',
  },
  learnings: [
    'Architect scalable React + TypeScript apps',
    'Design REST and tRPC APIs with Node',
    'Model data and ship migrations in Postgres',
    'Deploy to the edge with CI/CD pipelines',
    'Write tests that you actually trust',
  ],
  stats: { lessons: 64 },
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


const CourseDetailsPage = async ({ params }) => {
  const urlArr = await params;
  const [_, id] = urlArr.all;
  
  const filePath = path.join(process.cwd(), 'public', 'coursesData.json');
  const fileData = await fs.readFile(filePath, 'utf8');
  const courses = JSON.parse(fileData);
  
  const dynamicCourse = courses.find(cr => cr.id == id);

  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return <LockModal isOpen={true} courseTitle={createSlug(dynamicCourse.title)} courseId={dynamicCourse.id}></LockModal>
  }


  return (
    <div
      className="min-h-screen bg-bg-base"
    >
      <div
        className="mx-auto px-6 py-10 max-w-275"
      >
        <div
          className="flex flex-col lg:flex-row gap-8 items-start relative"
        >
          <div className="flex flex-col gap-8 flex-1 overflow-hidden">

            <div className="relative rounded-2xl overflow-hidden h-85">
              <DetailsImageSkeleton
                src={dynamicCourse.image}
                alt={dynamicCourse.title}
                className={"w-full h-full object-cover"}
                fill
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(7,7,15,0.55) 0%, transparent 55%)',
                }}
              />
              <div className="absolute top-4 left-4">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full
                              border font-family-sans font-semibold text-accent-teal 
                              text-label tracking-label bg-[rgba(45,212,191,0.10)] border-[rgba(45,212,191,0.30)]`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: 'var(--color-accent-teal)' }}
                  />
                  {dynamicCourse.category}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1
                className="font-family-display font-bold text-tx-primary text-heading tracking-tight leading-[1.15]"
              >
                {dynamicCourse.title}
              </h1>

              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <div className='w-9 h-9 rounded-full overflow-hidden'>
                    <DetailsImageSkeleton
                      src={dynamicCourse.instructorImage}
                      alt={dynamicCourse.instructor}
                      className="rounded-full overflow-hidden border border-border object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <p
                      className="font-family-sans font-semibold text-tx-primary leading-none mb-0.5 text-small"
                    >
                      {dynamicCourse.instructor}
                    </p>
                    <p
                      className="font-family-body text-tx-tertiary leading-none text-small"
                    >
                      {course.instructor.role}
                    </p>
                  </div>
                </div>
                <span className="w-1 h-1 rounded-full bg-tx-tertiary" />

                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-accent-gold fill-accent-gold" />
                  <span
                    className="font-family-mono font-medium text-tx-primary text-small"
                  >
                    {dynamicCourse.rating}
                  </span>
                  <span
                    className="font-family-body text-tx-tertiary text-small"
                  >
                    ({dynamicCourse.studentsEnrolled})
                  </span>
                </div>
                <span className="w-1 h-1 rounded-full bg-tx-tertiary" />

                <div className="flex items-center gap-1.5">
                  <Users size={13} className="text-tx-tertiary" />
                  <span
                    className="font-family-body text-tx-secondary text-small"
                  >
                    {dynamicCourse.studentsEnrolled.toLocaleString()}
                    <span className="text-tx-tertiary"> enrolled</span>
                  </span>
                </div>
              </div>

              <p
                className="font-family-body text-tx-secondary text-body leading-body"
              >
                {dynamicCourse.description}
              </p>
            </div>

            <div
              className="h-px w-full"
              style={{
                background:
                  'linear-gradient(90deg,transparent 0%,rgba(240,165,0,0.20) 30%,rgba(240,165,0,0.38) 50%,rgba(240,165,0,0.20) 70%,transparent 100%)',
              }}
            />

            <div className="flex flex-col gap-4">
              <h2
                className="font-family-sans font-bold text-tx-primary text-title tracking-tight"
              >
                What you&apos;ll learn
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {course.learnings.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className="text-accent-gold mt-0.5 shrink-0"
                    />
                    <span
                      className="font-family-body text-tx-secondary text-body leading-normal"
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="h-px w-full"
              style={{
                background:
                  'linear-gradient(90deg,transparent 0%,rgba(240,165,0,0.20) 30%,rgba(240,165,0,0.38) 50%,rgba(240,165,0,0.20) 70%,transparent 100%)',
              }}
            />

            <div className="flex flex-col gap-4">
              <h2
                className="font-family-sans font-bold text-tx-primary text-title tracking-tight"
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

          <div
            className="shrink-0 sticky top-25 w-full lg:w-auto lg:flex-[0.5]"
          >
            <SidebarCard course={course} dynamicCourse={dynamicCourse} />
          </div>
        </div>
      </div>
    </div>
  );

};

export default CourseDetailsPage;