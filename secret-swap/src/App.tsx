import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';
import { useState } from 'react';

function App() {
  const { isLoading, isAuthenticated, error, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const setModal = (value: boolean) => {
    setIsOpen(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) console.log(user);

    return (
        <div className="flex flex-col h-screen">
          <Navbar setModal={setModal}/>
          {isOpen && <SignUpModal 
            isOpen={isOpen}
            setModal={setModal}
            />
          }
          <div className="flex flex-grow justify-center items-center h-100 w-100 text-black">
            <h1>This is where the content will go.</h1>
          </div>
          <Footer />
        </div>
      )
  }

export default App;
