package transacao

import (
	"precoreal/application/transacao"

	"github.com/gin-gonic/gin"
	"github.com/oklog/ulid/v2"
)

func Rota(r *gin.RouterGroup) {
	r.GET("", func(ctx *gin.Context) {
		ctx.JSON(200, &transacao.ObterTransacoesRes{
			Dados: []transacao.Transacao{
				{ID: ulid.Make(), Product: "Café (250g)"},
				{ID: ulid.Make(), Product: "Arroz (1kg)"},
			},
			Proxima: true,
		})
	})
}
