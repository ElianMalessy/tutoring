import styles from '../../styles/Home.module.css';
import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';
import { Button, Text, SimpleGrid, Heading, UnorderedList, ListItem, Box, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TutorName = ({ children }) => (
  <Text fontWeight={700} fontSize={'5xl'}>
    {children}
  </Text>
);
const Title = ({ children }) => (
  <Text fontWeight={700} fontSize={'3xl'} mb='0.5rem'>
    {children}
  </Text>
);

export default function tutors() {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Tutors - Davis Coding Tutoring</title>
          <meta name='description' content='Free coding tutoring tutors page' />
        </Head>
        <main className={styles.main}>
          <SimpleGrid h='100%' gap={4} w='80vw' py='1rem'>
            <Heading mt='0.5rem'>Our Tutors</Heading>
            <Text as='div' mt='-1rem'>
              If you want to join DCT as a tutor, you can sign up here.{' '}
              <Text as='span' fontWeight={700}>
                Note:{' '}
              </Text>
              You must be in high school to be a tutor.
              <Button ml='1rem' onClick={() => router.push('https://forms.gle/koAyAzqRDmggjBRZA')}>
                Sign up
              </Button>
            </Text>
            <hr />
            <Stack direction={['column', 'row']} w='80vw' spacing={'2rem'}>
              <Box w='100%'>
                <TutorName>Elian Malessy</TutorName>
                <Title>Founder/President</Title>
                <UnorderedList fontSize={'2xl'}>
                  <ListItem>Junior at Davis Senior High school.</ListItem>
                  <ListItem>Has built many websites for projects.</ListItem>
                  <ListItem>Completed Harvards' Computer Science course CS50x.</ListItem>
                  <ListItem>Years of experience in tutoring in math and coding.</ListItem>
                </UnorderedList>
              </Box>
              <Box w='100%'>
                <Image
                  src='https://cdn.discordapp.com/attachments/960779228226408478/962792925002076280/SPOILER_unknown.png'
                  alt='photo'
                  height='300'
                  width='300'
                />
              </Box>
            </Stack>
          </SimpleGrid>
        </main>
      </div>
    </Fragment>
  );
}
