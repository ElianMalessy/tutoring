import Link from 'next/link';
import { Text } from '@chakra-ui/react';
export default function MenuItem({ children, isLast, to = '/' }) {
  return (
    <Link href={to}>
      <Text display='block' fontWeight={600} cursor='pointer'>
        {children}
      </Text>
    </Link>
  );
}
