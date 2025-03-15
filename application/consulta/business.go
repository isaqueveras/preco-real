package consulta

func ObterPrincipaisProdutos() (*PrincipaisProdutosRes, error) {
	return &PrincipaisProdutosRes{
		Periodo: Periodo{
			DataInicial: "01/03/25",
			DataFinal:   "14/03/25",
		},
		Regiao: "Mombaça - Ceará",
		Produtos: []Produto{
			{ID: "1", Produto: "Arroz (5kg)", Categoria: "Alimentos", Preco: 25.80, Variacao: -1.25, Min: 24.73, Max: 26.83},
			{ID: "2", Produto: "Feijão (1kg)", Categoria: "Alimentos", Preco: 25.80, Variacao: 1.97, Min: 24.73, Max: 26.83},
			{ID: "3", Produto: "Óleo de soja (900ml)", Categoria: "Alimentos", Preco: 25.80, Variacao: -0.92, Min: 24.73, Max: 26.83},
			{ID: "4", Produto: "Açúcar (5kg)", Categoria: "Alimentos", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "5", Produto: "Leite (1L)", Categoria: "Alimentos", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "6", Produto: "Café (500g)", Categoria: "Alimentos", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "7", Produto: "Pão francês (1kg)", Categoria: "Alimentos", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "8", Produto: "Carne bovina (1kg)", Categoria: "Carnes", Preco: 25.80, Variacao: -0.83, Min: 24.73, Max: 26.83},
			{ID: "9", Produto: "Frango (1kg)", Categoria: "Carnes", Preco: 25.80, Variacao: -1.92, Min: 24.73, Max: 26.83},
			{ID: "10", Produto: "Ovos (dúzia)", Categoria: "Alimentos", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "11", Produto: "Batata (1kg)", Categoria: "Hortifruti", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "12", Produto: "Tomate (1kg)", Categoria: "Hortifruti", Preco: 4.80, Variacao: 2.1, Min: 1.73, Max: 3.83},
			{ID: "13", Produto: "Cebola (1kg)", Categoria: "Hortifruti", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "14", Produto: "Banana (1kg)", Categoria: "Hortifruti", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "15", Produto: "Sabão em pó (1kg)", Categoria: "Limpeza", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "16", Produto: "Detergente (500ml)", Categoria: "Limpeza", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "17", Produto: "Papel higiênico (4 rolos)", Categoria: "Higiene", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "18", Produto: "Creme dental (90g)", Categoria: "Higiene", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "19", Produto: "Sabonete (90g)", Categoria: "Higiene", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
			{ID: "20", Produto: "Shampoo (350ml)", Categoria: "Higiene", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83},
		},
	}, nil
}
