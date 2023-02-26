import { Flex, Button } from '@mantine/core' 
import Link from 'next/link'

export default function NavContent () {  

  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="xs"
      justify="flex-start"
      align="center"
      direction="column"
      wrap="wrap"
    >
      <Link href="/">
        <Button variant='subtle'>Home</Button>
      </Link>
      <Link href="/english">
        <Button variant='subtle'>English</Button>
      </Link>
    </Flex>
  )
}