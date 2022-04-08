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
            Google Form
            <CardWithIllustration />
          </Stack>
        </Flex>
      </main>
    </Fragment>
  );
}
