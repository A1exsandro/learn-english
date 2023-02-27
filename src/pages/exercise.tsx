import { useWords} from "@/contexts/Words"
import { Text } from "@mantine/core"

export default function Exercise () {
  const { newWords, setNewWords } = useWords()
  console.log(newWords)

  return (
    <Text>Exercise Page</Text>
  )
}