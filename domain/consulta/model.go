package consulta

type PrincipaisProdutos struct {
	Produtos []*Produto
	Periodo  Periodo
	Regiao   string
}

type Produto struct {
	ID        string
	Produto   string
	Categoria string
	Preco     float64
	Variacao  float64
	Min       float64
	Max       float64
}

type Periodo struct {
	DataInicial string
	DataFinal   string
}
