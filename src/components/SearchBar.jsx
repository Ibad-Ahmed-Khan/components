import { Flex, Link, Text, VStack } from "@chakra-ui/react";
import { FaCaretUp } from "react-icons/fa";

const SearchBar = () => {
  return (
    <Flex
      pt="5rem"
      flexDirection="column"
      id="SearchBar"
      fontFamily="Protest Riot"
      align="center"
      // justify="center"
      h="100vh"
      color="white"
      bg="gray.300"
    >
      <Text fontSize="2xl" cursor="pointer" letterSpacing="2px">
        SearchBar
      </Text>
      <VStack
        align="center"
        justify="center"
        w="full"
        h="full"
        fontWeight="200"
        color="#000"
      ></VStack>
    </Flex>
  );
};

export default SearchBar;
