"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { AnimatePresence } from "motion/react";
import Nav from "@/components/nav";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive((prev) => !prev);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        {isActive && <Nav  setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
}
