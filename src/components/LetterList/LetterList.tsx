import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Letter from "../Letter/Letter";
import Word from "../Word/Word";

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
  const [attempt, setAttempt] = useState(5);

  const decreaseAttempt = () => {
    setAttempt(attempt - 1);
  };

  const word = "HELLO";
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      gap="50px"
    >
      <h2>Your attempts: {attempt}</h2>

      <Word word={word.split("")} />
      <Flex gap="5px" maxW="600px" wrap="wrap">
        {KEYS.map((letter) => (
          <Letter
            key={uuidv4()}
            letter={letter}
            word={word}
            attempt={attempt}
            onDecreaseAttempt={decreaseAttempt}
          />
        ))}
      </Flex>
    </Flex>
  );
}
