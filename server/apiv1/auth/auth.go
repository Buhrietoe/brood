package auth

import "github.com/Buhrietoe/brood/server/apiv1/auth/oauth"

type Auth struct {
	OAuth oauth.OAuthProvider // OAuth config
}

// Provider interface for authentication providers
type Provider interface {
	Authenticate(username, password string) (authenticated bool, token string, err error)
	SetSigningKey(key string)
	Connect() error
	Close()
}
