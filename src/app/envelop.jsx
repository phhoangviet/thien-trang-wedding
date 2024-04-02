"use client";
import Image from "next/image";
import { motion, useTime, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Modal from "./modal";
import { Howl, Howler } from "howler";

export const EnvelopComp = () => {
  const time = useTime(5000);
  const sound = new Howl({
    src: ["/music.mp3"],
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const close = () => {
    if (!isPlay) {
      sound.play();
      setIsPlay(true);
    }
    setModalOpen(false)
  };
  const open = () => {
    if (!isPlay) {
      sound.play();
      setIsPlay(true);
    }
    setModalOpen(!modalOpen);
  };
  useEffect(() => {
    setTimeout(() => setModalOpen(true), 300);
    setTimeout(() => {
      setModalOpen(false);
    }, 7000);
  }, []);
  return (
    <div>
      <motion.div
        onClick={open}
        animate={{
          scale: [1, 1, 1.2, 1, 1],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.4, 0.6, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        className="fixed bottom-3 z-40 right-3 bg-white rounded-full cursor-pointer shadow-md md:w-[64px] md:h-[64px] w-[32px] h-[32px]"
      >
        <Image
          src="./envelop.svg"
          width={32}
          height={32}
          alt="envelop"
          className="md:w-[64px] md:h-[64px]"
        ></Image>
      </motion.div>
      <AnimatePresence
        initial={false}
        mode={"wait"}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};
