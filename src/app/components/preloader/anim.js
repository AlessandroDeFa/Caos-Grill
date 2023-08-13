const ease = [0.76, 0, 0.24, 1];
export const preloader = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: ease, delay: 0.3 },
  },
};

export const translateWord = {
  initial: {
    y: "100%",
  },
  open: (i) => ({
    y: 0,
    transition: { duration: 1, ease: ease, delay: i[0] },
  }),
  closed: (i) => ({
    y: "-100%",
    transition: { duration: 0.5, ease: ease, delay: i[0] },
  }),
};

export const translateHero = {
  initial: {
    y: "25%",
    opacity: 0,
  },
  enter: {
    y: "-50%",
    opacity: 1,
    transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1], delay: 2.3 },
  },
};

export const opacityIndicator = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 2.5 },
  },
};
