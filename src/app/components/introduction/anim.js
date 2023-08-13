export const opacityIntro = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 1 },
  },
  closed: {
    opacity: 0,
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
    transition: { duration: 0.5, delay: i * 0.01 },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
    opacity: 0,
  },
};
