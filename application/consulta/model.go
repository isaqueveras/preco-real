package consulta

type PrincipaisProdutosRes struct {
	Produtos []Produto `json:"produtos"`
	Periodo  Periodo   `json:"periodo"`
	Regiao   string    `json:"regiao,omitempty"`
}

type Produto struct {
	ID        string  `json:"id"`
	Produto   string  `json:"produto"`
	Categoria string  `json:"categoria"`
	Preco     float64 `json:"preco"`
	Variacao  float64 `json:"variacao"`
	Min       float64 `json:"min"`
	Max       float64 `json:"max"`
}

type Periodo struct {
	DataInicial string `json:"data_inicial"`
	DataFinal   string `json:"data_final"`
}
