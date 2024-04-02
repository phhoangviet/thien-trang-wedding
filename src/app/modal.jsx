"use client"
import { motion } from "framer-motion";
import Backdrop from "./backgdrop";
import Slider from "./slider";
const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Modal = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal bg-transparent"
        // variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="w-full">
            <Slider/>
        </div>
        <div className="md:pt-10 pt-10 text-white cursor-pointer" onClick={handleClose}>Đóng</div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
