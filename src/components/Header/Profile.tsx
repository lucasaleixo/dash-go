import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Aleixo</Text>
        <Text color="gray.300" fontSize="small">
          lap15.ufpr@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Lucas Aleixo" src="https://github.com/lucasaleixo.png" />
    </Flex>
  );
}