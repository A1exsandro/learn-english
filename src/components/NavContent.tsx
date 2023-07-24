import { NavLink, Box, ScrollArea } from '@mantine/core' 
import Link from 'next/link'

import { navLabel, grammarArry } from '@/constants/nav'

export default function NavContent ({setOpened}: any) {   

  return (
    <ScrollArea 
      h={400} 
      w={140} 
      scrollbarSize={8} 
    >
      <Box w={138}>
        {
          navLabel.map((navL, i) => (
            <Link 
              key={i} 
              style={{textDecoration: 'none'}} 
              href={navL === 'Home' ? '/' : `/${navL.toLowerCase()}`}
              onClick={(o) => setOpened(!o)}
            >
              <NavLink label={navL} />
            </Link>
          ))
        }

        {/* GRAMMAR */}
        <NavLink label="Grammar" childrenOffset={28}>
          {
            grammarArry.map((grammar, i) => (
              <Link 
                key={i} style={{textDecoration: 'none'}} 
                href={`/grammar/${grammar.toLocaleLowerCase()}`}
                onClick={(o) => setOpened(!o)}
              >
                <NavLink label={grammar} />
              </Link>
            ))
          }
        </NavLink>
      </Box>
    </ScrollArea>
  )
}
