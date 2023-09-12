export const textFromLeft = {
  hidden: { opacity: 0, x: "-100%" },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: custom * 0.3 },
  }),
};
export const textFromBottom = {
  hidden: { opacity: 0, y: "100%" },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: custom * 0.3 },
  }),
};
