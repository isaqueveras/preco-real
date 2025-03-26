package consulta

import (
	"context"

	"precoreal/infra/consulta"

	"github.com/isaqueveras/gafanhoto"
)

// ObterPrincipaisProdutos obtem os principais produtos para a tela inicial
func ObterPrincipaisProdutos(ctx context.Context) (res *PrincipaisProdutosRes, erro error) {
	tx, erro := gafanhoto.NovaTransacao(ctx, true)
	if erro != nil {
		return nil, erro
	}
	defer tx.Rollback()

	repo := consulta.Novo(tx)
	dados, erro := repo.ObterPrincipaisProdutos()
	if erro != nil {
		return nil, erro
	}

	res = &PrincipaisProdutosRes{
		Periodo: Periodo{
			DataInicial: "15/03/2025",
			DataFinal:   "25/03/2025",
		},
		Regiao: "Mombaça - Ceará",
	}

	for _, produto := range dados.Produtos {
		res.Produtos = append(res.Produtos, Produto{
			ID:        produto.ID,
			Produto:   produto.Produto,
			Categoria: produto.Categoria,
			Preco:     produto.Preco,
			Variacao:  produto.Variacao,
			Min:       produto.Min,
			Max:       produto.Max,
		})
	}

	return res, nil
}

func ObterPrincipaisNoticias() (*[]Noticia, error) {
	return &[]Noticia{
		{
			ID:        "1",
			Titulo:    "Tomate tem alta de 15% no mês de fevereiro",
			Descricao: "O preço do tomate subiu devido à alta demanda e às condições climáticas desfavoráveis.",
			Fonte:     "https://g1.globo.com",
		},
		{
			ID:        "2",
			Titulo:    "Leite mais barato com aumento da produção",
			Descricao: "A produção de leite cresceu 8%, resultando em uma leve queda nos preços.",
			Fonte:     "https://uol.com.br",
		},
		{
			ID:        "3",
			Titulo:    "Feijão tem queda de preço após safra recorde",
			Descricao: "A colheita deste ano superou expectativas, reduzindo os custos do feijão nos mercados.",
			Fonte:     "https://cnnbrasil.com.br",
		},
	}, nil
}
