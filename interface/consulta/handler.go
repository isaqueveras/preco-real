package consulta

import (
	"net/http"
	"precoreal/application/consulta"

	"github.com/gin-gonic/gin"
)

func obterPrincipaisProdutos(ctx *gin.Context) {
	data, erro := consulta.ObterPrincipaisProdutos()
	if erro != nil {
		ctx.JSON(http.StatusBadRequest, nil)
		return
	}

	ctx.JSON(http.StatusOK, data)
}
