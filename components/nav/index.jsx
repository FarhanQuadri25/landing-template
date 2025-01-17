"use client";
import Curve from '@/components/nav/Curve';
import styles from "./styles.module.scss";
import { LINKS } from "@/data/data";
import Link from "@/components/nav/Link";
import { motion } from "motion/react";
import { menuSlide } from "../header/anim";

export default function index({ setIsActive }) {
  return (
    <motion.div
      className={styles.menu}
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {LINKS.map((item, index) => {
            return (
              <Link
                key={index}
                data={{ ...item, index }}
                setIsActive={setIsActive}
              />
            );
          })}
        </div>
      </div>
      <Curve/>
    </motion.div>
  );
}
