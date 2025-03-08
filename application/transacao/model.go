package transacao

import "github.com/oklog/ulid/v2"

type Transacao struct {
	ID      ulid.ULID `json:"id"`
	Product string    `json:"product"`
}

type ObterTransacoesRes struct {
	Dados   []Transacao `json:"dados"`
	Proxima bool        `json:"proxima"`
}
