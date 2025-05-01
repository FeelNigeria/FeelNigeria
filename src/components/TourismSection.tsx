import {
  Box,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TourismSection = () => {
  return (
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
          captivating history with Feel Nigeria. We are your premier partner in
          crafting authentic and immersive travel experiences, connecting you to
          the heart and soul of this extraordinary nation.
        </Text>

        <Text maxW="3xl" color="gray.700">
          Let Feel Nigeria be your gateway to showcasing the true essence of
          Nigeria
        </Text>

        {/* Custom vertical bar at bottom */}
        <Box width="1px" height="20px" bg="gray.400" mt={4} />
        <Link
          to={"/booking"}
          className="btn btn-success rounded-pill py-2 px-4 ms-lg-4"
        >
          Discover Now
        </Link>
      </VStack>
    </Box>
  );
};

export default TourismSection;
