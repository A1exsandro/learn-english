import { Flex, Button, NavLink, Box } from '@mantine/core' 
import Link from 'next/link'

export default function NavContent () {  

  return (
    <Box w={130}>
      <Link style={{textDecoration: 'none'}} href="/">
        <NavLink label="Home" />
      </Link>

      <Link style={{textDecoration: 'none'}} href="/english">
        <NavLink label="English" />
      </Link>

      <Link style={{textDecoration: 'none'}} href="/exercise">
        <NavLink label="Exercises" />
      </Link>

      <Link style={{textDecoration: 'none'}} href="/grammar/article">
        <NavLink label="Articles" />
      </Link>

      <Link style={{textDecoration: 'none'}} href="/grammar/noun">
        <NavLink label="Noun" />
      </Link>

      <Link style={{textDecoration: 'none'}} href="/grammar/pronoun">
        <NavLink label="Pronouns" />
      </Link>
 
      <NavLink label="Verb" childrenOffset={28}>
        <Link style={{textDecoration: 'none'}} href="/grammar/verbs/modal">
          <NavLink label="Modal Verbs" />
        </Link>
      </NavLink>
      </Box>
  )
}