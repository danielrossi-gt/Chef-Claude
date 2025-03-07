export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
    ingredientList.push(newIngredient);
    console.log(ingredientList);
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{ingredientList}</ul>
    </main>
  );
}
