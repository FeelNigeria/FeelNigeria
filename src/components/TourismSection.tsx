import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import tourismSection from "../assets/img/torism-section.jpeg";

const TourismSection = () => {
  return (
    <SimpleGrid
      templateRows="repeat(1, 1fr)"
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
      gap={3}
      className="bg-light"
      marginY={3}
    >
      <Image
        src={tourismSection}
        alt="tourism"
        objectFit="cover"
        filter="brightness(50%)"
      />
      <Box
        bg="white"
        py={{ base: 10, md: 20 }}
        px={{ base: 5, md: 20 }}
        textAlign="center"
      >
        <VStack gap={3}>
          <Heading as="h2" size="xl" fontWeight="semibold">
            Discover the Soul of Nigeria
          </Heading>

          {/* Custom horizontal line under heading */}
          {/* <Box height="1px" width="300px" bg="black" /> */}

          <Text maxW="3xl" color="gray.700">
            Unveil Nigeria's vibrant culture, breathtaking landscapes, and
            captivating history with Feel Nigeria. We are your premier partner
            in crafting authentic and immersive travel experiences, connecting
            you to the heart and soul of this extraordinary nation.
          </Text>

          <Text maxW="3xl" color="gray.700">
            Let Feel Nigeria be your gateway to showcasing the true essence of
            Nigeria
          </Text>

          {/* Custom vertical bar at bottom */}
          <Box width="1px" height="20px" bg="gray.400" mt={4} />
        </VStack>
      </Box>
    </SimpleGrid>
  );
};

export default TourismSection;
