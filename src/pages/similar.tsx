import React, { useState } from "react"
import { Box, Button, Flex, Group, Modal, TextInput } from "@mantine/core"
import { useForm } from '@mantine/form'

export default function Similar () {
  interface NewWord {
    word: string;
    similar: string;
    first: boolean;
  }

  const [opened, setOpened] = useState(false)
  const [buttonText, setButtonText] = useState<string[]>([])
  const [newWords, setNewWords] = useState([
    {
      word: 'Write',
      similar: 'White',
      first: true
    },
    {
      word: 'Back',
      similar: 'Black',
      first: true
    },
    {
      word: 'Sort',
      similar: 'Short',
      first: true
    },
    {
      word: 'Hope',
      similar: 'Hop',
      first: true
    },
  ]) 
 
  // Change content button
  const handleClick = (i: number, nw: NewWord) => {
    const newButtonText = [...buttonText]
    nw.first = !nw.first
    newButtonText[i] = nw.first === true ? nw.word : nw.similar
    setButtonText(newButtonText) 
  }

  const form = useForm({
    initialValues: {
      word: '',
      similar: '',
      first: true
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
              label="Similar"
              placeholder="Similar"
              {...form.getInputProps('similar')}
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
            color={nw.first === true ? 'orange' : 'lime'} 
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