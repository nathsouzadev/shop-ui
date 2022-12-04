import { Flex, IconButton, Text, Spacer } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export const Header = () => {
  return (
    <Flex p='2' minWidth='max-content' bg='#28a745' alignItems='center' gap='2'>
      <Text fontSize='xl' color='white'>
        Shop
      </Text>
      <Spacer />
      <IconButton
        colorScheme='blue'
        aria-label='Search database'
        icon={<SearchIcon />}
        ml='5'
      />
    </Flex>
  );
};
