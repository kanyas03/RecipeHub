import React from 'react';
import searchIcon from '../assets/Search.svg'


const Navbar = ({searchQuery,setSearchQuery}) => {
  return (
    <div>
      <div className='flex justify-between bg-purple-300'>
        
        <h1 className='text-4xl ml-5 pt-2 pb-2 font-extrabold'>Recipe Hub</h1>

        
        <div className="flex justify-between border-black border-2 rounded-full overflow-hidden 
            md:h-9 h-6 mt-3 md:mx-28">
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                className="md:w-[450px] w-[150px] pl-5"
            />
            <div className="bg-purple-50 md:w-20 flex justify-center items-center">
                <img src={searchIcon} className="md:w-6 w-4" alt="Search" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
