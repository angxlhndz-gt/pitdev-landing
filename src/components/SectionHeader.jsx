export default function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14" data-animate="up">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-pit-neon">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? <p className="mt-5 text-base leading-8 text-pit-ink/[0.78] sm:text-lg">{children}</p> : null}
    </div>
  );
}
