import { Box, Button, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

const ZipCashSection = () => {
  return (
    <Box bg="white"  position="relative" overflow="hidden">
      <Container maxW="7xl" px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="top"
          justify="space-between"
          gap={{ base: 8, lg: 12 }}
          minH={{ base: "auto", lg: "80vh" }}
        >
          {/* Left Content */}
          <Box
            flex="1"
            maxW={{ base: "100%", lg: "50%" }}
            textAlign={{ base: "center", lg: "left" }}
            zIndex={2}
            pt={{ base: 3, md: 4, lg: 6 }}
          >
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl", lg: "3xl" }}
              color="#1C6348"
              fontWeight="900"
              lineHeight="1.1"
              mb={6}
              fontSize={{ base: "2.5rem", md: "3rem", lg: "3rem" }}
            >
              Apply for Your ZipCash Debit Card Today
            </Heading>
            
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="black"
              mb={{ base: 6, md: 8, lg: 16 }}
              lineHeight="1.4"
              maxW={{ base: "100%", lg: "90%" }}
            >
              Experience the security and convenience of having a debit card made for Nigerians
            </Text>
            
            <Button
              bg="#135734"
              color="white"
              size="lg"
              px={12}
              py={6}
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              borderRadius="60px"
              _hover={{
                bg: "#0f4428",
                transform: "translateY(-2px)",
              }}
              transition="all 0.3s ease"
              boxShadow="0 4px 15px rgba(19, 87, 52, 0.3)"
            >
              Apply
            </Button>
          </Box>

          {/* Right Content - Card Image */}
          <Box
            flex="1"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minH={{ base: "300px", md: "400px", lg: "500px" }}
          >
            <Box
              position="relative"
              transform={{ base: "rotate(3deg)", lg: "rotate(6.94deg)" }}
              transition="transform 0.3s ease"
              _hover={{
                transform: { base: "rotate(1deg) scale(1.02)", lg: "rotate(4deg) scale(1.02)" }
              }}
            >
              {/* Card Background */}
              <Box
                w={{ base: "280px", md: "400px", lg: "520px" }}
                h={{ base: "175px", md: "250px", lg: "325px" }}
                bg="linear-gradient(135deg, #1C6348 0%, #135734 100%)"
                borderRadius="20px"
                position="relative"
                boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"
              >
                {/* Card Chip */}
                <Box
                  w={{ base: "30px", md: "40px", lg: "50px" }}
                  h={{ base: "24px", md: "32px", lg: "40px" }}
                  bg="linear-gradient(145deg, #FFD700, #FFA500)"
                  borderRadius="6px"
                  position="absolute"
                  top={{ base: "30px", md: "40px", lg: "50px" }}
                  left={{ base: "30px", md: "40px", lg: "50px" }}
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: "2px",
                    left: "2px",
                    right: "2px",
                    bottom: "2px",
                    bg: "#FFD700",
                    borderRadius: "4px",
                  }}
                />
                
                {/* ZipCash Text */}
                <Text
                  position="absolute"
                  top={{ base: "20px", md: "30px", lg: "40px" }}
                  right={{ base: "20px", md: "30px", lg: "40px" }}
                  color="white"
                  fontSize={{ base: "1.5rem", md: "2.5rem", lg: "3.5rem" }}
                  fontWeight="900"
                  fontFamily="Inter, sans-serif"
                >
                  ZipCash
                </Text>
                
                {/* DEBIT Text */}
                <Text
                  position="absolute"
                  bottom={{ base: "20px", md: "25px", lg: "30px" }}
                  right={{ base: "20px", md: "30px", lg: "40px" }}
                  color="white"
                  fontSize={{ base: "0.8rem", md: "1.2rem", lg: "1.5rem" }}
                  fontWeight="700"
                  letterSpacing="0.2em"
                >
                  DEBIT
                </Text>
                
                {/* Card Number Placeholder */}
                <Box
                  position="absolute"
                  bottom={{ base: "50px", md: "70px", lg: "80px" }}
                  left={{ base: "30px", md: "40px", lg: "50px" }}
                  color="white"
                  fontSize={{ base: "0.7rem", md: "1rem", lg: "1.2rem" }}
                  fontFamily="monospace"
                  opacity={0.8}
                >
                  •••• •••• •••• ••••
                </Box>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
      
      {/* Footer Section */}
      <Box 
        bg="#135734" 
        py={8} 
        mt={16}
      >
        <Container maxW="7xl" px={{ base: 4, md: 8 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={6}
          >
            {/* Paystack Logo */}
            <Box>
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/7a06ea51edc2764e61f179057e154e4d0809c8d8?width=594"
                alt="Paystack"
                h={{ base: "40px", md: "60px" }}
                objectFit="contain"
              />
            </Box>
            
            {/* Sponsors Text */}
            <Text
              color="white"
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="500"
              textAlign="center"
            >
              Sponsors....
            </Text>
            
            {/* Partner Logo */}
            <Box>
              <Image
                src="https://api.builder.io/api/v1/image/assets/TEMP/86703393d57657bcc5b8f7b9c93517fa2c3868db?width=642"
                alt="Partner"
                h={{ base: "40px", md: "60px" }}
                objectFit="contain"
              />
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default ZipCashSection;
