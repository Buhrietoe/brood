package middleware

import "github.com/gin-gonic/gin"

// func serverHeader adds the Brood server header to responses
func ServerHeader(server string) gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Header("Server", server)
	}
}
