import { useMemo, useRef } from "react";
import styles from "../styles/Button.module.scss";
import { motion } from "framer-motion";

export function Button({ children, onClick, className }) {
  const state = useMemo(
    () => ({
      init: {
        d: "M0 2.0131C0 2.0131 36.4454 2.91338 59.85 3.01911C101.48 3.20717 124.531 0.069058 166.163 0.00107175C199.735 -0.0537537 252 2.0131 252 2.0131C252 2.0131 249.708 20.0195 249.638 31.6905C249.565 43.7516 252 62.3739 252 62.3739C252 62.3739 214.645 64.4125 190.575 63.8829C163.743 63.2925 149.695 61.1506 122.85 61.3678C97.8202 61.5704 84.8594 63.2073 59.85 63.8829C36.3992 64.5163 0 62.3739 0 62.3739C0 62.3739 2.43497 43.7516 2.3625 31.6905C2.29238 20.0195 0 2.0131 0 2.0131Z",
        fill: "#FFDB8E", // Initial fill color
      },
      hover: {
        d: "M0 1.01329C0 1.01329 35.4454 0.913575 58.85 1.01931C100.48 1.20737 125.531 1.06925 167.163 1.00127C200.735 0.946442 252 1.01329 252 1.01329C252 1.01329 250.708 17.0197 250.638 28.6907C250.565 40.7518 252 61.3741 252 61.3741C252 61.3741 214.645 61.4127 190.575 60.8831C163.743 60.2927 147.695 62.1508 120.85 62.368C95.8202 62.5706 84.8594 60.2075 59.85 60.8831C36.3992 61.5165 0 61.3741 0 61.3741C0 61.3741 1.43497 44.7518 1.3625 32.6907C1.29238 21.0197 0 1.01329 0 1.01329Z",
        fill: "#7C6CC9", // Fill color on hover
        transition: { duration: 0.15, ease: "easeIn" }, // Transition for both path and fill
      },
    }),
    []
  );

  return (
    <motion.div
      onClick={onClick}
      className={`${styles.button} ${className}`}
      whileHover="hover"
      animte="init"
      initial="init"
      // Apply hover animation on the root div
      // Attach the variants to the root div
    >
      <svg
        className={styles.svg}
        width="252"
        height="64"
        viewBox="0 0 252 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          whileHover="hover"
          animte="init"
          initial="init"
          variants={state} // Use the same variants for the path
          fill={state.init.fill} // Initial fill color
        />
      </svg>
      <p>{children}</p>
    </motion.div>
  );
}
