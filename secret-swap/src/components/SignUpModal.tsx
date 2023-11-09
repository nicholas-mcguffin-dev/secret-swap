import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface SignUpModalProps {
  isOpen: boolean;
  setModal: (isModalOpen: boolean) => void;
}

function SignUpModal(props: SignUpModalProps) {

  // TODO: Add Close button to top right of modal. 
  // TODO: Add Sign Up button and CAncel button to bottom of page ( will be empty now.. .next step is implementing sign up)
  // TODO: Add Country input for mobile number prefix.
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      {/* Modal Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Modal Content */}
      <div className="bg-white p-4 rounded shadow-lg relative">
        <button className="absolute top-2 right-2 text-gray-900" onClick={() => props.setModal(false)}>
          <AiOutlineClose/>
        </button>
        
        <h2 className="text-xl text-black font-black mb-4">Sign Up</h2>
        <form>
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label htmlFor="firstName" className="block text-xs text-black font-semibold ml-2">First Name</label>
              <input
                type="text"
                id="firstName" 
                className="w-full focus:outline-indigo-500 text-black bg-indigo-200 px-3 py-2 border rounded-lg h-8"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-xs text-black font-semibold ml-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full focus:outline-indigo-500 text-black bg-indigo-200 px-3 py-2 border rounded-lg h-8"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="tel" className="block text-xs text-black font-semibold ml-2">Mobile Number</label>
            <input
              type="tel"
              id="tel"
              className="w-full focus:outline-indigo-500 text-black bg-indigo-200 px-3 py-2 border rounded-lg h-8"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xs text-black font-semibold ml-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full focus:outline-indigo-500 text-black bg-indigo-200 px-3 py-2 border rounded-lg h-8"
              />
          </div>
          <div className="mb-4 flex-justify-between">
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-xs text-black font-semibold ml-2">Password</label>
              <div className="password-hint text-[14px] mr-2 text-gray-600">At least 10 characters</div>
            </div>
            <input
              type="password"
              id="password"
              className="w-full focus:outline-indigo-500 text-black bg-indigo-200 px-3 py-2 border rounded-lg h-8"
            />
          </div>
          </form>
          <Button 
            handleClick={() => props.setModal(false)}
            hierarchy={"primary"}
            type={"button"}
            title={"Sign Up"}
            disabled={false}
          >
            Close
          </Button>
          </div>
    </div>
    )
}

export default SignUpModal;