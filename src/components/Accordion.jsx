import { Flex, Box, Text, VStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Accordion = () => {
  const [accordionItems, setAccordionItems] = useState(999);

  const handleToggleAccordion = (index) => {
    if (accordionItems == index) {
      setAccordionItems(999);
    } else {
      setAccordionItems(index);
    }
  };

  const Data = [
    {
      title: "Content 1",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isActive: false,
    },
    {
      title: "Content 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isActive: false,
    },
    {
      title: "Content 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isActive: false,
    },
    {
      title: "Content 4",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      isActive: false,
    },
  ];

  return (
    <Flex
      pt="5rem"
      flexDirection="column"
      id="Accordion"
      fontFamily="Protest Riot"
      align="center"
      minH="100vh"
      color="white"
      bg="gray.300"
    >
      <Text fontSize="2xl" cursor="pointer" letterSpacing="2px">
        Accordion
      </Text>
      <VStack
        align="center"
        justify="center"
        w="full"
        h="full"
        fontWeight="200"
        color="#000"
        p="10"
      >
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="4rem">
          {Data.map((item, index) => {
            return (
              <VStack w="13rem" p="2">
                <Flex
                  w="full"
                  align="center"
                  justify="space-between"
                  border="3px solid"
                  cursor="pointer"
                  p="2"
                  onClick={() => handleToggleAccordion(index)}
                >
                  <Text> {item.title} </Text>
                  <Box
                    transition="all .4s ease-in-out"
                    className="icon"
                    as={FaCaretDown}
                    transform={
                      accordionItems == index
                        ? "rotate(180deg)"
                        : "rotate(0deg)"
                    }
                  />
                </Flex>
                <Text
                  border="3px solid"
                  p="2"
                  transform={
                    accordionItems == index ? "scale(1,1)" : "scale(1,0)"
                  }
                  transformOrigin="top"
                  transition="all .4s ease-in-out"
                >
                  {item.content}
                </Text>
              </VStack>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default Accordion;
