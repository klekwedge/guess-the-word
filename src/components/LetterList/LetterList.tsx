import { Box, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Letter from "../Letter/Letter";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default function LetterList() {
  return (
    <Box h="100vh" m='auto'>
      <Flex
        gap="5px"
        justifyContent="center"
        alignItems="center"
        maxW="600px"
        wrap="wrap"
      >
        {KEYS.map((letter) => (
          <Letter key={uuidv4()} letter={letter} />
        ))}
      </Flex>
    </Box>
  );
}
