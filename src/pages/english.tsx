import React, { useState } from "react"
import { Box, Button, Flex, Group, Modal, TextInput } from "@mantine/core"
import { useForm } from '@mantine/form'

export default function English () {
  interface NewWord {
    word: string;
    translation: string;
    english: boolean;
  }

  const [opened, setOpened] = useState(false)
  const [buttonText, setButtonText] = useState<string[]>([])
  const [newWords, setNewWords] = useState([
    {
      word: 'Rice',
      translation: 'Arroz',
      english: true
    },
    {
      word: 'Walk',
      translation: 'Andar',
      english: true
    },
    {
      word: 'Try',
      translation: 'Tentar',
      english: true
    },
    {
      word: 'Love',
      translation: 'Amar',
      english: true
    },
  ]) 
 
  // Change content button
  const handleClick = (i: number, nw: NewWord) => {
    const newButtonText = [...buttonText]
    nw.english = !nw.english
    newButtonText[i] = nw.english === true ? nw.word : nw.translation
    setButtonText(newButtonText) 
  }

  const form = useForm({
    initialValues: {
      word: '',
      translation: '',
      english: true
    }
  })

  return (
    <>
      <Group position="right"> 
        <Button onClick={() => setOpened(true)}>Add Word</Button>
      </Group>
      
     <Modal
        opened={opened}
        onClose={() => setOpened(false)} 
      >
        <Box sx={{ maxWidth: 300 }} mx="auto">
          <form onSubmit={form.onSubmit((values) => setNewWords([...newWords, values]))}>
            <TextInput 
              label="New Word"
              placeholder="word"
              {...form.getInputProps('word')}
            />

            <TextInput 
              label="Translation"
              placeholder="translation"
              {...form.getInputProps('translation')}
            />
            
            <Group position="right" mt="md">
              <Button type="submit" onClick={() => setOpened(false)}>New Word</Button>
            </Group>
          </form>
        </Box>
      </Modal>

      {/* NEW WORDS */}
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, .3)"
        gap="md"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
      >
      {
        newWords.map((nw, i) => ( 
          <Button 
            key={i}
            color={nw.english === true ? 'orange' : 'lime'} 
            onClick={() => handleClick(i, nw)}
          >  
            {buttonText[i] || nw.word}
          </Button>
        ))
      }
      </Flex>
    </>
  )
}