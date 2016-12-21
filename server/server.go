package server

import (
	"github.com/Buhrietoe/brood/server/apiv1"
	"github.com/Buhrietoe/brood/server/middleware"

	"github.com/gin-gonic/gin"
)

type Server struct {
	Address      string
	Port         string
	ListenString string // Complete string of address:port to listen on
}

// BuildServer configures the web server
func BuildServer() *gin.Engine {
	// The 'root' routes are configured here

	gin.SetMode(gin.ReleaseMode)

	// Default() automatically implements the recovery and logger middlewares
	router := gin.Default()

	// Default server header
	router.Use(middleware.ServerHeader("brood"))

	// Root redirect
	router.GET("/", func(c *gin.Context) {
		c.Redirect(301, "/static/")
	})

	// Health endpoint
	router.GET("/ping", func(c *gin.Context) {
		c.String(200, "pong")
	})

	// Serve embedded GUI
	router.StaticFS("/static", assetFS())

	// API v1 endpoint
	apiv1.APIV1(*router.Group("/api/v1/"))

	return router
}
