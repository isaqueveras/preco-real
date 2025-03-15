package main

import (
	"log"

	"precoreal/router/consulta"

	"github.com/gin-gonic/gin"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	r := gin.Default()
	v1 := r.Group("v1")

	consulta.Rota(v1.Group("consulta"))

	if err := r.Run(); err != nil {
		panic(err)
	}
}
