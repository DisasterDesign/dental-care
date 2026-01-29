// Animation variants for Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

// Stagger container for children animations
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Child variant for stagger
export const staggerChild = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

// Float animation for decorative elements
export const floatAnimation = {
  animate: {
    y: [0, -15, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Pulse animation
export const pulseAnimation = {
  animate: {
    scale: [1, 1.02, 1],
    opacity: [0.1, 0.15, 0.1]
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Button hover animation
export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 30px rgba(74, 179, 232, 0.4)"
};

export const buttonTap = {
  scale: 0.95
};

// Card hover animation
export const cardHover = {
  y: -8,
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
};

// Spring transition for interactive elements
export const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 17
};
