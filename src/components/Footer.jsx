import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-bg-footer">
      
      <div className="h-px w-full bg-accent-gold opacity-50"></div>

      <div className="max-w-11/13 mx-auto px-8 py-12">
        <div className="flex flex-wrap justify-between gap-10">
          
          <div className="w-full md:w-64">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-gold"></div>
              <span className="text-xl font-bold font-sans">
                <span className="text-tx-primary">Skill</span>
                <span className="text-accent-gold">Sphere</span>
              </span>
            </Link>
            <p className="mt-4 text-tx-secondary text-sm leading-relaxed">
              A modern learning studio for the next generation of builders, designers and operators.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-label uppercase tracking-widest text-tx-tertiary mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/courses" className="text-tx-secondary hover:text-tx-primary">All Courses</Link>
              </li>
              <li>
                <Link href="/instructors" className="text-tx-secondary hover:text-tx-primary">Instructors</Link>
              </li>
              <li>
                <Link href="/trending" className="text-tx-secondary hover:text-tx-primary">Trending</Link>
              </li>
              <li>
                <Link href="/tips" className="text-tx-secondary hover:text-tx-primary">Learning Tips</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-label uppercase tracking-widest text-tx-tertiary mb-4">
              Categories
            </h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/courses?cat=webdev" className="text-tx-secondary hover:text-tx-primary">Web Development</Link>
              </li>
              <li>
                <Link href="/courses?cat=design" className="text-tx-secondary hover:text-tx-primary">Design</Link>
              </li>
              <li>
                <Link href="/courses?cat=ai" className="text-tx-secondary hover:text-tx-primary">AI / ML</Link>
              </li>
              <li>
                <Link href="/courses?cat=marketing" className="text-tx-secondary hover:text-tx-primary">Marketing</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-label uppercase tracking-widest text-tx-tertiary mb-4">
              Connect
            </h4>
            <a href="mailto:hello@skillsphere.io" className="text-sm text-tx-secondary hover:text-accent-gold block mb-4">
              hello@skillsphere.io
            </a>
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-tx-secondary hover:text-accent-gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" className="w-9 h-9 flex items-center justify-center rounded-lg border border-border text-tx-secondary hover:text-accent-gold">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-small text-tx-tertiary">
            © 2026 SkillSphere. Crafted with intention.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="text-small text-tx-tertiary hover:text-tx-primary">Terms</Link>
            <Link href="/privacy" className="text-small text-tx-tertiary hover:text-tx-primary">Privacy</Link>
            <Link href="/cookies" className="text-small text-tx-tertiary hover:text-tx-primary">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}