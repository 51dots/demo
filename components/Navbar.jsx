'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/legacy/image';
import isle from '../public/main/isle.png';
import styles from './Navbar.module.css';

import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
 <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="https://andromaverse.io" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image src={isle} width={72} height={72} alt="Smoot" />
          </Link>

          <div className={styles.navMiddle}>
            <Link className={styles.link} href={`https://andromaverse.io`}>
              <Image
                src="/main/base.png"
                className={styles.profileImage}
                width={30}
                height={30}
                alt="Home"
              />
            </Link>


            <Link className={styles.link} href={`https://andromaverse.io/about/playtest`}>
              <Image
                src="/main/observatory.png"
                className={styles.profileImage}
                width={35}
                height={35}
                alt="Playtest"
              />
            </Link>

            <Link className={styles.link} href={`https://andromaverse.io/collectibles`}>
              <Image
                src="/main/ladf.gif"
                className={styles.profileImage}
                width={40}
                height={40}
                alt="Collectibles"
              />
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>

          </div>


        </div>
      </nav>
    </div>

  </motion.nav>
);

export default Navbar;
