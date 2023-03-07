import { NavLink, Box, ScrollArea } from '@mantine/core' 
import Link from 'next/link'

export default function NavContent () {  

  return (
    <ScrollArea 
      h={400} 
      w={140} 
      scrollbarSize={8} 
    >
      <Box w={138}>
        <Link style={{textDecoration: 'none'}} href="/">
          <NavLink label="Home" />
        </Link>

        <Link style={{textDecoration: 'none'}} href="/english">
          <NavLink label="English" />
        </Link>

        {/* GRAMMAR */}
        <NavLink label="Grammar" childrenOffset={28}>
          <Link style={{textDecoration: 'none'}} href="/grammar/article">
            <NavLink label="Articles" />
          </Link>

          <Link style={{textDecoration: 'none'}} href="/grammar/noun">
            <NavLink label="Noun" />
          </Link>

          <NavLink label="Adjective" childrenOffset={28}>
            <Link style={{textDecoration: 'none'}} href="/grammar/adjective">
              <NavLink label="Adjective" />
            </Link>
            <Link style={{textDecoration: 'none'}} href="/grammar/numeral">
            <NavLink label="Numeral" />
          </Link>
          </NavLink>

          <Link style={{textDecoration: 'none'}} href="/grammar/pronoun">
            <NavLink label="Pronouns" />
          </Link>
    
          <NavLink label="Verb" childrenOffset={28}>
            <Link style={{textDecoration: 'none'}} href="/grammar/verbs/modal">
              <NavLink label="Modal Verbs" />
            </Link>
          </NavLink>

          <Link style={{textDecoration: 'none'}} href="/grammar/adverb">
            <NavLink label="Adverb" />
          </Link>

          <Link style={{textDecoration: 'none'}} href="/grammar/preposition">
            <NavLink label="Preposition" />
          </Link>

          <Link style={{textDecoration: 'none'}} href="/grammar/conjunction">
            <NavLink label="Conjunction" />
          </Link>

          <Link style={{textDecoration: 'none'}} href="/grammar/interjection">
            <NavLink label="Interjection" />
          </Link>
        </NavLink>

        <Link style={{textDecoration: 'none'}} href="/idioms">
          <NavLink label="Idioms" />
        </Link>

        <Link style={{textDecoration: 'none'}} href="/exercise">
          <NavLink label="Exercises" />
        </Link>

        <Link style={{textDecoration: 'none'}} href="/opposite">
          <NavLink label="Opposite" />
        </Link>

        <Link style={{textDecoration: 'none'}} href="/similar">
          <NavLink label="Similar" />
        </Link>
      </Box>
    </ScrollArea>
  )
}