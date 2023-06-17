import React, { useRef, useState } from "react"
import { Box, Button, Flex, Group, Image, Modal, TextInput } from "@mantine/core"
import { useForm } from '@mantine/form'

// import { database, ref, set, get, push, onValue } from "../database/config_database"
import { child, DataSnapshot } from "firebase/database" 

export default function English () {
  interface NewWord {
    word: string;
    translation: string;
    english: boolean;
    image?: string;
    audio?: string;
  }

  const audioRef = useRef<HTMLAudioElement>(null)

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  const [opened, setOpened] = useState(false)
  const [buttonText, setButtonText] = useState<string[]>([])
  const [databaseWord, setDatabaseWord] = useState<string[]>([])
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

  // function readData() {
  //   const dbRef = ref(database)
  //   get(child(dbRef, "/word")).then((snapshot: DataSnapshot) => {
  //     if (snapshot.exists()) {
  //       //setDatabaseWord(snapshot.val().Alexsandro.newWord)
  //       console.log(
  //         snapshot.val().pir5HWose7WXMSWBFvrjoqbkxE83.nameWord
  //       )
  //     } else {
  //       console.log("no data available")
  //     }
  //   }).catch((error:any) => {
  //     console.error(error)
  //   })
  // } 
  // console.log(databaseWord)
 
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
      english: true,
      image: '',
      audio: ''
    }
  })
  console.log(newWords)

  return (
    <>
      <Group position="right"> 
        <Button onClick={() => setOpened(true)}>Add Word</Button>
        {/* <Button onClick={readData}>Get Database</Button> */}
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

            <TextInput 
              label="Image"
              placeholder="image"
              {...form.getInputProps('image')}
            />

            <TextInput 
              label="Audio"
              placeholder="audio"
              {...form.getInputProps('audio')}
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

      <Flex
        direction="column" 
        maw={240}
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/letmeask-333417.appspot.com/o/guava.jpg?alt=media&token=f99814cc-c0e7-425d-b028-fa16e73afe73"
          height={220}
          radius="md"
          mx="auto"
          fit="contain" 
          alt="Norway"
        /> 

        <audio ref={audioRef}>
          <source src="https://firebasestorage.googleapis.com/v0/b/letmeask-333417.appspot.com/o/guava.mp3?alt=media&token=9954a02d-e0cd-4010-b78d-3f91809b9391" />
        </audio>
       
        <Button onClick={playAudio} variant="light" color="blue" fullWidth mt="md" radius="md">
          Guava
        </Button>
      </Flex>

    </>
  )
}