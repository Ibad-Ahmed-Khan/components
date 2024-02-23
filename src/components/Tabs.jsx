import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaCaretUp } from "react-icons/fa";

const Tabs = () => {
  const [tab, setTab] = useState(0);

  const updateTodo = (index) => {
    setTab(index + 1);
  };

  const Data = [
    { name: "ibad", age: 22, email: "ibadahmedkhan90@gmail.com" },
    { name: "ubaid", age: 25, email: "ubaidahmedkhan90@gmail.com" },
    { name: "hamza", age: 23, email: "hamzakhan90@gmail.com" },
    { name: "suleman", age: 15, email: "sulemankhan90@gmail.com" },
  ];

  return (
    <Flex
      pt="5rem"
      flexDirection="column"
      id="Tabs"
      fontFamily="Protest Riot"
      align="center"
      h="100vh"
      color="white"
      bg="gray.300"
    >
      <Text fontSize="2xl" cursor="pointer" letterSpacing="2px">
        Rough
      </Text>
      <VStack
        align="center"
        justify="center"
        w="full"
        h="full"
        fontWeight="200"
        color="#000"
      >
        <Flex align="center" justify="center" gap="2rem">
          {Data.map((item, index) => {
            return (
              <Flex key={item.id} pos="relative">
                <Text
                  p="2"
                  borderRadius="md"
                  cursor="pointer"
                  onClick={() => updateTodo(index)}
                  bg={index + 1 == tab ? "white" : ""}
                  transform={
                    index + 1 == tab ? "translate(0%,90%)" : "translate(0%,0%)"
                  }
                  transformOrigin="inherit"
                  transition="all .25s ease-in-out"
                  border="3px solid #fff"
                >
                  Tab{index + 1}
                </Text>
              </Flex>
            );
          })}
        </Flex>
        <Box mt="4rem">
          {Data.map((item, index) => {
            return (
              <Flex
                flexDirection="column"
                transition="all .5s ease-in-out"
                display={index + 1 == tab ? "block" : "none"}
                textTransform="capitalize"
                p="4"
                borderRadius="md"
                bg="#fff"
              >
                <Text fontWeight="100">name : {item.name}</Text>
                <Text fontWeight="100">age : {item.age}</Text>
                <Flex>
                  <Text fontWeight="100">email:</Text>
                  <Link fontWeight="100">{item.email}</Link>
                </Flex>
              </Flex>
            );
          })}
        </Box>
      </VStack>
    </Flex>
  );
};

export default Tabs;
