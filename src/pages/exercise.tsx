import { useWords} from "@/contexts/Words"
import { Button, Flex } from "@mantine/core"

export default function Exercise () {
  const { newWords, setNewWords } = useWords()
  
  
  const randomNumbers = ()  => {
    let nRandons: number[] = []
    for (let i = 0; i < 4; i++) {
      let nRandom  

      do {
        nRandom = Math.floor(Math.random() * newWords.length)
      } while (nRandons.includes(nRandom))

      nRandons.push(nRandom)
    }
    
    return nRandons
  }
  const arrayNRandons = randomNumbers()
  console.log(arrayNRandons) 

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
        <Button>{newWords[arrayNRandons[0]].translation}</Button>
        <Button>{newWords[arrayNRandons[1]].translation}</Button>
        <Button>{newWords[arrayNRandons[2]].translation}</Button>
        <Button>{newWords[arrayNRandons[3]].translation}</Button>
      </Flex>
    </>
  )
}