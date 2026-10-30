import React from "react";
import {Box, Flex, HStack, Link} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          direction="column"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          py={4}
          gap={1}
        >
          <p>Isaac Van Horn • © 2025 - {new Date().getFullYear()}</p>
          <HStack spacing={4} fontSize="sm" color="gray.400">
            <Link as={RouterLink} to="/privacy">Privacy Policy</Link>
            <Link as={RouterLink} to="/terms">Terms of Service</Link>
          </HStack>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
