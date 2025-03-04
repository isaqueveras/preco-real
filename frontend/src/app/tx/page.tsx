import Menu from "@/components/menu";
import { Button, Link as ChakraLink, ButtonGroup, Container, Heading, Table, Text, Box, Field, Input, defineStyle } from "@chakra-ui/react";
import NextLink from "next/link"

const transactions = [
  { id: "...C1M3Y535", name: "Arroz (5kg)", price: 27.50, image: "recibo_001.png", city: "Quixadá", uf: "Ceará", status: "refused" },
  { id: "...MX7KAN4Y", name: "Óleo de soja (900ml)", price: 11.20, image: "recibo_003.png", city: "Recife", uf: "Pernambuco", status: "todo" },
  { id: "...EC5KHSFY", name: "Feijão (1kg)", price: 9.80, image: "recibo_002.png", city: "Fortaleza", uf: "Ceará", status: "done" },
  { id: "...N0XHR9SQ", name: "Açúcar (5kg)", price: 22.00, image: "recibo_004.png", city: "Natal", uf: "Rio Grande do Norte", status: "done" },
  { id: "...S14HVK2C", name: "Café (500g)", price: 16.50, image: "recibo_006.png", city: "João Pessoa", uf: "Paraíba", status: "refused" },
  { id: "...P4T6CB4B", name: "Leite (1L)", price: 6.90, image: "recibo_005.png", city: "Salvador", uf: "Bahia", status: "refused" },
  { id: "...DG0AY547", name: "Pão francês (1kg)", price: 14.00, image: "recibo_007.png", city: "Maceió", uf: "Alagoas", status: "todo" },
  { id: "...Y6C9DQDG", name: "Frango (1kg)", price: 19.80, image: "recibo_009.png", city: "São Luís", uf: "Maranhão", status: "todo" },
  { id: "...XSJ32P9J", name: "Carne bovina (1kg)", price: 45.00, image: "recibo_008.png", city: "Teresina", uf: "Piauí", status: "done" },
  { id: "...6HRXZEPQ", name: "Batata (1kg)", price: 8.50, image: "recibo_011.png", city: "Manaus", uf: "Amazonas", status: "todo" },
  { id: "...6DSEFZBN", name: "Ovos (dúzia)", price: 12.90, image: "recibo_010.png", city: "Belém", uf: "Pará", status: "done" },
  { id: "...SMQYF4XZ", name: "Tomate (1kg)", price: 11.30, image: "recibo_012.png", city: "Porto Velho", uf: "Rondônia", status: "done" },
  { id: "...ATB5AHNK", name: "Banana (1kg)", price: 9.20, image: "recibo_014.png", city: "Boa Vista", uf: "Roraima", status: "refused" },
  { id: "...PK3KQX9P", name: "Cebola (1kg)", price: 7.80, image: "recibo_013.png", city: "Rio Branco", uf: "Acre", status: "refused" },
  { id: "...ZHTPJ5H9", name: "Sabão em pó (1kg)", price: 19.40, image: "recibo_015.png", city: "Macapá", uf: "Amapá", status: "todo" },
  { id: "...N00B996Z", name: "Detergente (500ml)", price: 4.20, image: "recibo_016.png", city: "Palmas", uf: "Tocantins", status: "refused" },
  { id: "...XSJTQGW0", name: "Papel higiênico (4 rolos)", price: 11.00, image: "recibo_017.png", city: "Brasília", uf: "Distrito Federal", status: "todo" }
];

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "-3",
  insetStart: "2",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  _peerPlaceholderShown: {
    color: "fg.muted",
    top: "2.5",
    insetStart: "3",
  },
  _peerFocusVisible: {
    color: "fg",
    top: "-3",
    insetStart: "2",
  },
})

export default function Transacoes() {
  return (
    <>
      <Menu />
      <Container px="16" colorPalette={'pink'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mb={4}>
          <Heading mb={2}>Estamos com 384 transações</Heading>
          <Box>
            <Field.Root>
              <Box pos="relative" w="full">
                <Input className="peer" placeholder="" maxLength={6} />
                <Field.Label css={floatingStyles}>Codigo Autenticação</Field.Label>
              </Box>
            </Field.Root>
          </Box>
        </Box>

        <Table.ScrollArea rounded="none" border={'none'} maxH={719}>
          <Table.Root size="md" stickyHeader>
            <Table.Header>
              <Table.Row bg="bg.muted">
                <Table.ColumnHeader>Identificador</Table.ColumnHeader>
                <Table.ColumnHeader>Produto</Table.ColumnHeader>
                <Table.ColumnHeader>Imagem</Table.ColumnHeader>
                <Table.ColumnHeader>Cidade - UF</Table.ColumnHeader>
                <Table.ColumnHeader>Preço</Table.ColumnHeader>
                <Table.ColumnHeader>Data da compra</Table.ColumnHeader>
                <Table.ColumnHeader>Auditoria</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>

            <Table.Body padding={1} >
              {transactions.map((item) => (
                <Table.Row key={item.id}
                  backgroundColor={{
                    base: item.status == "refused" ? "red.100" : item.status == "done" ? "gray.100" : "transparent",
                    _dark: item.status == "refused" ? "red.900" : item.status == "done" ? "gray.900" : "transparent",
                  }}
                >
                  <Table.Cell><ChakraLink asChild variant="underline"><NextLink href="#">{item.id}</NextLink></ChakraLink></Table.Cell>
                  <Table.Cell fontWeight={'normal'}><ChakraLink asChild variant="underline"><NextLink href="#">{item.name}</NextLink></ChakraLink></Table.Cell>
                  <Table.Cell>{item.image}</Table.Cell>
                  <Table.Cell>{item.city} - {item.uf}</Table.Cell>
                  <Table.Cell>R$ {item.price}</Table.Cell>
                  <Table.Cell>04/03/2025</Table.Cell>
                  <Table.Cell>
                    {item.status == "todo" && (
                      <ButtonGroup size="sm" variant="ghost">
                        <Button>Aceitar</Button>
                        <Button>Recusar</Button>
                      </ButtonGroup>
                    )}


                    {item.status == "refused" && (
                      <Text>Recusado</Text>
                    )}

                    {item.status == "done" && (
                      <Text>Já auditado</Text>
                    )}

                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Container >
    </>
  )
}
