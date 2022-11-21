import { Box, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Letter from "../Letter/Letter";
import Word from "../Word/Word";
import words from "../../wordsList.json";

import { MdRestartAlt } from "react-icons/md";

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
  const [word, setWord] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  const getRandomWord = () => {
    setWord(words[Math.floor(Math.random() * words.length)].toUpperCase());
  };

  useEffect(() => {
    getRandomWord();
  }, []);

  const decreaseAttempt = () => {
    setAttempt(attempt - 1);
  };

  const addGuessedLetters = (guessedLetter: string) => {
    setGuessedLetters([...guessedLetters, guessedLetter]);
  };

  useEffect(() => {
    if (attempt < 1) {
      setIsGameOver(true);
    }
  }, [attempt]);

  const restartGame = () => {
    setGuessedLetters([]);
    setAttempt(5);
    getRandomWord();
  };

  if (word.split("").every((letter) => guessedLetters.includes(letter))) {
    return <h1>You Win!</h1>;
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      gap="30px"
    >
      <h2>Your attempts: {attempt}</h2>
      <Word word={word.split("")} guessedLetters={guessedLetters} />
      {attempt < 1 ? (
        <Flex flexDir="column" alignItems="center">
          <Heading as="h2" fontSize="20" fontWeight="400">
            You lose!
          </Heading>
          <Heading as="h2" fontSize="20" fontWeight="400" mb="3">
            Hidden word: {word}
          </Heading>
          <Heading
            as="h2"
            fontSize="20"
            fontWeight="400"
            onClick={restartGame}
            cursor="pointer"
            border="1px solid black"
            borderRadius="5"
          >
            <MdRestartAlt size="35" color="white" />
          </Heading>
        </Flex>
      ) : null}
      <Flex gap="5px" maxW="600px" wrap="wrap">
        {KEYS.map((letter) => (
          <Letter
            key={uuidv4()}
            letter={letter}
            word={word}
            onDecreaseAttempt={decreaseAttempt}
            addGuessedLetters={addGuessedLetters}
            guessedLetters={guessedLetters}
            isGameOver={isGameOver}
          />
        ))}
      </Flex>
    </Flex>
  );
}
