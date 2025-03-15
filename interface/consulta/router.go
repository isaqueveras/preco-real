package consulta

import "github.com/gin-gonic/gin"

func Rota(r *gin.RouterGroup) {
	r.GET("obter_principais_produtos", obterPrincipaisProdutos)
}
