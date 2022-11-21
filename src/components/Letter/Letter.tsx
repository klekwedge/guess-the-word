import { Button } from "@chakra-ui/react";
import { BaseSyntheticEvent } from "react";

interface LetterProps {
  letter: string;
  word: string;
  onDecreaseAttempt: () => void;
  addGuessedLetters: (guessedLetter: string) => void;
  guessedLetters: string[];
}

export default function Letter({
  letter,
  word,
  onDecreaseAttempt,
  addGuessedLetters,
  guessedLetters,
}: LetterProps) {
  const clickButton = (e: BaseSyntheticEvent) => {
    e.target.disabled = true;
    addGuessedLetters(e.target.innerText);
    if (!word.includes(e.target.innerText)) {
      onDecreaseAttempt();
    }
  };

  return (
    <Button
      w="10px"
      colorScheme="blue"
      border="1px solid black"
      onClick={clickButton}
      style={{
        backgroundColor:
          guessedLetters.find((item) => item === letter) &&
          word.includes(letter)
            ? "#00C600"
            : "",
      }}
      disabled={guessedLetters.find((item) => item === letter) ? true : false}
    >
      {letter}
    </Button>
  );
}
