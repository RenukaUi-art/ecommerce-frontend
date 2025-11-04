import { Link } from "react-router-dom";
import { useState } from "react";
import SignInModal from "./SignInModal";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">
            <Link to="/">GreenLeaf</Link>
          </h1>

          <nav className="space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/about" className="hover:text-green-600">About</Link>
            <Link to="/locations" className="hover:text-green-600">Locations</Link>
          </nav>

          <div className="flex space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Sign In
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Cart (0)
            </button>
          </div>
        </div>
      </header>

      {showModal && <SignInModal onClose={() => setShowModal(false)} />}
    </>
  );
}
