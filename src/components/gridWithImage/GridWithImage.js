import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid, useColorMode } from '@chakra-ui/react';
import { Fragment } from 'react';

export default function StatsGridWithImage() {
  const { colorMode } = useColorMode();

  return (
    <Box position={'relative'} zIndex={0} w='100vw'>
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
        {colorMode == 'dark' && <Flex bgGradient={'linear(to-r, gray.800 8%, transparent)'} w={'full'} h={'full'} />}
        {colorMode == 'light' && <Flex bgGradient={'linear(to-r, white 8%, transparent)'} w={'full'} h={'full'} />}
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack flex={1} justify={{ lg: 'center' }} py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Heading mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                “Everybody should learn to program a computer, because it teaches you how to think.”
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
              </Heading>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'}>{stat.content}</Text>
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
        <StatsText>Tutoring</StatsText> so that it is easier for people of all backgrounds to be exposed to coding.
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
