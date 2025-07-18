import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 0.8,
                delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};

// Staggered container for children animations
export const staggerContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// Scale animation
export const scaleIn = (delay: number = 0): Variants => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 0.8,
                delay,
            },
        },
    };
};

// Rotate animation
export const rotateIn = (delay: number = 0): Variants => {
    return {
        hidden: {
            rotate: -90,
            opacity: 0,
        },
        show: {
            rotate: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 0.8,
                delay,
            },
        },
    };
};

// Slide in animation
export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0): Variants => {
    return {
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
                delay,
            },
        },
    };
};

// Text animation (letter by letter)
export const textVariant = (delay: number = 0): Variants => {
    return {
        hidden: {
            y: 20,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 0.8,
                delay,
            },
        },
    };
};

// Text container for letter animations
export const textContainer: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

// Letter animation
export const letterVariant: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            damping: 10,
        },
    },
};

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.3 },
};

// Pulse animation
export const pulseAnimation: Variants = {
    hidden: { scale: 1 },
    show: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
};

// Floating animation
export const floatAnimation: Variants = {
    hidden: { y: 0 },
    show: {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
        },
    },
};

// Bounce animation
export const bounceAnimation: Variants = {
    hidden: { y: 0 },
    show: {
        y: [0, -15, 0],
        transition: {
            duration: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
};

// Shimmer effect for skill badges
export const shimmerAnimation: Variants = {
    hidden: {
        backgroundPosition: '0% 0%',
    },
    show: {
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
        },
    },
};

// Page transition
export const pageTransition: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};