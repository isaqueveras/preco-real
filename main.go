package main

import (
	"log"
	"os"

	"precoreal/router/consulta"

	"github.com/gin-gonic/gin"
	"github.com/isaqueveras/gafanhoto"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	gafanhoto.AbrirConexao("preco-real", os.Getenv("PRECO_REAL_DATABASE"))
	defer gafanhoto.FecharConexao()

	r := gin.Default()
	v1 := r.Group("v1")

	consulta.Rota(v1.Group("consulta"))

	if err := r.Run(); err != nil {
		panic(err)
	}
}
