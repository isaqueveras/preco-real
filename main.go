package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/oklog/ulid/v2"
)

func main() {
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	r := gin.Default()

	v1 := r.Group("v1")

	tx := v1.Group("transaction")
	tx.GET("", func(ctx *gin.Context) {
		ctx.JSON(200, map[string]string{
			"id":      ulid.Make().String(),
			"product": "Arroz (1kg)",
		})
	})

	r.Run()
}
