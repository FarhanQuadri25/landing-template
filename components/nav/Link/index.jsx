import Link from "next/link";
import styles from "./styles.module.scss";
import { motion } from "motion/react";
import { slide } from "@/components/header/anim";

export default function index({ data, setIsActive }) {
  const handleClose = () => {
    setIsActive(false);
  };
  return (
    <motion.div
      className={styles.link}
      custom={data.index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href={`#${data.links}`} onClick={handleClose}>
        {data.label}
      </Link>
    </motion.div>
  );
}
