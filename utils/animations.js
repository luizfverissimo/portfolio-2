export const animationChildVariants = {
  hidden: {
    opacity: 0,
    x:50
  },
  show: {
    opacity: 1,
    x:0,
  }
};

export const animationParentVariants = {
  hidden: {
  },
  show: {
    transition: {
      staggerChildren: .2
    }
  }
}