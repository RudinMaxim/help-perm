'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SELECTORS = {
  hero: '[data-motion-hero]',
  section: '[data-motion-section]',
  staggerGroup: '[data-motion-stagger]',
  card: '[data-motion-card]',
  cta: '[data-motion-cta]',
  header: '[data-motion-header]',
};

export function SiteMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      return;
    }

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const distance = isMobile ? 18 : 28;
      const duration = isMobile ? 0.45 : 0.6;

      const header = document.querySelector(SELECTORS.header);
      if (header) {
        gsap.fromTo(
          header,
          { autoAlpha: 0, y: -18 },
          { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out', clearProps: 'all' }
        );
      }

      gsap.utils.toArray<HTMLElement>(SELECTORS.hero).forEach((hero) => {
        const items = hero.querySelectorAll<HTMLElement>('[data-motion-item]');
        if (!items.length) return;

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: distance },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'opacity,visibility,transform',
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(SELECTORS.section).forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: distance },
          {
            autoAlpha: 1,
            y: 0,
            duration,
            ease: 'power2.out',
            clearProps: 'opacity,visibility,transform',
            scrollTrigger: {
              trigger: section,
              start: isMobile ? 'top 92%' : 'top 84%',
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(SELECTORS.staggerGroup).forEach((group) => {
        const cards = group.querySelectorAll<HTMLElement>(SELECTORS.card);
        if (!cards.length) return;

        gsap.fromTo(
          cards,
          { autoAlpha: 0, y: isMobile ? 18 : 24, scale: isMobile ? 1 : 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.42 : 0.52,
            stagger: isMobile ? 0.06 : 0.08,
            ease: 'power2.out',
            clearProps: 'opacity,visibility,transform',
            scrollTrigger: {
              trigger: group,
              start: isMobile ? 'top 94%' : 'top 86%',
              once: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(SELECTORS.cta).forEach((cta) => {
        gsap.fromTo(
          cta,
          { autoAlpha: 0, y: 16, scale: 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            ease: 'power2.out',
            clearProps: 'opacity,visibility,transform',
            scrollTrigger: {
              trigger: cta,
              start: isMobile ? 'top 95%' : 'top 88%',
              once: true,
            },
          }
        );
      });
    }, document.body);

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return null;
}
