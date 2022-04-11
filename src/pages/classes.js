import styles from '../../styles/Home.module.css';
import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';
import { Box, Heading, SimpleGrid, Text, useColorModeValue, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
export default function classes() {
  const bg = useColorModeValue('gray.300', 'gray.900');
  const router = useRouter();

  return (
    <Fragment>
      <Navbar />
      <div className={styles.container}>
        <Head>
          <title>Classes - Davis Coding Tutoring</title>
          <meta name='description' content='Free coding tutoring home page' />
        </Head>
        <main className={styles.main}>
          <SimpleGrid h='100%' gap={4} maxW='80vw' py='1rem'>
            <Heading mt='0.5rem'>Our Classes</Heading>
            <Text mt='-1rem'>
              Note: As of now, our classes teach exclusively Scratch, HTML, CSS, and Javascript. There may be an
              expansion to include other languages in the future.
            </Text>
            <hr />
            <Card bg={bg} py='0.75rem'>
              <Heading textAlign={'center'}>Group Lessons</Heading>
              <Btext mt='0.5rem'>
                <Btext as='span' fontWeight={700}>
                  Free{' '}
                </Btext>
                classes where students are grouped together with a max size of 4 students.
              </Btext>
              <Btext>The level of tutoring ranges from beginner to intermediate.</Btext>
              <Btext mb='0.5rem'>Classes meet twice per week.</Btext>
              <hr />
              <Btext fontWeight={700} fontSize={'2rem'}>
                Beginner:
              </Btext>
              <Btext mb='0.5rem'>
                Beginner students are introduced to core programming concepts with scratch and move on to Javascript
                which they will use to create websites.
              </Btext>
              <hr />
              <Btext fontWeight={700} fontSize={'2rem'}>
                Intermediate:
              </Btext>
              <Btext mb='0.5rem'>
                Intermediate students are introduced to more advanced programming concepts with Javascript such as
                datastructures as well as how to make complex websites with user authentication and databases.
              </Btext>
              <Button onClick={() => router.push('/signup')}>Sign Up</Button>
            </Card>
            <Card bg={bg} py='0.75rem'>
              <Heading textAlign={'center'}>1 on 1 Lessons</Heading>
              <Btext mt='0.5rem'>
                <Btext as='span' fontWeight={700}>
                  Free{' '}
                </Btext>
                classes for students of all skill levels.
              </Btext>
              <Btext>
                Students will go over all of the same curriculum as the group classes but will have better access to
                tutors.
              </Btext>
              <Btext mb='0.5rem'>Classes meet once per week.</Btext>
              <Button onClick={() => router.push('/signup')}>Sign Up</Button>
            </Card>
          </SimpleGrid>
        </main>
      </div>
    </Fragment>
  );
}

const Card = (props) => <Box {...props} borderRadius={'1rem'} mt='0.5rem' px='1rem' />;
const Btext = (props) => <Text fontSize={'1.5rem'} {...props} />;
