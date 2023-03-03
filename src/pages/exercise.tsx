import { NewWord, useWords} from "@/contexts/Words"
import { Button, Flex } from "@mantine/core"
import { useEffect, useState } from "react"

export default function Exercise () {
  // let nRandons: number[] = []
  const { newWords, setNewWords } = useWords()
  // const [resButton1, setResButton1] = useState<string>()
  // const [arrayRes, setArrayRes] = useState<NewWord[]>([]) 
  // const [res, setRes] = useState<string[]>([])
  
  // useEffect(() => { 
    

  //   for (let i = 0; i < 4; i++) {   
  //     let nRandom

  //     do {
  //       nRandom = Math.floor(Math.random() * 4)   
  //     } while (nRandons.includes(nRandom))
      
  //     nRandons.push(nRandom) 
  //   } 
  //   console.log(nRandons)
  //   nRandons.map((nr) => (
  //     setRes([...res, newWords[nr].translation])
  //   ))
  // },[]) 
  // console.log(res)

  // const randomNumbers = ()  => {
  
  
  
  //   return nRandons
  // }
  // console.log(nRandons)
  // const arrayRes = randomNumbers()
  
  // console.log(arrayRes) 
  // console.log(arrayRes)
  

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
        
            

            {/* <Button>{res}</Button> */}
          
      </Flex>
    </>
  )
}