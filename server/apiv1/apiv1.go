package apiv1

import (
	"github.com/Buhrietoe/brood/server/middleware"

	"github.com/gin-gonic/gin"
)

// func apiV1 defines routes of the v1 rest api
func APIV1(api gin.RouterGroup) {
	api.Use(middleware.ServerHeader("brood/api/v1"))

	api.GET("/ping", func(c *gin.Context) {
		c.String(200, "pong")
	})
}
