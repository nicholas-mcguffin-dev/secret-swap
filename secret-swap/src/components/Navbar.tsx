import { useAuth0 } from "@auth0/auth0-react";
import  Button from "./Button";

interface NavBarProps {
    setModal: (isModalOpen: boolean) => void;
}

function Navbar(props: NavBarProps) {
    const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="bg-white p-2 flex justify-between items-center">
            <div className="flex items-center">
                <img src="gift.svg" alt="Logo" className="w-8 h-8"></img>
                <h1 className=" ml-2 text-xl font-sembiold text-black">Secret Swap </h1>
            </div>
            <div className="space-x-4">
                <ul className="flex space-x-8 text-black">
                    <li><a href="/">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/swaps">Swaps</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="flex justify-end">
                {isAuthenticated? (
                    <div className="flex space-x-4 ">
                        <h2 className="mx-2 flex items-center text-black"> Welcome, {user?.given_name}.</h2>
                        <Button
                            handleClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                            type={"button"}
                            title={"Log Out"}
                            disabled={false}
                            hierarchy={"primary"}
                        >
                            Sign Out
                        </Button>
                    </div>
                ):(
                    <>
                        <div className="mx-2">
                            <Button
                                handleClick={() => loginWithRedirect()}
                                type={"button"}
                                hierarchy={"primary"}
                                title={"Sign In"}
                                disabled={false}
                            >
                                Sign In
                            </Button>
                        </div>
                        <div className="mx-2">
                            <Button
                                handleClick={() => props.setModal(true)}
                                hierarchy={"secondary"}
                                type={"button"}
                                title={"Sign Up"}
                                disabled={false}
                            >
                                Sign Up
                            </Button>`
                        </div>
                    </>
                )}
            </div>
        </nav>
    )
}

export default Navbar;