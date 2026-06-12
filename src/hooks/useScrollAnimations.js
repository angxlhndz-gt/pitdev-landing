import { useEffect } from 'react';
import { gsap } from '../lib/gsap.js';

const getAnimationFromVars = (element) => {
  const variant = element.dataset.animate;
  const distance = Number(element.dataset.animateDistance || 34);

  if (variant === 'left') {
    return { autoAlpha: 0, x: -distance, y: 0 };
  }

  if (variant === 'right') {
    return { autoAlpha: 0, x: distance, y: 0 };
  }

  if (variant === 'scale') {
    return { autoAlpha: 0, scale: 0.94, y: distance / 2 };
  }

  return { autoAlpha: 0, x: 0, y: distance };
};

export default function useScrollAnimations() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.utils.toArray('[data-animate]').forEach((element) => {
        gsap.fromTo(element, getAnimationFromVars(element), {
          autoAlpha: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: Number(element.dataset.animateDuration || 0.85),
          ease: 'power3.out',
          clearProps: 'transform,opacity,visibility',
          scrollTrigger: {
            trigger: element,
            start: element.dataset.animateStart || 'top 84%',
            once: true,
          },
        });
      });

      gsap.utils.toArray('[data-stagger]').forEach((container) => {
        const items = container.querySelectorAll('[data-stagger-item]');

        if (!items.length) {
          return;
        }

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: Number(container.dataset.staggerDistance || 32), scale: 0.97 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: Number(container.dataset.staggerDuration || 0.75),
            ease: 'power3.out',
            stagger: Number(container.dataset.staggerAmount || 0.1),
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: container,
              start: container.dataset.staggerStart || 'top 82%',
              once: true,
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);
}
