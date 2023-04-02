import { Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

interface WordProps {
  word: string[];
  guessedLetters: string[];
}

export default function Word({ word, guessedLetters }: WordProps) {
  return (
    <Flex fontSize="40px" gap="5px">
      {word.map((item) => (
        <span key={uuidv4()}>
          {guessedLetters.find((guessedLetter) => guessedLetter === item)
            ? item
            : "_"}
        </span>
      ))}
    </Flex>
  );
}
