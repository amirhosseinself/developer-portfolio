"use client";
import { motion } from "framer-motion";

export default function SectionWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }} // حالت اولیه (نامرئی و کمی پایین‌تر)
      whileInView={{ opacity: 1, y: 0 }} // وقتی وارد ویوپورت شد
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
