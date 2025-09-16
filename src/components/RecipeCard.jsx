const RecipeCard = ({key, recipe}) => {
   return(
    <div className="recipe-card p-[3px] border-solid border-[2px] border-[#FF2C2C] rounded-md flex flex-col align-center justify-center">
      <img src={recipe.thumbnail} alt="" className="rounded-md h-70 m-4" />
      <h2 className="recipe-title w-50 mx-auto h-15">
         {recipe.name}
      </h2>

    </div>
   ) ;
}

export default RecipeCard;