// components/Navbar.tsx
import Link from "next/link";
import React from "react";

const Navbar = () => {

  return (

    <div className="flex justify-center items-center">
    <nav className="flex w-200 rounded-full justify-center items-center bg-green-600 text-white mt-30">
   
        <div className="flex h-10 items-center justify-center">
        
          {/* منو */}
          <ul className="flex items-center justify-center gap-15">
            <li>
              <Link href="/" className="transition-colors hover:text-teal-300 text-xl">
                All
              </Link>
            </li>
            <li>
              <Link href="/done" className="transition-colors hover:text-teal-300 text-xl">
                Done
              </Link>
            </li>
            <li>
              <Link href="/todo" className="transition-colors hover:text-teal-300 text-xl">
                To do
              </Link>
            </li>
          </ul>
    
      </div>
    </nav>


    
    </div>




  
  );
};

export default Navbar;
