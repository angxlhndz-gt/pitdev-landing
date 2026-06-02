export default function ButtonLink({
  children,
  href,
  icon: Icon,
  variant = 'primary',
  className = '',
  ...props
}) {
  const styles =
    variant === 'primary'
      ? 'border-pit-neon bg-pit-neon text-pit-black shadow-glow hover:bg-pit-mint'
      : 'border-white/[0.12] bg-white/[0.03] text-pit-ink hover:border-pit-neon/50 hover:bg-pit-neon/10 hover:text-white';

  return (
    <a
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
      {...props}
    >
      {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
      <span>{children}</span>
    </a>
  );
}
