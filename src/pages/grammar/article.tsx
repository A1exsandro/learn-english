import { Button, Flex, Text } from "@mantine/core"
import { useState } from "react"

export default function Article () {
  const [arrayArtigle] = useState<string[]>([
    'the', 'a', 'an'
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
        <Text>Article</Text>
        <Text>{arrayArtigle.length}</Text>
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
          arrayArtigle.map((article, i) => (
            <Button key={i}>{article}</Button>
          ))
        }
      </Flex>
    </>
  )
}