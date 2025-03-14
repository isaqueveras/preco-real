import NextLink from "next/link"
import { Card, Container, Link as ChakraLink, Table, Grid, GridItem, Tag, Box, Text } from "@chakra-ui/react"
import { LuGlobe } from "react-icons/lu";
import Menu from "@/components/menu";

const news = [
  { id: 1, title: "Tomate tem alta de 15% no mês de fevereiro", content: "O preço do tomate subiu devido à alta demanda e às condições climáticas desfavoráveis.", source: "g1.globo.com" },
  { id: 2, title: "Leite mais barato com aumento da produção", content: "A produção de leite cresceu 8%, resultando em uma leve queda nos preços.", source: "uol.com.br" },
  { id: 3, title: "Feijão tem queda de preço após safra recorde", content: "A colheita deste ano superou expectativas, reduzindo os custos do feijão nos mercados.", source: "cnnbrasil.com.br" },
]

export const revalidate = 60

interface Produto {
  produto: string
  categoria: string
  preco: number
  variacao: number
  min: number
  max: number
}

export default async function Page() {
  const data = await fetch('http://localhost:8080/v1/consulta/obter_principais_produtos')
  const produtos: Produto[] = await data.json()
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
                  {produtos.map((item: any) => (
                    <Table.Row key={item.id}>
                      <Table.Cell fontWeight={'normal'}>
                        <ChakraLink asChild variant="plain">
                          <NextLink href={`#produto#${item.produto}`}>{item.produto}</NextLink>
                        </ChakraLink>
                      </Table.Cell>
                      <Table.Cell>{item.categoria}</Table.Cell>
                      <Table.Cell>
                        R$ {item.preco}
                        <Tag.Root ml={1} size="sm" variant={'subtle'} colorPalette={item.variacao >= 0 ? 'blue' : 'red'}>
                          <Tag.Label>{item.variacao}%</Tag.Label>
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
