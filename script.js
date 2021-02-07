document.getElementById('search').addEventListener('click', function () {
	const names = document.getElementById('foodSearch');
	foodSearch = names.value;
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodSearch}`)
		.then(response => response.json())
		.then(data => showFood(data.meals));
	document.getElementById('foodSearch').value = '';
});
const showFood = foods => {
	foods.forEach(elements => {
		const container = document.getElementById('food');
		const foodContainer = document.createElement('div');
		// const foodName = document.createElement('div');
		foodContainer.innerHTML = `
			<div onclick="${'showIngredients()'}">
				<img id="images" class="image" src="${elements.strMealThumb}" alt="Food Image">
				<p id="food-name" class="food-name">${elements.strMeal}</p>
			</div>
			<div id="ingredients">
				<p>Ingredients</p>
				<ul >
					<li>${elements.strIngredient1}</li>
					<li>${elements.strIngredient2}</li>
					<li>${elements.strIngredient3}</li>
					<li>${elements.strIngredient4}</li>
					<li>${elements.strIngredient5}</li>
					<li>${elements.strIngredient6}</li>
					<li>${elements.strIngredient7}</li>
					<li>${elements.strIngredient8}</li>
					<li>${elements.strIngredient9}</li>
					<li>${elements.strIngredient10}</li>
				</ul>
			</div>
		`;
		// foodContainer.appendChild(foodName);
		container.appendChild(foodContainer);
	});
};
function showIngredients() {
	document.getElementById('ingredients').style.display = 'block';
}
