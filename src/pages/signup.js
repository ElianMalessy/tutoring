import styles from '../../styles/Home.module.css';
import CardWithIllustration from '../components/newsletter/Newsletter';
import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';
import { Flex, Stack } from '@chakra-ui/react';

export default function signup() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Flex justify={'center'} py={12}>
          <Stack>
            <iframe
              src='https://docs.google.com/forms/d/e/1FAIpQLScUNb3u1DgVhy0TrJhjfa5pTDN5nD5BnMq7hNTmfJ19_5wqbQ/viewform?embedded=true'
              width='640'
              height='3000'
              frameBorder='0'
              marginHeight='0'
              marginWidth='0'
              scrolling='no'
            >
              Loading…
            </iframe>
            <CardWithIllustration />
          </Stack>
        </Flex>
      </main>
    </Fragment>
  );
}
