import { Box, Link as ChakraLink, Container, Heading, Span, Text } from "@chakra-ui/react";
import { LuDices } from "react-icons/lu";
import NextLink from "next/link"

import Filters from "./filters";

export default function Menu() {
  return (
    <>
      <Box>
        <Box height={1} bg={{ base: 'green.400', _dark: 'green.600' }} w={'100vw'} />
        <Box height={1} bg={{ base: 'yellow', _dark: 'yellow.300' }} w={'100vw'} />
        <Box height={1} bg={{ base: 'blue.600', _dark: 'blue.700' }} w={'100vw'} />
      </Box>
      <Container px="16" colorPalette={'pink'}>
        <Box
          my={3}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'end'}
        >
          <Box>
            <ChakraLink asChild variant="underline">
              <NextLink href="/">
                <Heading
                  color={{ base: 'pink.600', _dark: 'pink.400' }}
                  display={'flex'}
                  justifyItems={'center'}
                  alignItems={'center'}
                >
                  <Span mr={2}><LuDices size={28} /></Span> Preço Real
                </Heading>
              </NextLink>
            </ChakraLink>
            <Text color={{ base: 'gray.400', _dark: 'gray.500' }}>Monitor de preços dos alimentos no Brasil</Text>
          </Box>
          <Filters />
        </Box>
      </Container>
    </>
  )
}
