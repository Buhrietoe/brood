package app

import (
	"github.com/Buhrietoe/brood/app/config"
	"github.com/labstack/echo"
)

// BuildApp defines all http routes
func BuildApp() (e *echo.Echo) {
	// config.Notifiers.Init()
	// config.FlapDetection.Init()

	// err := config.Rethinkdb.Init()
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// db := config.Rethinkdb

	// continuousQueryService := &services.ContinuousQueryService{
	// 	DB:            db,
	// 	QueryInterval: config.Golerta.ContinuousQueryInterval.Duration,
	// 	Notifiers:     config.Notifiers,
	// 	FlapDetection: &config.FlapDetection,
	// }
	// go continuousQueryService.Start()

	e = echo.New()

	// authProvider := BuildAuthProvider(config)
	// authMiddleware := middleware.JWTWithConfig(middleware.JWTConfig{
	// 	SigningKey:  []byte(config.Golerta.SigningKey),
	// 	TokenLookup: "header:Authorization,query:api-key",
	// })
	// authController := controllers.AuthController{
	// 	Echo:         e,
	// 	AuthProvider: authProvider,
	// }
	// authController.Init()

	// alertsService := services.AlertService{
	// 	DB:            &db,
	// 	FlapDetection: &config.FlapDetection,
	// }
	// alertsController := controllers.AlertsController{
	// 	Echo:             e,
	// 	AlertService:     alertsService,
	// 	AuthMiddleware:   authMiddleware,
	// 	LogAlertRequests: config.Golerta.LogAlertRequests,
	// }
	// alertsController.Init()

	e.Static("/static", config.UI)
	e.GET("/", func(ctx echo.Context) error {
		return ctx.Redirect(301, "/static/index.html")
	})

	return e
}

// func BuildAuthProvider(config config.GolertaConfig) (authProvider auth.AuthProvider) {
// 	switch config.Golerta.AuthProvider {
// 	case "ldap":
// 		authProvider = &config.Ldap
// 	}
//
// 	err := authProvider.Connect()
// 	defer authProvider.Close()
//
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	if config.Golerta.SigningKey == "" {
// 		log.Fatal("Shutting down, signing key must be provided.")
// 	}
// 	authProvider.SetSigningKey(config.Golerta.SigningKey)
// 	return
// }