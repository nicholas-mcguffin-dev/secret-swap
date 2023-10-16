import './App.css'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) console.log(user);

    return (
      <div className="app">
        <div className="main">
          {isLoading ? (
            <h3> Loading...</h3>
          ) : (null)}
          <h1> Auth0 React Login</h1>
            {isAuthenticated? (
              <button onClick={() => logout({ logoutParams: {returnTo: window.location.origin} })}>
            Log Out
            </button>
            ):(
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
        </div>
      </div>
      )
  }

export default App;
