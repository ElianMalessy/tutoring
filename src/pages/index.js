import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';
import { Center, Text } from '@chakra-ui/react';
import StatsGridWithImage from '../components/gridWithImage/GridWithImage';
import Typical from 'react-typical';

export default function Home() {
  // make the steve jobs quote and the stuff under it animate in, swoop in from left to right

  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Davis Coding Tutoring</title>
          <meta name='description' content='Free coding tutoring home page' />
        </Head>

        <main className={styles.main}>
          <StatsGridWithImage>
            <Center w='100vw' mt='1rem'>
              <strong className={styles.title}>DCT</strong>
            </Center>
            <Center w='100vw'>
              <p className={styles.description}>
                Learn how to
                <code className={styles.code}>
                  <Typical loop={Infinity} wrapper='b' steps={['', 1000, 'code', 2000, '', 1000]} />
                </code>
              </p>
            </Center>
          </StatsGridWithImage>
        </main>
      </div>
    </Fragment>
  );
}
