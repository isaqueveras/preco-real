import NextLink from "next/link"
import { Card, Container, Link as ChakraLink, Table, Grid, GridItem, Tag, Box, Text } from "@chakra-ui/react"
import { LuGlobe } from "react-icons/lu";
import Menu from "@/components/menu";

const items = [
  { id: 1, name: "Arroz (5kg)", category: "Alimentos", variation: 0.2, price: "25,80", min: 20, max: 30 },
  { id: 2, name: "Feijão (1kg)", category: "Alimentos", variation: -0.2, price: "8,00", min: 6, max: 12 },
  { id: 3, name: "Óleo de soja (900ml)", category: "Alimentos", variation: 1, price: 10, min: 8, max: 14 },
  { id: 4, name: "Açúcar (5kg)", category: "Alimentos", variation: -0.4, price: 20, min: 18, max: 25 },
  { id: 5, name: "Leite (1L)", category: "Alimentos", variation: -1.2, price: 6, min: 5, max: 8 },
  { id: 6, name: "Café (500g)", category: "Alimentos", variation: 2.9, price: 15, min: 12, max: 18 },
  { id: 7, name: "Pão francês (1kg)", category: "Alimentos", variation: -0.2, price: 15, min: 12, max: 18 },
  { id: 8, name: "Carne bovina (1kg)", category: "Carnes", variation: 0.2, price: 40, min: 35, max: 50 },
  { id: 9, name: "Frango (1kg)", category: "Carnes", variation: 0.2, price: 18, min: 15, max: 22 },
  { id: 10, name: "Ovos (dúzia)", category: "Alimentos", variation: 0.2, price: 12, min: 10, max: 15 },
  { id: 11, name: "Batata (1kg)", category: "Hortifruti", variation: -7.2, price: 8, min: 6, max: 12 },
  { id: 12, name: "Tomate (1kg)", category: "Hortifruti", variation: -1.8, price: 10, min: 8, max: 14 },
  { id: 13, name: "Cebola (1kg)", category: "Hortifruti", variation: 2.7, price: 7, min: 5, max: 10 },
  { id: 14, name: "Banana (1kg)", category: "Hortifruti", variation: -3.5, price: 8, min: 6, max: 12 },
  { id: 15, name: "Sabão em pó (1kg)", category: "Limpeza", variation: 3.4, price: 18, min: 15, max: 22 },
  { id: 16, name: "Detergente (500ml)", category: "Limpeza", variation: 2.9, price: 4, min: 3, max: 6 },
  { id: 17, name: "Papel higiênico (4 rolos)", category: "Higiene", variation: 7, price: 10, min: 8, max: 14 },
  { id: 18, name: "Creme dental (90g)", category: "Higiene", variation: -9.2, price: 6, min: 5, max: 9 },
  { id: 19, name: "Sabonete (90g)", category: "Higiene", variation: -2.2, price: 3, min: 2, max: 5 },
  { id: 20, name: "Shampoo (350ml)", category: "Higiene", variation: 2.2, price: 15, min: 12, max: 20 }
];

const news = [
  {
    id: 1,
    title: "Tomate tem alta de 15% no mês de fevereiro",
    content: "O preço do tomate subiu devido à alta demanda e às condições climáticas desfavoráveis.",
    source: "g1.globo.com"
  },
  {
    id: 2,
    title: "Leite mais barato com aumento da produção",
    content: "A produção de leite cresceu 8%, resultando em uma leve queda nos preços.",
    source: "uol.com.br"
  },
  {
    id: 3,
    title: "Feijão tem queda de preço após safra recorde",
    content: "A colheita deste ano superou expectativas, reduzindo os custos do feijão nos mercados.",
    source: "cnnbrasil.com.br"
  },
]

export default function Home() {
  return (
    <>
      <Menu />
      <Container px="16" colorPalette={'pink'}>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colSpan={1}>
            {news.map((item) => (
              <Card.Root
                maxWidth="350px"
                minWidth="250px"
                rounded={'none'}
                borderBottom={'none'}
                key={item.id}
                _last={{
                  base: { borderBottom: '1px solid #e4e4e7' },
                  _dark: { borderBottom: '1px solid #27272a' }
                }}>
                <Card.Body gap="2">
                  <Card.Title fontSize={'md'}>
                    <ChakraLink asChild variant="underline">
                      <NextLink href={`?${item.title}`}>{item.title}</NextLink></ChakraLink>
                  </Card.Title>
                  <Card.Description fontSize={'sm'}>{item.content}</Card.Description>
                  <Card.Footer p={0} fontSize={'sm'} color={'gray'}>
                    <LuGlobe />{item.source}
                  </Card.Footer>
                </Card.Body>
              </Card.Root>
            ))}
          </GridItem>

          <GridItem colSpan={4}>
            <Table.ScrollArea
              rounded="none"
              border={'none'}
              maxH={719}
            >
              <Table.Root size="sm" stickyHeader interactive>
                <Table.Header>
                  <Table.Row bg="bg.muted">
                    <Table.ColumnHeader>Produto</Table.ColumnHeader>
                    <Table.ColumnHeader>Categoria</Table.ColumnHeader>
                    <Table.ColumnHeader>Preço</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">Min</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="left">Max</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>

                <Table.Body padding={1} >
                  {items.map((item) => (
                    <Table.Row key={item.id}>
                      <Table.Cell fontWeight={'normal'}>
                        <ChakraLink asChild variant="plain">
                          <NextLink href={`#produto#${item.name}`}>{item.name}</NextLink>
                        </ChakraLink>
                      </Table.Cell>
                      <Table.Cell>{item.category}</Table.Cell>
                      <Table.Cell>
                        R$ {item.price}
                        <Tag.Root ml={1} size="sm" variant={'subtle'} colorPalette={item.variation >= 0 ? 'blue' : 'red'}>
                          <Tag.Label>{item.variation}%</Tag.Label>
                        </Tag.Root>
                      </Table.Cell>
                      <Table.Cell textAlign="end">R$ {item.min}</Table.Cell>
                      <Table.Cell textAlign="left">R$ {item.max}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Table.ScrollArea>

            <Box display={'flex'} my={4} justifyContent={'space-between'}>
              <Text fontSize={'sm'} color={'gray.500'}>Região: Mombaça no Ceará</Text>
              <Text fontSize={'sm'} color={'gray.500'}>Dados do dia 03/03/25 à 05/03/25</Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
