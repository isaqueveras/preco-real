import NextLink from "next/link"
import {
  Card,
  Container,
  Link as ChakraLink,
  Heading,
  Table,
  Grid,
  GridItem,
  TimelineRoot,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
  TimelineItem
} from "@chakra-ui/react"
import {
  LuExternalLink,
  LuPackage,
  LuPackageCheck,
  LuPackagePlus,
  LuPackageX,
} from "react-icons/lu";
import Menu from "@/components/menu";

const items = [
  { id: 1, name: "Arroz (5kg)", category: "Alimentos", price: 25, min: 20, max: 30 },
  { id: 2, name: "Feijão (1kg)", category: "Alimentos", price: 8, min: 6, max: 12 },
  { id: 3, name: "Óleo de soja (900ml)", category: "Alimentos", price: 10, min: 8, max: 14 },
  { id: 4, name: "Açúcar (5kg)", category: "Alimentos", price: 20, min: 18, max: 25 },
  { id: 5, name: "Leite (1L)", category: "Alimentos", price: 6, min: 5, max: 8 },
  { id: 6, name: "Café (500g)", category: "Alimentos", price: 15, min: 12, max: 18 },
  { id: 7, name: "Pão francês (1kg)", category: "Alimentos", price: 15, min: 12, max: 18 },
  { id: 8, name: "Carne bovina (1kg)", category: "Carnes", price: 40, min: 35, max: 50 },
  { id: 9, name: "Frango (1kg)", category: "Carnes", price: 18, min: 15, max: 22 },
  { id: 10, name: "Ovos (dúzia)", category: "Alimentos", price: 12, min: 10, max: 15 },
  { id: 11, name: "Batata (1kg)", category: "Hortifruti", price: 8, min: 6, max: 12 },
  { id: 12, name: "Tomate (1kg)", category: "Hortifruti", price: 10, min: 8, max: 14 },
  { id: 13, name: "Cebola (1kg)", category: "Hortifruti", price: 7, min: 5, max: 10 },
  { id: 14, name: "Banana (1kg)", category: "Hortifruti", price: 8, min: 6, max: 12 },
  { id: 15, name: "Sabão em pó (1kg)", category: "Limpeza", price: 18, min: 15, max: 22 },
  { id: 16, name: "Detergente (500ml)", category: "Limpeza", price: 4, min: 3, max: 6 },
  { id: 17, name: "Papel higiênico (4 rolos)", category: "Higiene", price: 10, min: 8, max: 14 },
  { id: 18, name: "Creme dental (90g)", category: "Higiene", price: 6, min: 5, max: 9 },
  { id: 19, name: "Sabonete (90g)", category: "Higiene", price: 3, min: 2, max: 5 },
  { id: 20, name: "Shampoo (350ml)", category: "Higiene", price: 15, min: 12, max: 20 }
];

const news = [
  { id: 1, title: "Tomate tem alta de 15% no mês de fevereiro", category: "Notícia", content: "O preço do tomate subiu devido à alta demanda e às condições climáticas desfavoráveis." },
  { id: 2, title: "Leite fica mais barato com aumento da produção", category: "Notícia", content: "A produção de leite cresceu 8%, resultando em uma leve queda nos preços." },
  { id: 3, title: "Feijão tem queda de preço após safra recorde", category: "Notícia", content: "A colheita deste ano superou expectativas, reduzindo os custos do feijão nos mercados." }
  // { id: 4, title: "Consumo de café cresce 10% no último ano", category: "Notícia", content: "A colheita deste ano superou expectativas, reduzindo os custos do feijão nos mercados." }
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
                      <NextLink href={`#noticia#${item.title}`}>
                        {item.title}
                      </NextLink>
                    </ChakraLink>
                  </Card.Title>
                  <Card.Description fontSize={'sm'}>{item.content}</Card.Description>
                  <Card.Footer p={0} fontSize={'sm'} color={'gray'}>
                    <ChakraLink asChild variant="underline">
                      <NextLink href={'#'}>
                        <LuExternalLink />
                        Fonte: g1.globo.com
                      </NextLink>
                    </ChakraLink>

                  </Card.Footer>
                </Card.Body>
              </Card.Root>
            ))}
          </GridItem>

          <GridItem colSpan={3}>
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
                      <Table.Cell>R$ {item.price}</Table.Cell>
                      <Table.Cell textAlign="end">R$ {item.price}</Table.Cell>
                      <Table.Cell textAlign="left">R$ {item.price}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Table.ScrollArea>
          </GridItem>

          <GridItem colSpan={1}>
            <Heading pl={3} mb={2} color={'gray'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <NextLink href="/tx">Transações</NextLink>
              <NextLink href="#"><LuPackagePlus /></NextLink>
            </Heading>
            <TimelineRoot maxW="350px" pl={3}>
              <TimelineItem >
                <TimelineConnector mt={1}>
                  <LuPackageX />
                </TimelineConnector>
                <TimelineContent ml={-2}>
                  <TimelineTitle textStyle="md">Transação Recusada</TimelineTitle>
                  <TimelineDescription color={'gray'} fontSize={'sm'} pb={0}>Transação recusada por falta de comprovante.</TimelineDescription>
                  <TimelineDescription>03 Mar 2025, 23:25</TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector mt={1}>
                  <LuPackageCheck />
                </TimelineConnector>
                <TimelineContent ml={-2}>
                  <TimelineTitle textStyle="md">Transação Aprovada</TimelineTitle>
                  <TimelineDescription>03 Mar 2025, 23:23</TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem >
                <TimelineConnector mt={1}>
                  <LuPackageX />
                </TimelineConnector>
                <TimelineContent ml={-2}>
                  <TimelineTitle textStyle="md">Transação Recusada</TimelineTitle>
                  <TimelineDescription color={'gray'} fontSize={'sm'} pb={0}>Transação recusada por falta de comprovante.</TimelineDescription>
                  <TimelineDescription>03 Mar 2025, 23:25</TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector mt={1}>
                  <LuPackageCheck />
                </TimelineConnector>
                <TimelineContent ml={-2}>
                  <TimelineTitle textStyle="md">Transação Aprovada</TimelineTitle>
                  <TimelineDescription>03 Mar 2025, 23:23</TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem >
                <TimelineConnector mt={1}>
                  <LuPackageX />
                </TimelineConnector>
                <TimelineContent ml={-2}>
                  <TimelineTitle textStyle="md">Transação Recusada</TimelineTitle>
                  <TimelineDescription color={'gray'} fontSize={'sm'} pb={0}>Transação recusada por falta de comprovante.</TimelineDescription>
                  <TimelineDescription>03 Mar 2025, 23:25</TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector mt={1}>
                  <LuPackageCheck />
                </TimelineConnector>
                <TimelineContent ml={-2}>
                  <TimelineTitle textStyle="md">Transação Aprovada</TimelineTitle>
                  <TimelineDescription>03 Mar 2025, 23:23</TimelineDescription>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector mt={1}>
                  <LuPackage />
                </TimelineConnector>
                <TimelineContent ml={-2}>
                  <TimelineTitle textStyle="md">Nova Transação Recebida</TimelineTitle>
                  <TimelineDescription>03 Mar 2025, 23:20</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            </TimelineRoot>
          </GridItem>
        </Grid >
      </Container >
    </>
  )
}
