package consulta

import (
	"precoreal/domain/consulta"

	"github.com/isaqueveras/gafanhoto"
)

type repositorio struct {
	tx *gafanhoto.Tx
}

// Novo retorna um novo repositorio para as consultas
func Novo(tx *gafanhoto.Tx) consulta.IConsulta {
	return &repositorio{tx: tx}
}

const oterPrincipaisProdutosSQL = `
SELECT
	p.id,
	concat(p.nome, ' (', p.quantidade::INTEGER, ' ',p.unidade_medida, ')'),
	c.nome,
	pr.preco_medio,
	pr.preco_min,
	pr.preco_max
FROM public.precos_referencia AS pr
JOIN public.produtos p ON p.id = pr.produto_id
JOIN public.categorias c ON c.id = pr.categoria_id`

func (r *repositorio) ObterPrincipaisProdutos() (*consulta.PrincipaisProdutos, error) {
	query, erro := r.tx.Query(oterPrincipaisProdutosSQL)
	if erro != nil {
		return nil, erro
	}
	defer query.Close()

	var produtos []*consulta.Produto
	for query.Next() {
		var produto = &consulta.Produto{Variacao: -1.89}
		if erro = query.Scan(&produto.ID, &produto.Produto, &produto.Categoria, &produto.Preco,
			&produto.Min, &produto.Max); erro != nil {
			return nil, erro
		}
		produtos = append(produtos, produto)
	}

	return &consulta.PrincipaisProdutos{Produtos: produtos}, nil
}
