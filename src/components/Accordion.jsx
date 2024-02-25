import { Flex, Box, Text, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaCaretDown, FaMinusSquare, FaPlusSquare } from "react-icons/fa";

const Accordion = () => {
  const [accordionItems, setAccordionItems] = useState([]);
  const [allExpanded, setAllExpanded] = useState(false);

  const handleToggleAccordion = (index) => {
    if (accordionItems.includes(index)) {
      setAccordionItems(accordionItems.filter((item) => item !== index));
      console.log(accordionItems.filter((item) => item !== index));
    } else {
      setAccordionItems([...accordionItems, index]);
      console.log([...accordionItems, index]);
    }
  };

  const handleExpandCollapseAll = () => {
    if (allExpanded) {
      setAccordionItems([]);
    } else {
      const allIndexes = Array.from(
        { length: Data.length },
        (_, index) => index
      );
      setAccordionItems(allIndexes);
    }
    setAllExpanded(!allExpanded);
  };

  const Data = [
    {
      title: "Content 1",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Content 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Content 3",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Content 4",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      <VStack color="gray.600">
        <SimpleGrid
          mt="2rem"
          gap="4rem"
          alignItems="center"
          w="full"
          h="full"
          justifyContent="center"
        >
          <Button
            variant="outline"
            border="2px solid"
            onClick={handleExpandCollapseAll}
            color="black.700"
            borderRadius="md"
            px={4}
            py={2}
            _hover={{ bg: "black.700" }}
          >
            <Flex align="center" w="full" justify="space-between">
              <Text>{allExpanded ? "Collapse All" : "Expand All"}</Text>
              <Text>{allExpanded ? <FaMinusSquare /> : <FaPlusSquare />}</Text>
            </Flex>
          </Button>

          <Box>
            {Data.map((item, index) => {
              return (
                <VStack spacing="0" w="13rem">
                  <Flex
                    w="full"
                    align="center"
                    justify="space-between"
                    pt="2"
                    pb="2"
                    cursor="pointer"
                    onClick={() => handleToggleAccordion(index)}
                  >
                    <Text> {item.title} </Text>
                    <Box
                      transition="all .4s ease-in-out"
                      className="icon"
                      as={FaCaretDown}
                      transform={
                        accordionItems.includes(index)
                          ? "rotate(180deg)"
                          : "rotate(0deg)"
                      }
                    />
                  </Flex>
                  <Text
                    maxH={accordionItems.includes(index) ? "100px" : "0"}
                    borderBottom="2px solid"
                    overflow="hidden"
                    transition="all 0.4s ease-in-out"
                  >
                    {item.content}
                  </Text>
                </VStack>
              );
            })}
          </Box>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};

export default Accordion;
