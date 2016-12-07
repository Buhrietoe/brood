package server

import "github.com/gin-gonic/gin"

// func serverHeader adds the Brood server header to responses
func serverHeader(server string) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Server", server)
	}
}

// func apiV1 defines v1 of the rest ap
func apiV1(api gin.RouterGroup) {
	api.Use(serverHeader("brood/api/v1"))

	api.GET("/ping", func(c *gin.Context) {
		c.String(200, "pong")
	})
}

// func BuildApp configures the web server
func BuildServer() *gin.Engine {

	gin.SetMode(gin.ReleaseMode)

	// Instantiate
	// Default() automatically implements the recovery and logger middlewares
	router := gin.Default()

	// Root Middleware
	router.Use(serverHeader("brood"))

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
	apiV1(*router.Group("/api/v1"))

	return router
}
