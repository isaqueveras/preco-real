package consulta

type PrincipaisProdutosRes struct {
	Produto   string  `json:"produto"`
	Categoria string  `json:"categoria"`
	Preco     float64 `json:"preco"`
	Variacao  float64 `json:"variacao"`
	Min       float64 `json:"min"`
	Max       float64 `json:"max"`
}
