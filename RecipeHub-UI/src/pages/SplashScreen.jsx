import React from 'react'
import image from '../assets/Recipe.png'

const SplashScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-300 ">
        <img src={image} className='size-50'/>
 
    <h1 className="text-5xl font-bold mb-4 animate-fade-in-scale">
      Recipe Hub
    </h1>

    
    <p className="text-lg italic animate-slide-up">
      Discover your taste 
    </p><br />

   <button className='bg-purple-600 w-60  h-10 rounded-3xl hover:bg-purple-400 font-bold'>
    <a href="/Home" >
    Get Start</a></button>
  </div>
  )
}

export default SplashScreen
