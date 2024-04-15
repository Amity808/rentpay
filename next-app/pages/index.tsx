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
