
import React, { useState } from 'react';

export default function Nav() {

  const [ menuOpen, setMenuOpen ] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const [ open, setOpen ] = useState(false);
  
  const categories = [
    ["Smartphone", "📱"], ["Laptop", "💻"], ["Camera", "📷"], ["Headphones", "🎧"], 
    ["PC Gaming", "🎮"],  ["Tablets", "📲"], ["Television", "📺"]
  ];

  return (
    <>
      <nav className='w-full flex flex-col justify-center items-center relative'>
        {/* Top Bar */}
        <div className="top-nav w-full flex justify-around items-center bg-black text-white px-[8%] lg:px-[12%] py-3 text-sm">
          <div className='flex w-3/4 gap-5 items-center'>
            <div className='relative group'>
              <span className='cursor-pointer flex items-center hover:text-blue-300'>
                English <span className='ml-1 text-xs'>▼</span>
              </span>
              <ul className='absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 transition hidden group-hover:flex flex-col gap-2 z-50'>
                <li>French</li>
                <li>Deutsch</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
