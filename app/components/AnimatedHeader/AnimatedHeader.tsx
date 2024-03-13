"use client";

import React from "react";
import { motion } from "framer-motion";
import { H1 } from "../Typography/Typography";

const AnimatedHeader = () => {
  return (
    // <motion.div
    //   initial={{
    //     opacity: 0,
    //     y: 25,
    //   }}
    //   animate={{
    //     opacity: 1,
    //     y: 0,
    //   }}
    //   transition={{ duration: 0.25, ease: "easeInOut" }}
    // >
    <H1>Free personal gaming calendar </H1>
    // </motion.div>
  );
};

export default AnimatedHeader;
