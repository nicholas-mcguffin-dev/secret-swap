import { useAuth0 } from "@auth0/auth0-react";
import  Button from "./Button";

function Navbar() {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="bg-white p-2 flex justify-between items-center">
            <div className="flex items-center">
                <img src="gift.svg" alt="Logo" className="w-8 h-8"></img>
                <h1 className="text-black ml-2 text-xl font-sembiold">Secret Swap </h1>
            </div>
            <div className="space-x-4">
                <ul className="flex space-x-4 text-black">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="flex justify-end">
                {isAuthenticated? (
                    <div className="flex space-x-4 text-black">
                        <h2 className="mx-2 flex items-center text-black"> Welcome, {user?.given_name}.</h2>
                        <Button
                            handleClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                            styles={"border-white rounded-2xl"}
                            type={"button"}
                            title={"Log Out"}
                            disabled={false}
                        >
                            Sign Out
                        </Button>
                    </div>
                ):(
                    <Button
                        handleClick={() => loginWithRedirect()}
                        styles={"border-white rounded-2xl "}
                        type={"button"}
                        title={"Log In"}
                        disabled={false}
                    >
                        Sign In
                    </Button>
                )}
            </div>
        </nav>
    )
}

export default Navbar;