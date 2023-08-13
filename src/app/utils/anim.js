export const translateGlobalHero = {
  initial: {
    y: "25%",
    opacity: 0,
  },
  enter: {
    y: "-25%",
    opacity: 1,
    transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
  },
};

export const slideUp = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.03 },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
    opacity: 0,
  },
};

export const slideUpText = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.012 },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
    opacity: 0,
  },
};

export const clipPath = {
  initial: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  enter: (delay) => ({
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: delay },
  }),
  exit: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
};
