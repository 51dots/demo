'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Game" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
           <span className="font-extrabold text-white">Andromaverse</span> is a cosmic adventure where you collect, breed, and battle with friendly creatures known as Ami as you explore the enchanting Alysian Islands. Uncover the secrets of this mystical land while training, evolving, unlocking, farming, customizing, trading, and crafting. Restore balance and reclaim the lands from the evil void that threatens their existence. Discover the hidden potential of each Ami and immerse yourself in a rich tapestry of mythology, magic, and mystery. Compete, cooperate, and forge connections with fellow players as you build a vibrant community within this awe-inspiring universe. The fate of the Ami and the destiny of Alysia rest in your hands.

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
