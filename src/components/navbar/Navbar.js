import { useState } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import MenuLinks from './MenuLinks';
import MenuToggle from './MenuToggle';
import Logo from './Logo';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      p={8}
      bg={['grey']}
      position='sticky'
      top='0'
      zIndex={1}
    >
      <Logo w='100px' color={['white', 'white', 'primary.500', 'primary.500']} />

      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }} flexBasis={{ base: '100%', md: 'auto' }}>
        <MenuLinks isOpen={isOpen} />
      </Box>
    </Flex>
  );
}
