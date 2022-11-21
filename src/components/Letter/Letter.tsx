import { Button } from "@chakra-ui/react";
import { BaseSyntheticEvent } from "react";

interface LetterProps {
  letter: string;
  word: string;
  attempt: number;
  onDecreaseAttempt: () => void;
}

export default function Letter({
  letter,
  word,
  attempt,
  onDecreaseAttempt,
}: LetterProps) {
  const clickButton = (e: BaseSyntheticEvent) => {
    if (attempt > 1) {
      e.target.disabled = true;
      if (word.includes(e.target.innerText)) {
        e.target.style.backgroundColor = "#00C600";
      } else {
        onDecreaseAttempt();
      }
    }
  };

  return (
    <Button
      w="10px"
      colorScheme="blue"
      border="1px solid black"
      onClick={clickButton}
    >
      {letter.toUpperCase()}
    </Button>
  );
}
