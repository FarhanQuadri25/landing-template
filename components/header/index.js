"use client";
import { useState } from "react";
import styles from "./style.module.scss";
import { AnimatePresence } from "motion/react";
import Nav from "@/components/nav";

export default function index() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        className={styles.button}
        type="button"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
}
