import { Button, Flex, Popover, Text } from "@mantine/core";
import { useState } from "react";

export default function Idioms () {
  const [arrayIdioms, setArrayIdioms] = useState([
    {
      idiom: 'Piece of cake',
      means: 'algo fácil de fazer'
    },
    {
      idiom: 'Break a leg',
      means: 'boa sorte (geralmente usada antes de uma apresentação ou performance)'
    },
    {
      idiom: 'Bite the bullet',
      means: ' enfrentar uma situação difícil com coragem'
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
        <Text>Idioms</Text>
        <Text>{arrayIdioms.length}</Text>
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
          arrayIdioms.map((arr, i) => (
            <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Button>{arr.idiom}</Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Text size="sm">{arr.means}</Text>
              </Popover.Dropdown>
            </Popover>
          ))
        }
      </Flex>
    </>
  )
}