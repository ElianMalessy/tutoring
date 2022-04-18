import { Stack } from '@chakra-ui/react';
import MenuItem from './MenuItem';
export default function MenuLinks() {
  return (
    <Stack
      spacing={8}
      align='center'
      justify={['center', 'space-between', 'flex-end', 'flex-end']}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to='/'>Home</MenuItem>
      <MenuItem to='https://forms.gle/yoZH6XCvBq4VX8yZ9'>Sign up</MenuItem>
      <MenuItem to='/classes'>Classes</MenuItem>
      <MenuItem to='/tutors'>Tutors</MenuItem>
    </Stack>
  );
}
