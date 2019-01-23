import React from 'react';

const Recipes = props => (

<div>
{ props.recipes.map((recipe) => {

  return (

<div key={recipe.id} >
    
    <p>{recipe.title}</p>
    <img src={recipe.image_url} alt={recipe.title} />
    </div>
    );
} )}
</div>

	);

export default Recipes;