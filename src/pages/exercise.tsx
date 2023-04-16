import { NewWord, useWords} from "@/contexts/Words"
import { Button, Flex } from "@mantine/core"
import { useEffect, useState } from "react"

export default function Exercise () {
  let nRandons: number[] = []
  const { newWords, setNewWords } = useWords()
  // const [resButton1, setResButton1] = useState<string>()
  // const [arrayRes, setArrayRes] = useState<NewWord[]>([]) 
  const [res, setRes] = useState<string[]>([])
  
 
    
  const answer = () => {
    for (let i = 0; i < 4; i++) {   
      let nRandom

      do {
        nRandom = Math.floor(Math.random() * 4)   
      } while (nRandons.includes(nRandom))
      
      nRandons.push(nRandom) 
    } 
    // console.log(nRandons)
    // nRandons.map((nr) => (
    //   setRes([...res, newWords[nr].translation])
    // ))

    return nRandons
  }


    // const test = answer().map((nr) => (
    //   setRes([...res, newWords[nr].translation])
    // ))

  const startPlay = () => {
    answer().map((nr) => newWords[nr].translation)
  }

  console.log(startPlay())
  
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
        <Button onClick={() => startPlay()}>Start</Button>
      </Flex>

      <Flex
        mih={50}
        bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      ></Flex>
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Button>{newWords[1].word}</Button>
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
          
          <Button>{}</Button>
          
        }
          
      </Flex>
    </>
  )
}