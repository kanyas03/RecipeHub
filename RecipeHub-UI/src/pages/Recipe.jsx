import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Recipe = () => {
    const {id} =useParams();
    const[recipe,setRecipe] =useState();
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.meals&&data.meals.length>0){
                setRecipe(data.meals[0])
    }else{
        console.log("Recipe Not Found");
    }
    })
    .catch(err=>console.log(err));

    },[id]);
    if (!recipe) {
        return <p>Loading recipe...</p>;
      }
  return (
   
    <div className='bg-purple-200'>
       <div className=' bg-purple-300'>
            <Link to= '/Home'>
            <h1 className='text-4xl ml-5 pt-2 pb-2 font-extrabold'>Recipe Hub</h1>
            </Link>
       </div>         
       <div className='flex'>
            <img src={recipe.strMealThumb} alt="" className='w-100 h-100 mx-10 mt-10 border-1'/>
            <div>
            <h1 className='font-bold text-2xl text-black font-serif pt-60'>{recipe.strMeal}</h1><br />
            <p className='font-bold'>Category: {recipe.strCategory}</p><br />
            <p className='font-bold'>Area: {recipe.strArea}</p><br />
            <button className='bg-purple-600 w-100 rounded-3xl hover:bg-purple-400'>
                <a href={recipe.strYoutube} className='rounded hover:text-red-700 font-bold'>Whatch it on Youtube</a>
            </button>
        </div>
        </div><br />
        <h2 className='font-bold text-xl font-serif ml-10'>Ingredients</h2>
        {(()=>{
            const items=[];
            for(let i=1; i<=20;i++){
                const ingredients =recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];
                if(ingredients&&ingredients.trim()!==""){
                    items.push(
                        <p key={i} className='ml-10 font-serif'>
                            {ingredients} : {measure }
                        </p>
                    );
                }

            }
            return items;
        })()}
        <br />
        <h2 className='font-bold text-xl font-serif ml-10'>Instructions</h2>
        <p className='ml-10  font-serif'>{recipe.strInstructions}</p>
      
    </div>
  )
}

export default Recipe

