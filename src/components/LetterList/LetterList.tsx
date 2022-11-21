import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Letter from "../Letter/Letter";
import Word from "../Word/Word";

const KEYS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function LetterList() {
  const [attempt, setAttempt] = useState(5);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const word = "Hello".toUpperCase();

  const decreaseAttempt = () => {
    setAttempt(attempt - 1);
  };

  const addGuessedLetters = (guessedLetter: string) => {
    setGuessedLetters([...guessedLetters, guessedLetter]);
  };

  if (attempt < 1) {
    return <h1>You lose!</h1>;
  }

  if (word.split("").every((letter) => guessedLetters.includes(letter))) {
    return <h1>You Win!</h1>;
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      gap="50px"
    >
      <h2>Your attempts: {attempt}</h2>

      <Word word={word.split("")} guessedLetters={guessedLetters} />
      <Flex gap="5px" maxW="600px" wrap="wrap">
        {KEYS.map((letter) => (
          <Letter
            key={uuidv4()}
            letter={letter}
            word={word}
            onDecreaseAttempt={decreaseAttempt}
            addGuessedLetters={addGuessedLetters}
            guessedLetters={guessedLetters}
          />
        ))}
      </Flex>
    </Flex>
  );
}
