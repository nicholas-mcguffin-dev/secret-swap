import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  const { isLoading, isAuthenticated, error, user } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) console.log(user);

    return (
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="bg-green flex flex-grow justify-center items-center h-100 w-100 text-black">
            <h1>This is where the content will go.</h1>
          </div>
          <Footer />
        </div>
      )
  }

export default App;
