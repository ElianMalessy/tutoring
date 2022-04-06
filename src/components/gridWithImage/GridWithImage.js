import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { Fragment } from 'react';

export default function StatsGridWithImage() {
  return (
    <Box bg={'gray.800'} position={'relative'} zIndex={0} w='100vw'>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        backgroundImage='url(&#39;https://gluiq.com/wp-content/uploads/2019/04/Coding-screen.png&#39;)'
        backgroundSize={'cover'}
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        position={'absolute'}
        width={'60%'}
        insetY={0}
        right={0}
      >
        <Flex bgGradient={'linear(to-r, gray.800 8%, transparent)'} w={'full'} h={'full'} />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack flex={1} color={'gray.400'} justify={{ lg: 'center' }} py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
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

              <Text fontSize={'xl'} color={'gray.400'}>
                The NewLife™ technology allows you to monitor your crops and get complete insights at real time. The
                proprietary software/hardware ecosystem prevents your plants from getting neglected.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.400'}>
                    {stat.content}
                  </Text>
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
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: '10+',
    content: (
      <Fragment>
        <StatsText>Software modules</StatsText> for detailed monitoring and real-time analytics
      </Fragment>
    )
  },
  {
    title: '24/7',
    content: (
      <Fragment>
        <StatsText>Analytics</StatsText> enabled right in your dashboard without history limitations
      </Fragment>
    )
  },
  {
    title: '13%',
    content: (
      <Fragment>
        <StatsText>Farms</StatsText> in North America has chosen NewLife™ as their management solution
      </Fragment>
    )
  },
  {
    title: '250M+',
    content: (
      <Fragment>
        <StatsText>Plants</StatsText> currently connected and monitored by the NewLife™ software
      </Fragment>
    )
  }
];
