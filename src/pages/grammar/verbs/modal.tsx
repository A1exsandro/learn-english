import { Button, Center, Flex, Popover, Text } from "@mantine/core";
import { useState } from "react";

export default function Modal () {
  const [arrayModal, setArrayModal] = useState([
    {
      modal: 'can',
      explanation: 'poder (habilidade ou possibilidade)'
    },
    {
      modal: 'could',
      explanation: 'poderia (habilidade ou possibilidade no passado)'
    },
    {
      modal: 'must',
      explanation: 'dever (obrigação, necessidade)'
    },
    {
      modal: 'may',
      explanation: 'poder (permissão ou possibilidade)'
    },
    {
      modal: 'might',
      explanation: 'poderia (permissão ou possibilidade no passado)'
    },
    {
      modal: 'should',
      explanation: 'deveria (obrigação, conselho, sugestão'
    },
    {
      modal: 'shall',
      explanation: 'dever (futuro próximo, sugestão, convite)'
    },
    {
      modal: 'will',
      explanation: 'vontade (futuro, promessa)'
    },
    {
      modal: 'would',
      explanation: 'iria (futuro no passado, condição)'
    },
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
          arrayModal.map((a, i) => (
            
            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Button key={i}>{a.modal}</Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="sm">{a.explanation}</Text>
              </Popover.Dropdown>
            </Popover>
          ))
        }
      </Flex>
    </>
  )
}