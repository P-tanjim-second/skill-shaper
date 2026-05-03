'use client'
import StatPill from "@/utilits/Statpill";
import { Check, Heart, Star, Clock, BookOpen, Award } from "lucide-react";
import { useState } from "react";
import DetailsImageSkeleton from "./DetailsImageSkeleton";

export default function SidebarCard({ course, dynamicCourse }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div
      className="rounded-xl border border-border overflow-hidden shadow-gold bg-bg-card"
    >
      <div className="relative overflow-hidden rounded-2xl p-3 h-45">
        <DetailsImageSkeleton
          src={dynamicCourse.image}
          alt="Course preview"
          className="w-full h-full object-cover rounded-2xl"
          fill
        />
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Star size={15} className="text-accent-gold fill-accent-gold" />
          <span className="font-family-mono font-medium text-tx-primary text-body">
            {dynamicCourse.rating}
          </span>
          <span className="font-family-body text-tx-tertiary text-small">
            ({dynamicCourse.studentsEnrolled.toLocaleString()} ratings)
          </span>
        </div>

        <div
          className="flex items-center justify-around gap-3 grow"
        >
          <StatPill icon={Clock} value={`${dynamicCourse.duration}h`} label="Duration" />
          <StatPill icon={BookOpen} value={course.stats.lessons} label="Lessons" />
          <StatPill icon={Award} value={dynamicCourse.level} label="Level" />
        </div>

        <button
          className="w-full relative overflow-hidden py-3.5 rounded-xl font-family-sans font-bold bg-accent-gold text-bg-base hover:brightness-110 cursor-pointer group text-body tracking-[-0.01em]"
        >
          <span
            className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-100 group-hover:animate-[shimmer_0.8s]"
            style={{
              transform: 'skewX(-20deg)',
            }}
          />
          Enroll Now
        </button>

        <button
          onClick={() => setWishlisted(!wishlisted)}
          className={`w-full py-3 rounded-xl font-family-sans font-medium
                     border border-border text-tx-secondary
                     flex items-center justify-center gap-2
                     hover:border-[rgba(240,165,0,0.3)] hover:text-tx-primary
                     cursor-pointer text-body`}
        >
          <Heart
            size={16}
            className={
              wishlisted
                ? 'fill-accent-red text-accent-red'
                : 'text-tx-secondary'
            }
            style={{ transition: 'color 0.2s, fill 0.2s' }}
          />
          {wishlisted ? 'Wishlisted' : 'Add to Wishlist'}
        </button>

        <div
          className="pt-2 border-t border-border flex flex-col gap-2.5"
        >
          {course.perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2.5">
              <Check size={14} className="text-accent-gold shrink-0" />
              <span className="font-family-body text-tx-secondary text-small">
                {perk}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}