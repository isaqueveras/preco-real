package consulta

func ObterPrincipaisProdutos() ([]*PrincipaisProdutosRes, error) {
	return []*PrincipaisProdutosRes{{
		Produto: "Arroz (5kg)", Categoria: "Alimentos", Preco: 25.80, Variacao: 2.1, Min: 24.73, Max: 26.83,
	}}, nil
}
