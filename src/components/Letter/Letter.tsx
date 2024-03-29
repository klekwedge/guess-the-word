import { Button } from "@chakra-ui/react";
import { BaseSyntheticEvent } from "react";

interface LetterProps {
  letter: string;
  word: string;
  onDecreaseAttempt: () => void;
  addGuessedLetters: (guessedLetter: string) => void;
  guessedLetters: string[];
  isGameOver: boolean;
}

export default function Letter({
  letter,
  word,
  onDecreaseAttempt,
  addGuessedLetters,
  guessedLetters,
  isGameOver,
}: LetterProps) {
  const clickButton = (e: BaseSyntheticEvent) => {
    addGuessedLetters(e.target.innerText);

    if (!word.includes(e.target.innerText)) {
      onDecreaseAttempt();
    }
  };

  return (
    <Button
      disabled={
        !!(isGameOver || guessedLetters.find((item) => item === letter))
      }
      w="10px"
      colorScheme="blue"
      border="1px solid black"
      onClick={clickButton}
      style={{
        backgroundColor:
          guessedLetters.find((item) => item === letter) &&
          word.includes(letter)
            ? "#14e414"
            : "",
      }}
    >
      {letter}
    </Button>
  );
}
