import { Text } from "@mantine/core"

import { ref, getDownloadURL } from "firebase/storage"
import { useEffect, useState } from "react"
import { getStorage } from '../services/firebase'
const storage = getStorage() 

export default function Words () {
  // GET DATA FROM FIREBASE
  const [images, setImages] = useState<String[]>([])
  const [sounds, setSounds] = useState<String[]>([])

  const data = [
    'butterfly',
    'avocado',
    'banana',
    'bathroom',
    'bedroom',
    'breakfast',
    'bridge',
    'brothers', 
    'closed',
    'cook',
    'dance',
    'eat',
    'fear',
    'fire',
    'film',
    'fruits',
    'kitchen',
    'night',
    'read',
    'open',
    'marketplace',
    'play',
    'smell',
    'sleep',
    'plant',
    'tired'
  ] 

  useEffect(() => {
  const promises = data.map((dt) => (
    getDownloadURL(ref(storage, `images/${dt}.jpeg`))
  ))

  const audioPromises = data.map((dt) => (
    getDownloadURL(ref(storage, `audio/${dt}.mp3`))
  ))

  Promise.all(promises)
    .then((urls) => setImages(urls)) 

  Promise.all(audioPromises)
    .then((audios) => setSounds(audios)) 

  },[data])

  console.log(images)
  return (
    <Text>Words Page</Text>
  )
} 
