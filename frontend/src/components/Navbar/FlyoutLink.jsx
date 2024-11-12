import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open && FlyoutContent;
  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <a className="relative text-white cursor-pointer" href={href}>
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ x: "-50%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black rounded-lg z-50 shadow-lg p-4"
          >
            {/* Transparent overlay for spacing */}
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

            {/* Small arrow pointing upwards */}
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#D7FF40]" />

            {/* The actual content inside the dropdown */}
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;