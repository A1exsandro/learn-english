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
      <Link href="/exercise">
        <Button variant='subtle'>Exercise</Button>
      </Link>
      <Link href="/grammar/article">
        <Button variant='subtle'>Aticle</Button>
      </Link>
      <Link href="/grammar/noun">
        <Button variant='subtle'>Noun</Button>
      </Link>
      <Link href="/grammar/pronoun">
        <Button variant='subtle'>Pronoun</Button>
      </Link>
      <Link href="/grammar/verbs/verb">
        <Button variant='subtle'>Verb</Button>
      </Link>
      <Link href="/grammar/verbs/modal">
        <Button variant='subtle'>Modal Verbs</Button>
      </Link>
    </Flex>
  )
}