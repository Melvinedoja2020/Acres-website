"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  Variants,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(10px)",
        backgroundColor: visible ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.4)",
        borderColor: visible
          ? "rgba(59, 130, 246, 0.5)"
          : "rgba(255, 255, 255, 0.1)",
        boxShadow: visible
          ? "0 0 40px rgba(59, 130, 246, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        width: visible ? "95%" : "100%",
        borderRadius: visible ? "16px" : "0px",
        y: visible ? 16 : 0,
        paddingTop: visible ? "12px" : "16px",
        paddingBottom: visible ? "12px" : "16px",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 40,
        duration: 0.6,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between bg-black/40 backdrop-blur-lg border border-white/10 px-6 py-4 lg:flex",
        className
      )}
    >
      {/* Holographic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-indigo-500/5 to-indigo-400/10 rounded-full blur-xl opacity-50" />
      <div className="relative z-10 flex w-full items-center justify-between">
        {children}
      </div>
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.a
          key={`link-${idx}`}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-6 py-3 text-indigo-100 hover:text-white transition-colors duration-300 font-medium"
          href={item.link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-xl bg-black/60 backdrop-blur-lg border border-indigo-300/40 shadow-2xl shadow-indigo-500/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(10px)",
        backgroundColor: visible ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.4)",
        borderColor: visible
          ? "rgba(59, 130, 246, 0.5)"
          : "rgba(255, 255, 255, 0.1)",
        boxShadow: visible
          ? "0 0 40px rgba(59, 130, 246, 0.3), 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        width: visible ? "95%" : "100%",
        paddingRight: visible ? "16px" : "24px",
        paddingLeft: visible ? "16px" : "24px",
        borderRadius: visible ? "16px" : "0px",
        y: visible ? 16 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 40,
        duration: 0.6,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1rem)] flex-col items-center justify-between bg-black/40 backdrop-blur-lg border border-white/10 px-6 py-4 lg:hidden",
        className
      )}
    >
      {/* Holographic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-indigo-500/5 to-indigo-400/10 rounded-2xl blur-xl opacity-50" />
      <div className="relative z-10 w-full">{children}</div>
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-6 rounded-2xl bg-black/80 backdrop-blur-lg border border-indigo-300/40 px-6 py-8 shadow-2xl shadow-indigo-500/30",
            className
          )}
        >
          {/* Holographic glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-indigo-500/10 to-indigo-400/5 rounded-2xl blur-xl opacity-70" />
          <div className="relative z-10 w-full space-y-4">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-lg bg-black/60 backdrop-blur-lg border border-indigo-300/40 hover:bg-black/80 hover:border-indigo-300/60 transition-all duration-300 shadow-xl shadow-indigo-500/20"
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <IconX className="w-6 h-6 text-indigo-100" />
        ) : (
          <IconMenu2 className="w-6 h-6 text-indigo-100" />
        )}
      </motion.div>
    </motion.button>
  );
};

export const NavbarLogo = () => {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative z-20 flex items-center space-x-3 px-3 py-2 rounded-ful bg-black/60 backdrop-blur-lg border border-indigo-300/40 hover:bg-black/80 hover:border-indigo-300/60 transition-all duration-300 shadow-xl shadow-indigo-500/20"
    >
      <div className="md:w-16 md:h-16 w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30 border border-indigo-400/50 overflow-hidden">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <span
        className="font-bold text-indigo-100 text-lg"
        style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.8)" }}
      >
        ACRES
      </span>
    </motion.a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const buttonVariants: Variants = {
    idle: {
      scale: 1,
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };
  return (
    <motion.button
      variants={buttonVariants}
      initial="idle"
      whileHover="hover"
      whileTap="tap"
      className="group relative bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-full font-bold text-lg overflow-hidden shadow-2xl border border-indigo-400/50 hover:shadow-indigo-500/40 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative flex items-center gap-3">
        <Tag href={href || undefined}>{children}</Tag>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="w-6 h-6" />
        </motion.div>
      </span>
    </motion.button>
  );
};
