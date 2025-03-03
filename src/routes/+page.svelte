<script>
	import { onMount } from 'svelte';

	const recipes = [
		{
			id: 1,
			name: 'Spaghetti Carbonara',
			cookTime: '25 minutes',
			ingredients: [
				'400g spaghetti',
				'200g pancetta or guanciale, diced',
				'4 large eggs',
				'100g Pecorino Romano cheese, grated',
				'50g Parmesan cheese, grated',
				'2 cloves garlic, minced',
				'Freshly ground black pepper',
				'Salt to taste'
			],
			instructions: [
				'Bring a large pot of salted water to boil and cook spaghetti according to package instructions until al dente.',
				'While pasta cooks, heat a large skillet over medium heat. Add pancetta and cook until crispy, about 5-7 minutes.',
				'In a bowl, whisk together eggs, grated cheeses, and black pepper.',
				'When pasta is done, reserve 1 cup of pasta water, then drain pasta.',
				'Working quickly, add hot pasta to the skillet with pancetta, tossing to combine.',
				'Remove skillet from heat and pour in egg mixture, stirring constantly to create a creamy sauce. Add pasta water as needed to thin the sauce.',
				'Season with additional black pepper and salt if needed. Serve immediately with extra grated cheese on top.'
			]
		},
		{
			id: 2,
			name: 'Chicken Tikka Masala',
			cookTime: '45 minutes',
			ingredients: [
				'800g boneless chicken thighs, cut into bite-sized pieces',
				'2 cups plain yogurt',
				'3 tbsp lemon juice',
				'4 tsp ground cumin',
				'2 tsp ground cinnamon',
				'2 tsp cayenne pepper',
				'2 tsp black pepper',
				'2 tsp salt',
				'1 tbsp minced ginger',
				'3 tbsp butter',
				'1 large onion, diced',
				'4 cloves garlic, minced',
				'2 tsp ground cumin',
				'2 tsp paprika',
				'1 tsp turmeric',
				'1 can (400g) tomato sauce',
				'1 cup heavy cream',
				'Fresh cilantro for garnish'
			],
			instructions: [
				'In a large bowl, combine yogurt, lemon juice, cumin, cinnamon, cayenne pepper, black pepper, salt, and ginger. Stir in chicken, cover, and refrigerate for at least 1 hour.',
				'Preheat grill to high heat. Thread chicken onto skewers and discard marinade. Grill until juices run clear, about 5 minutes on each side.',
				'Melt butter in a large skillet over medium heat. Sauté onion until soft and translucent. Stir in garlic, cumin, paprika, and turmeric, then cook for 1 minute.',
				'Add tomato sauce and simmer for 15 minutes. Stir in cream and simmer until the sauce thickens, about 5 minutes.',
				'Add grilled chicken and simmer for 10 minutes. Garnish with fresh cilantro and serve with rice or naan bread.'
			]
		},
		{
			id: 3,
			name: 'Vegetable Stir Fry',
			cookTime: '20 minutes',
			ingredients: [
				'2 tbsp vegetable oil',
				'2 cloves garlic, minced',
				'1 tbsp ginger, grated',
				'1 carrot, julienned',
				'1 red bell pepper, sliced',
				'1 yellow bell pepper, sliced',
				'1 cup broccoli florets',
				'1 cup snap peas',
				'1 cup mushrooms, sliced',
				'3 tbsp soy sauce',
				'1 tbsp oyster sauce',
				'1 tsp sesame oil',
				'1 tsp cornstarch mixed with 2 tbsp water',
				'Sesame seeds for garnish',
				'Green onions, chopped, for garnish'
			],
			instructions: [
				'Heat vegetable oil in a wok or large skillet over high heat.',
				'Add garlic and ginger, stir-fry for 30 seconds until fragrant.',
				'Add carrots and stir-fry for 1 minute.',
				'Add bell peppers, broccoli, snap peas, and mushrooms. Stir-fry for 3-4 minutes until vegetables are crisp-tender.',
				'In a small bowl, mix soy sauce, oyster sauce, and sesame oil.',
				'Pour sauce over vegetables and toss to coat.',
				'Add cornstarch slurry and stir until sauce thickens, about 1 minute.',
				'Garnish with sesame seeds and green onions. Serve hot with rice or noodles.'
			]
		},
		{
			id: 4,
			name: 'Classic French Toast',
			cookTime: '15 minutes',
			ingredients: [
				'8 slices thick bread (preferably day-old)',
				'4 large eggs',
				'1 cup milk',
				'2 tbsp sugar',
				'1 tsp vanilla extract',
				'1/2 tsp ground cinnamon',
				'Pinch of salt',
				'2 tbsp butter for cooking',
				'Maple syrup for serving',
				'Fresh berries for serving (optional)',
				'Powdered sugar for dusting (optional)'
			],
			instructions: [
				'In a shallow bowl, whisk together eggs, milk, sugar, vanilla extract, cinnamon, and salt.',
				'Heat a large skillet or griddle over medium heat and melt some butter.',
				'Dip each slice of bread in the egg mixture, allowing it to soak for about 30 seconds on each side.',
				'Place the soaked bread on the hot skillet and cook until golden brown, about 2-3 minutes per side.',
				'Serve hot with maple syrup, fresh berries, and a dusting of powdered sugar if desired.'
			]
		},
		{
			id: 5,
			name: 'Homemade Guacamole',
			cookTime: '10 minutes',
			ingredients: [
				'3 ripe avocados',
				'1 lime, juiced',
				'1/2 red onion, finely diced',
				'2 Roma tomatoes, diced',
				'2 tbsp cilantro, chopped',
				'1 jalapeño, seeded and minced',
				'1 clove garlic, minced',
				'1/2 tsp salt',
				'1/4 tsp ground cumin',
				'Tortilla chips for serving'
			],
			instructions: [
				'Cut avocados in half, remove pits, and scoop the flesh into a bowl.',
				'Add lime juice and mash with a fork to desired consistency (chunky or smooth).',
				'Fold in onion, tomatoes, cilantro, jalapeño, and garlic.',
				'Season with salt and cumin, then taste and adjust seasoning if needed.',
				'Serve immediately with tortilla chips or refrigerate with plastic wrap pressed directly onto the surface to prevent browning.'
			]
		}
	];

	let currentRecipe = recipes[0];

	function getRandomRecipe() {
		const randomIndex = Math.floor(Math.random() * recipes.length);
		currentRecipe = recipes[randomIndex];
	}

	onMount(() => {
		getRandomRecipe();
	});
</script>

<main class="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 p-4 md:p-8">
	<div class="mx-auto max-w-4xl">
		<header class="mb-8 text-center md:mb-12">
			<h1 class="mb-2 text-3xl font-bold text-amber-800 md:text-5xl">Recipe Randomizer</h1>
			<p class="text-lg text-amber-700">Discover delicious recipes with just a click!</p>
		</header>

		<div class="flex flex-col items-center">
			<button
				on:click={getRandomRecipe}
				class="mb-8 rounded-xl bg-amber-600 px-8 py-6 text-lg text-white shadow-lg transition-all hover:bg-amber-700 hover:shadow-xl"
			>
				Randomize Recipe
			</button>

			<div class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-md">
				<div class="rounded-t-lg bg-amber-100 p-6">
					<h2 class="text-2xl font-bold text-amber-800 md:text-3xl">{currentRecipe.name}</h2>
					<div class="mt-2 flex flex-wrap gap-4">
						<span class="flex items-center gap-1 text-amber-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="h-4 w-4"
							>
								<circle cx="12" cy="12" r="10" />
								<polyline points="12 6 12 12 16 14" />
							</svg>
							{currentRecipe.cookTime}
						</span>
					</div>
				</div>

				<div class="p-6">
					<div class="mb-6">
						<h3 class="mb-2 flex items-center gap-2 text-lg font-semibold text-amber-800">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="h-5 w-5"
							>
								<path
									d="M8 3L7 6.94a7 7 0 0 0-.5 2.58A1.5 1.5 0 0 0 8 11a1.5 1.5 0 0 0 1.5-1.48 7 7 0 0 0-.5-2.58L8 3Z"
								/>
								<path d="M12 3c-.7 3.7-1.5 5.7 0 9" />
								<path d="M16 3c.7 3.7 1.5 5.7 0 9" />
								<path d="M2 21h20" />
								<path d="M7 21a4 4 0 0 1-4-4V5" />
								<path d="M21 21a4 4 0 0 0 4-4V5" />
							</svg>
							Ingredients
						</h3>
						<ul class="list-disc space-y-1 pl-5">
							{#each currentRecipe.ingredients as ingredient}
								<li class="text-gray-700">{ingredient}</li>
							{/each}
						</ul>
					</div>

					<div>
						<h3 class="mb-2 text-lg font-semibold text-amber-800">Instructions</h3>
						<ol class="list-decimal space-y-2 pl-5">
							{#each currentRecipe.instructions as step, i}
								<li class="text-gray-700">{step}</li>
							{/each}
						</ol>
					</div>
				</div>

				<div class="rounded-b-lg bg-amber-50 p-4">
					<p class="text-amber-700 italic">Enjoy your delicious meal!</p>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
			'Helvetica Neue', sans-serif;
	}
</style>
