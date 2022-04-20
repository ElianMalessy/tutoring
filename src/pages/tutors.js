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
const tutorInfo = [
  {
    name: 'Elian Malessy',
    title: 'Founder/President',
    info: [
      'Junior at Davis Senior High school.',
      'Has built many websites for projects.',
      "Completed Harvards' Computer Science course CS50x.",
      'Years of experience in tutoring in math and coding.'
    ],
    image: 'https://ca.slack-edge.com/T03512BBZED-U0391F9FPJT-d36fab942284-512'
  },
  {
    name: 'David Wang',
    title: 'Co-Founder/Vice President',
    info: [
      'Junior at Davis Senior High school',
      'Software Developer in 1678 Citrus Circuits FRC Robotics',
      'Vice-President of the Davis Coding Club',
      'Web Developer HTML/CSS/JS'
    ],
    image: 'https://ca.slack-edge.com/T03512BBZED-U035C6K9KEU-cc424259e2ec-512'
  }
];

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
              If you want to join KCT as a tutor, you can sign up here.{' '}
              <Text as='span' fontWeight={700}>
                Note:{' '}
              </Text>
              You must be in high school to be a tutor.
              <Button ml='1rem' onClick={() => router.push('https://forms.gle/koAyAzqRDmggjBRZA')}>
                Sign up
              </Button>
            </Text>
            <hr />
            {tutorInfo.map((tutor, index) => (
              <Fragment>
                <Stack direction={['column', 'row']} w='80vw' spacing={'2rem'} key={index} mb='1rem'>
                  <Box w='100%'>
                    <TutorName>{tutor.name}</TutorName>
                    <Title>{tutor.title}</Title>
                    <UnorderedList fontSize={'xl'}>
                      {tutor.info.map((info, index) => <ListItem key={index}>{info}</ListItem>)}
                    </UnorderedList>
                  </Box>
                  <Box w='100%'>
                    <Image src={tutor.image} alt={`photo of ${tutor.name}`} height='300' width='300' />
                  </Box>
                </Stack>
              </Fragment>
            ))}
          </SimpleGrid>
        </main>
      </div>
    </Fragment>
  );
}
