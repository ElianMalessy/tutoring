import Navbar from '../components/navbar/Navbar';
import { Fragment } from 'react';
import { Flex } from '@chakra-ui/react';

export default function tutors() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Flex justify={'center'} py={12}>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSc9zILGMaX6SK0mbQoDthzf1zEQGeVOReQB5JUOkmShBehU4g/viewform?embedded=true'
            width='640'
            height='1330'
            frameBorder='0'
            marginHeight='0'
            marginWidth='0'
            scrolling='no'
          >
            Loading…
          </iframe>
        </Flex>
      </main>
    </Fragment>
  );
}
