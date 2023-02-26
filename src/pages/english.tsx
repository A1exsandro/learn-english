import React, { useState } from "react"
import { Box, Button, Group, Modal, Paper, Text, TextInput, Transition } from "@mantine/core"
import { useForm } from '@mantine/form'

export default function English () {
  const [opened, setOpened] = useState(false)
  const [translation, setTranslation] = useState(false)
  const [newWords, setNewWords] = useState([
    {
      word: 'Rice',
      translation: 'Arroz'
    }
  ]) 

  const form = useForm({
    initialValues: {
      word: '',
      translation: '',
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
      <div>
      {
        newWords.map((nw, i) => (
          <Button 
            key={i}
            color={translation ? 'orange' : 'lime'} 
            onClick={() => setTranslation(!translation)}
          > 
            {!translation ? nw.word : nw.translation}
          </Button>
        ))
      }
      </div> 
    </>
  )
}