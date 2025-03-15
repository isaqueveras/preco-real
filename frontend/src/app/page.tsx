import NextLink from "next/link"
import { Card, Container, Link as ChakraLink, Table, Grid, GridItem, Tag, Box, Text } from "@chakra-ui/react"
import { LuGlobe } from "react-icons/lu";
import Menu from "@/components/menu";

export const revalidate = 60

interface Geral {
  produtos: Produto[]
  periodo: Periodo
  regiao?: string
}

interface Periodo {
  data_inicial: string
  data_final: string
}

interface Produto {
  id: string
  produto: string
  categoria: string
  preco: number
  variacao: number
  min: number
  max: number
}

interface Noticia {
  id: string
  titulo: string
  descricao: string
  fonte: string
}

export default async function Page() {
  const produtos = await fetch('http://localhost:8080/v1/consulta/obter_principais_produtos')
  const dadosProdutos: Geral = await produtos.json()

  const noticias = await fetch('http://localhost:8080/v1/consulta/obter_principais_noticias')
  const dadosNoticias: Noticia[] = await noticias.json()

  return (
    <>
      <Menu />
      <Container px="16" colorPalette={'pink'}>
        <Grid templateColumns="repeat(5, 1fr)" gap={2}>
          <GridItem colSpan={1}>
            {dadosNoticias.map((item: Noticia) => (
              <Card.Root
                maxWidth="350px"
                minWidth="280px"
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
                      <NextLink href={`${item.fonte}`}>{item.titulo}</NextLink>
                    </ChakraLink>
                  </Card.Title>
                  <Card.Description fontSize={'sm'}>{item.descricao}</Card.Description>
                  <Card.Footer p={0} fontSize={'sm'} color={'gray'}>
                    <LuGlobe />{item.fonte}
                  </Card.Footer>
                </Card.Body>
              </Card.Root>
            ))}
          </GridItem>

          <GridItem colSpan={4}>
            <Table.ScrollArea
              rounded="none"
              border={'none'}
              maxH={700}
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
                  {dadosProdutos.produtos.map((item: Produto) => (
                    <Table.Row key={item.id}>
                      <Table.Cell fontWeight={'normal'}>{item.produto}</Table.Cell>
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
              {dadosProdutos.regiao && (
                <Text fontSize={'sm'} color={'gray.500'}>Região: {dadosProdutos.regiao}</Text>
              )}
              <Text fontSize={'sm'} color={'gray.500'}>
                Dados do dia {dadosProdutos.periodo.data_inicial} à {dadosProdutos.periodo.data_final}
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
