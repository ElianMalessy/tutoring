import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';
import { Center } from '@chakra-ui/react';
import StatsGridWithImage from '../components/gridWithImage/GridWithImage';
export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Davis Coding Tutoring</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <StatsGridWithImage>
            <Center w='100vw' mt='1rem'>
              <strong className={styles.title}>Welcome to DCT!</strong>
            </Center>
            <Center w='100vw'>
              <p className={styles.description}>
                Learn how to
                <code className={styles.code}>code</code>
              </p>
            </Center>
          </StatsGridWithImage>
        </main>
      </div>
    </Fragment>
  );
}
