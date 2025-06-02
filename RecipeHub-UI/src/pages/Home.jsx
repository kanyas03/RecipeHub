import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';
const Home = () => {
    const [Recipe,setRecipe]= useState([]);
    const [searchQuery,setSearchQuery]=useState('');
    const [searchResult,setsearchResult]=useState([]);

    useEffect(()=> {
        fetch( "https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res=>res.json())
        .then(data=>setRecipe(data.meals||[]))
    },[]);
    useEffect(()=>{
      if(searchQuery.trim() ===''){
        setsearchResult([]);
        return;
      }
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then(res=>res.json())
        .then(data=>setsearchResult(data.meals||[]));
    },[searchQuery])

  return (
    <div className='bg-purple-200 min-h-screen'>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div className='p-6'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {searchResult.length > 0 ? (
            searchResult.map(meal => (
              <div key={meal.idMeal} className="bg-white rounded shadow p-4">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded w-full" />
                <h3 className="font-semibold mt-2">{meal.strMeal}</h3>
                <Link to={`/recipe/${meal.idMeal}`}>
                  <button className="mt-2 px-3 py-1 bg-purple-500 text-white rounded">View</button>
                </Link>
              </div>
            ))
          ) : (
            searchQuery && <p>No results found.</p>
          )}
        </div>
      </div>
    
      <div className='p-6'>
       
          {Recipe.length>0?(
            <div className='bg-white  mt-1 mr-10 ml-50 p-6 rounded-xl shadow-md flex w-200'>
              <img src={Recipe[0].strMealThumb} alt="" className='size-100'/>
              <div>
              <h1 className='font-bold text-xl tex-black pl-14 pt-30'>{Recipe[0].strMeal}</h1>
              <p className='font-bold tex-black px-16 pt-2'>Category: {Recipe[0].strCategory}</p>
              <p className='font-bold tex-black px-16 pt-2'>Area: {Recipe[0].strArea}</p>
              <Link to={`/Recipe/${Recipe[0].idMeal}`}>
               <button className=' mt-2 mx-15 px-10 py-1   bg-purple-500 text-white rounded'>Recipe</button>
              </Link>
              </div>
            </div>
      
          )
        : (
            <p>Loading recipes...</p>
          )}
        </div>
      </div>
  
  )
};

export default Home
