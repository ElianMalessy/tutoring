import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function tutors() {
  const router = useRouter();

  return (
    <Fragment>
      <Navbar />
      <main>
        <Flex justify={'center'} py={12}>
          <Button onClick={() => router.push('https://forms.gle/koAyAzqRDmggjBRZA')}>Sign up</Button>
        </Flex>
      </main>
    </Fragment>
  );
}
