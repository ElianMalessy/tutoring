import { Stack } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import { useColorMode, Button } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
export default function MenuLinks() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      spacing={8}
      align='center'
      justify={['center', 'space-between', 'flex-end', 'flex-end']}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
    >
      <Button onClick={toggleColorMode} aria-label='colorMode Selector'>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
      <MenuItem to='/'>Home</MenuItem>
      <MenuItem to='/signup'>Signup</MenuItem>
      <MenuItem to='/classes'>Classes</MenuItem>
      <MenuItem to='/tutors'>Tutors</MenuItem>
    </Stack>
  );
}
