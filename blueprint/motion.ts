import { Variants } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

// Viewport-triggered animations - elements visible by default, animate on scroll
export const fadeUpOnScroll: Variants = {
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease },
  }),
};

export const slideInLeftOnScroll: Variants = {
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease },
  }),
};

export const slideInRightOnScroll: Variants = {
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease },
  }),
};

export const staggerOnScroll: Variants = {
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Hero entrance animations (animate on mount, not scroll)
export const heroFadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease },
  }),
};

export const heroCard = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: 0.8 + i * 0.2, ease },
  }),
};
