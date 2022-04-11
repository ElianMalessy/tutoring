import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react';
import { Fragment, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function StatsGridWithImage({ children }) {
  const { colorMode } = useColorMode();
  const refArr = [];
  const controlArr = [];
  for (let i = 0; i < 6; i++) {
    let controls = useAnimation();
    controlArr[i] = controls;
    const [ref, inView] = useInView();
    refArr[i] = [ref, inView];
  }
  useEffect(() => {
    for (let i = 0; i < 6; i++) {
      if (refArr[i][1]) controlArr[i].start({ x: 0, opacity: 1 });
    }
  });

  return (
    <Box position={'relative'} zIndex={0} w='100vw'>
      {children}
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage='url(&#39;https://gluiq.com/wp-content/uploads/2019/04/Coding-screen.png&#39;)'
        backgroundSize={'cover'}
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        position={'absolute'}
        width={'62%'}
        insetY={0}
        right={0}
      >
        {colorMode == 'dark' && (
          <Flex
            style={{
              background:
                'linear-gradient(to right, #1A202C 8%, transparent), linear-gradient(to bottom, #1A202C, transparent 50%)'
            }}
            w={'full'}
            h={'full'}
          />
        )}
        {colorMode == 'light' && <Flex bgGradient={'linear(to-r, white 8%, transparent)'} w={'full'} h={'full'} />}
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }} mb='3rem'>
          <Stack
            flex={1}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 0 }}
            style={{ paddingTop: '5rem !important' }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <motion.div
                ref={refArr[0][0]}
                initial={{ x: -300, opacity: 0 }}
                animate={controlArr[0]}
                transition={{ ease: 'easeOut', duration: 1 }}
              >
                <Heading mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                  “Everybody should learn to program a computer, because it teaches you how to think.
                  <motion.div
                    ref={refArr[1][0]}
                    initial={{ x: -300, opacity: 0 }}
                    animate={controlArr[1]}
                    transition={{ ease: 'easeOut', duration: 1 }}
                  >
                    <Text
                      fontFamily={'heading'}
                      fontWeight={700}
                      textTransform={'uppercase'}
                      mb={3}
                      fontSize={'xl'}
                      color={'gray.500'}
                    >
                      - Steve Jobs
                    </Text>
                  </motion.div>
                </Heading>
              </motion.div>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat, index) => (
                <Box key={stat.title}>
                  <motion.div
                    ref={refArr[index + 2][0]}
                    initial={{ x: -300, opacity: 0 }}
                    animate={controlArr[index + 2]}
                    transition={{ ease: 'easeOut', duration: 1 }}
                  >
                    <Text fontFamily={'heading'} fontSize={'3xl'} mb={3}>
                      {stat.title}
                    </Text>
                    <Text fontSize={'xl'}>{stat.content}</Text>
                  </motion.div>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'Free',
    content: (
      <Fragment>
        <StatsText>Tutoring</StatsText> to make it easier for people of all backgrounds to be exposed to coding.
      </Fragment>
    )
  },
  {
    title: 'Structured',
    content: (
      <Fragment>
        <StatsText>Curriculum </StatsText> and teaching environment where students can thrive.
      </Fragment>
    )
  },
  {
    title: '1 on 1',
    content: (
      <Fragment>
        <StatsText>Sessions</StatsText> to help students and guide them to solve their individual problems.
      </Fragment>
    )
  },
  {
    title: 'Group',
    content: (
      <Fragment>
        <StatsText>Classes</StatsText> where students are clustered together by skill level and can learn with friends.
      </Fragment>
    )
  }
];
