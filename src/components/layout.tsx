import { useState } from 'react' 

import {
  AppShell, 
  Header,
  Footer, 
  Navbar,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core'; 
import NavContent from '@/components/NavContent'

export default function Layout ({ children }: any) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 150, lg: 300 }}>
          <NavContent />
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color="#45f50d"
                mr="xl"
              />
            </MediaQuery>

            <Text
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              sx={{ fontFamily: 'Greycliff CF, sans-serif' }} 
              fz="xl"
              fw={700}
            >
              Learn English
            </Text>
          </div>
        </Header>
      }
      footer={
        <Footer height={30}>
          <Text
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
            ta="center"
            fz="xl"
            fw={700}
          >
            Never Stop Trying
          </Text>
        </Footer>
      }
    >
      {children}
  </AppShell>
  )
}