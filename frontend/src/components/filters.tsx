"use client"

import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText
} from "@/components/ui/select"

import { useRef, useState } from "react"
import { Button, Dialog, Portal, createListCollection } from "@chakra-ui/react"

export default function Filters() {
  const contentRef = useRef<any>(null)

  const [estado, setEstado] = useState<string[]>([])
  const [cidade, setCidade] = useState<string[]>([])

  return (
    <Dialog.Root size={'xs'}>
      <Dialog.Trigger asChild>
        <Button variant="ghost" size={'md'}>Filtros</Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner colorPalette={'pink'}>
          <Dialog.Content ref={contentRef} rounded={1}>
            <Dialog.Header>
              <Dialog.Title>Filtrar Preços por Cidade e Estados</Dialog.Title>
              <Dialog.Description mt={3}>Selecione um Estado e logo após selecione a cidade que deseja filtrar os preços.</Dialog.Description>
            </Dialog.Header>
            <Dialog.Body>

              <SelectRoot mt={0} value={estado} collection={estados} colorPalette={'pink'} onValueChange={(e) => setEstado(e.value)}>
                <SelectLabel>Selecione o Estado</SelectLabel>
                <SelectTrigger>
                  <SelectValueText placeholder="Selecione o Estado" />
                </SelectTrigger>
                <SelectContent portalRef={contentRef}>
                  {estados.items.map((item) => (<SelectItem item={item} key={item.label}>{item.label}</SelectItem>))}
                </SelectContent>
              </SelectRoot>

              <SelectRoot mt={3} value={cidade} collection={cidades} colorPalette={'pink'} onValueChange={(e) => setCidade(e.value)}>
                <SelectLabel>Selecione a Cidade</SelectLabel>
                <SelectTrigger>
                  <SelectValueText placeholder="Selecione o Estado" />
                </SelectTrigger>
                <SelectContent portalRef={contentRef}>
                  {cidades.items.map((item) => (<SelectItem item={item} key={item.label}>{item.label}</SelectItem>))}
                </SelectContent>
              </SelectRoot>

            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button size={'sm'} variant="outline" rounded={1}>Fechar</Button>
              </Dialog.ActionTrigger>
              <Button size={'sm'} colorPalette={'pink'} rounded={1}>Aplicar filtros</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root >
  )
}

const estados = createListCollection({
  items: [
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" }
  ]
})

const cidades = createListCollection({
  items: [
    { value: "1", label: "Fortaleza" },
    { value: "2", label: "Juazeiro do Norte" },
    { value: "3", label: "Sobral" },
    { value: "4", label: "Caucaia" },
    { value: "5", label: "Crato" },
    { value: "6", label: "Maracanaú" },
    { value: "7", label: "Quixadá" },
    { value: "8", label: "Itapipoca" },
    { value: "9", label: "Iguatu" },
    { value: "10", label: "Mombaça" }
  ]
})
