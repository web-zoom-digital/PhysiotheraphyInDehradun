"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

// 1. Reveal element when scrolled into view
interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = "100%",
  delay = 0.1,
  duration = 0.5,
  yOffset = 30,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// 2. Staggered list container
interface StaggerContainerProps {
  children: React.ReactNode;
  delayChildren?: number;
  staggerDirection?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  delayChildren = 0.1,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delayChildren,
          },
        },
      }}
      initial="hidden"
      animate={controls}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

// 3. Staggered item
export const StaggerItem: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 100, damping: 15 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 4. Testimonials Auto Scroll / Carousel
interface CarouselProps {
  children: React.ReactNode[];
  speed?: number; // lower is slower
}

export const AutoScrollCarousel: React.FC<CarouselProps> = ({ children, speed = 40 }) => {
  return (
    <div className="w-full overflow-hidden relative py-4">
      {/* Gradients to fade out edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {/* Render child elements twice to ensure a seamless infinite scroll loop */}
        {children.map((child, idx) => (
          <div key={`c1-${idx}`} className="shrink-0">
            {child}
          </div>
        ))}
        {children.map((child, idx) => (
          <div key={`c2-${idx}`} className="shrink-0">
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// 5. Custom smooth accordion for FAQ
interface AccordionProps {
  question: string;
  answer: string;
  isOpenByDefault?: boolean;
}

export const FaqAccordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-slate-200  bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-brand-blue/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center cursor-pointer justify-between p-5 text-left font-semibold text-slate-800 transition-colors hover:text-primary-brand"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-slate-400 shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="p-5 pt-0 text-sm text-slate-500 border-t border-slate-50/50 leading-relaxed bg-brand-gray-light/30">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
