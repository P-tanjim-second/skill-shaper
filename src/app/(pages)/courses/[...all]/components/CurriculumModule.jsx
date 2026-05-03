'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function CurriculumModule({ module, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="border border-border rounded-xl overflow-hidden
                 transition-all duration-300"
      style={{ background: 'var(--color-bg-card)' }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4
                   hover:bg-bg-subtle transition-colors duration-200 group"
      >
        <div className="text-left">
          <p
            className="font-family-mono text-tx-tertiary mb-0.5"
            style={{ fontSize: 'var(--text-small)', letterSpacing: '0.08em' }}
          >
            {module.label}
          </p>
          <p
            className="font-family-sans font-semibold text-tx-primary"
            style={{ fontSize: 'var(--text-body)' }}
          >
            {module.title}
          </p>
        </div>
        <span
          className="text-tx-secondary group-hover:text-accent-gold
                     transition-colors duration-200 shrink-0 ml-4"
        >
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>

      {/* Lessons */}
      {open && (
        <div
          className="border-t border-border px-6 py-3 flex flex-col gap-0"
          style={{ background: 'var(--color-bg-base)' }}
        >
          {module.lessons.map((lesson, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-3 border-b border-border last:border-0"
            >
              <span
                className="font-family-mono text-tx-tertiary shrink-0"
                style={{ fontSize: 'var(--text-small)', minWidth: '20px' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="font-family-body text-tx-secondary"
                style={{ fontSize: 'var(--text-body)' }}
              >
                {lesson}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}