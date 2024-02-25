import { Box, Button, Flex, Input, Link, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCaretUp, FaGhost, FaTimes } from "react-icons/fa";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setData(res.data.users));
  }, []);

  return (
    <Flex
      pt="5rem"
      flexDirection="column"
      id="SearchBar"
      fontFamily="Protest Riot"
      align="center"
      minH="100vh"
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
        pos="relative"
      >
        <Input
          variant="flushed"
          w="20rem"
          placeholder="Search"
          borderBottom="2px solid #fff"
          type="search"
          value={search}
          onChange={handleSearchChange}
        />
        <Box lineHeight="2rem" color="#000">
          {search.trim() === "" ? (
            <Text></Text>
          ) : (
            <Text transition="all 1s ease-in-out">
              {data.map((item, index) => {
                return (
                  <Text
                    display={
                      item.firstName
                        .toLowerCase()
                        .trim()
                        .startsWith(search.trim())
                        ? "block"
                        : "none"
                    }
                    transition="all 1s ease-in-out"
                    key={index}
                    p="2"
                  >
                    <Flex align="center" justify="space-between" w="20rem">
                      <Text>{item.firstName}</Text>
                    </Flex>
                  </Text>
                );
              })}
            </Text>
          )}
        </Box>
      </VStack>
    </Flex>
  );
};

export default SearchBar;
