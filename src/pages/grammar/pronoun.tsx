import { Button, Flex, Text } from "@mantine/core"
import { useState } from "react"

export default function Pronoun () {
  const [arrayPronoun] = useState<string[]>([
    'i', 'he', 'she', 'you', 'we', 'they', 'it'
  ])

  return (
    <>
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Text>Pronoun</Text>
        <Text>{arrayPronoun.length}</Text>
      </Flex>

      <Flex
        mih={50}
        bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {
          arrayPronoun.map((pronoun, i) => (
            <Button key={i}>{pronoun}</Button>
          ))
        }
      </Flex>
    </>
  )
}