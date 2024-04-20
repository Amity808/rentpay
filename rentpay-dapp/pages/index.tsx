import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  if (!isMounted) {
    return null;
  }

  return (
     

      <div className="flex flex-col justify-center items-center">

<div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* House Image */}
      <img
        src="/house-image.jpg"
        alt="House"
        className="w-full h-64 object-cover"
      />
      {/* House Details */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Beautiful House in a Serene Location
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          sagittis augue nec ligula viverra, sit amet lacinia odio suscipit.
          Nulla facilisi.
        </p>
        {/* Buttons */}
        <div className="flex justify-between">
          {/* View Details Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            View Details
          </button>
          {/* Contact Agent Button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
        
        

            <section id="objective" className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Concept Overview</h2>
              <p className="text-gray-800">
                To create a streamlined, secure, and financially inclusive
                system for tenants to manage their rent and utilities,
                facilitating savings and contributions from external sources.
              </p>
            </section>

            <section id="features" className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-white p-6 rounded shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    Rent and Utilities Payment through MiniPay
                  </h3>
                  <p>
                    Utilize the MiniPay wallet within the Opera Mini browser for
                    direct payments of rent and utilities.
                  </p>
                </li>
                <li className="bg-white p-6 rounded shadow-md">
                  <h3 className="text-xl font-semibold mb-2">
                    Locked Savings Account for Budgeting
                  </h3>
                  <p>
                    Implement a feature within MiniPay that allows tenants to
                    lock away a portion of their funds specifically for rent and
                    utilities.
                  </p>
                </li>
              </ul>
            </section>
          

         
        
      </div>
    
  );
}
