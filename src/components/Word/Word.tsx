import { Box, Flex } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

interface WordProps {
  word: string[];
}

export default function Word({ word }: WordProps) {
  return (
    <Flex fontSize="40px" gap="5px">
      {word.map((item) => (
        <span key={uuidv4()}>_</span>
      ))}
    </Flex>
  );
}
