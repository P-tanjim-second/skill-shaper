export default function StatPill({ icon: Icon, value }) {
  return (
    <div className="flex flex-col items-center gap-1 py-3 px-3 rounded-lg border border-border bg-bg-elevated flex-1">
      <div className="flex flex-col justify-center items-center gap-1.5 text-tx-secondary">
        <Icon size={15} className="text-accent-gold" />
        <span className="font-family-mono  text-tx-primary" style={{ fontSize: 'var(--text-label)' }}>
          {value}
        </span>
      </div>
    </div>
  );
}