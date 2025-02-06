"use client";

import { motion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";
import React, { useRef } from "react";

const Intro = () => {
  const { t } = useTranslation("home");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="w-full text-base lg:w-2/3 xl:w-2/3 2xl:w-2/3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold"
      >
        {t("Automatically show your PTE sub-scores and details.")}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="mt-2 text-2xl font-bold"
      >
        {t("So you don't need to press")}{" "}
        <code className="rounded-md bg-slate-100 p-1 text-xl dark:bg-slate-800">
          F12
        </code>{" "}
        {t("to open the console for a manual check.")}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="mt-3"
      >
        {t(
          "Simply open your PTE score webpage after installing, and you'll see a clear breakdown of your performance, including sub-scores, CLB levels (for PTE-core), IELTS equivalent scores, and more.",
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        className="mt-3"
      >
        {t(
          "Explore this panel to better understand your strengths and areas for improvement! Wishing you great success!",
        )}
      </motion.div>
    </div>
  );
};

export default Intro;
