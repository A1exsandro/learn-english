import { Button, Center, Flex, Text } from "@mantine/core";
import { useState } from "react";

export default function Modal () {
  const [arrayModal, setArrayModal] = useState<string[]>([
    'can', 'could', 'must', 'may', 'might', 'should', 'shall', 'will', 'would'
  ])

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
        <Text>Modal Verbs</Text>
        <Text>{arrayModal.length}</Text>
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
          arrayModal.map((modal, i) => (
            <Button key={i}>{modal}</Button>
          ))
        }
      </Flex>
    </>
  )
}