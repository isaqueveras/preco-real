package consulta

type IConsulta interface {
	ObterPrincipaisProdutos() (*PrincipaisProdutos, error)
}
