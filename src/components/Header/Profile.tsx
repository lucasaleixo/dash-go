import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Aleixo</Text>
          <Text color="gray.300" fontSize="small">
             lap15.ufpr@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Lucas Aleixo" src="https://github.com/lucasaleixo.png" />
    </Flex>
  );
}