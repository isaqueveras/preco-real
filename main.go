package main

import (
	"log"
	"precoreal/interface/transacao"

	"github.com/gin-gonic/gin"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	r := gin.Default()
	v1 := r.Group("v1")

	transacao.Rota(v1.Group("transaction"))

	if err := r.Run(); err != nil {
		panic(err)
	}
}
