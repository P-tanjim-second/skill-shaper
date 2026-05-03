'use client'
import StatPill from "@/utilits/Statpill";
import { Check, Heart, Star, Clock, BookOpen, Award } from "lucide-react";
import { useState } from "react";
import DetailsImageSkeleton from "./DetailsImageSkeleton";

export default function SidebarCard({course}) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div
      className="rounded-xl border border-border overflow-hidden"
      style={{ boxShadow: 'var(--shadow-gold)', background: 'var(--color-bg-card)' }}
    >
      {/* Preview image */}
      <div className="relative overflow-hidden rounded-2xl p-3" style={{ height: '180px' }}>
        <DetailsImageSkeleton
          src={course.thumbnail}
          alt="Course preview"
          className="w-full h-full object-cover rounded-2xl"
          fill
        />
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              'linear-gradient(to top, rgba(7,7,15,0.6) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="p-5 flex flex-col gap-4">
        {/* Rating row */}
        <div className="flex items-center gap-2">
          <Star size={15} className="text-accent-gold fill-accent-gold" />
          <span className="font-family-mono font-medium text-tx-primary" style={{ fontSize: 'var(--text-body)' }}>
            {course.rating}
          </span>
          <span className="font-family-body text-tx-tertiary" style={{ fontSize: 'var(--text-small)' }}>
            ({course.ratingCount.toLocaleString()} ratings)
          </span>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center justify-around gap-3 grow"
        >
          <StatPill icon={Clock} value={`${course.stats.hours}h`} label="Duration" />
          <StatPill icon={BookOpen} value={course.stats.lessons} label="Lessons" />
          <StatPill icon={Award} value={course.stats.level} label="Level" />
        </div>

        {/* Enroll CTA */}
        <button
          className="w-full py-3.5 rounded-xl font-family-sans font-bold
                     bg-accent-gold text-bg-base
                     hover:brightness-110 hover:scale-[1.02]
                     transition-all duration-200 active:scale-[0.98]"
          style={{ fontSize: 'var(--text-body)', letterSpacing: '-0.01em' }}
        >
          Enroll Now
        </button>

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="w-full py-3 rounded-xl font-family-sans font-medium
                     border border-border text-tx-secondary
                     flex items-center justify-center gap-2
                     hover:border-[rgba(240,165,0,0.3)] hover:text-tx-primary
                     transition-all duration-200"
          style={{ fontSize: 'var(--text-body)' }}
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

        {/* Perks */}
        <div
          className="pt-2 border-t border-border flex flex-col gap-2.5"
        >
          {course.perks.map((perk) => (
            <div key={perk} className="flex items-center gap-2.5">
              <Check size={14} className="text-accent-gold shrink-0" />
              <span className="font-family-body text-tx-secondary" style={{ fontSize: 'var(--text-small)' }}>
                {perk}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}