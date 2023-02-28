import { useWords} from "@/contexts/Words"
import { Button, Flex, Text } from "@mantine/core"

export default function Exercise () {
  const { newWords, setNewWords } = useWords()
  console.log(newWords)

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
        <Button>{newWords[0].word}</Button>
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
        <Button>{newWords[1].translation}</Button>
        <Button>{newWords[2].translation}</Button>
        <Button>{newWords[0].translation}</Button>
        <Button>{newWords[3].translation}</Button>
      </Flex>
    </>
  )
}