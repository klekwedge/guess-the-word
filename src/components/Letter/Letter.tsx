import { Button } from "@chakra-ui/react";

interface LetterProps {
  letter: string;
}

export default function Letter({ letter }: LetterProps) {
  return (
    <Button w="10px" colorScheme="blue" border="1px solid black">
      {letter.toUpperCase()}
    </Button>
  );
}
