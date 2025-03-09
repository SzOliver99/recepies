import { writable } from "svelte/store";

export const isMenuActive = writable(false);

export const categories = writable(['Összes', 'Főétel', 'Desszert']);
export const recipes = writable([
    {
        id: 1,
        name: 'Spaghetti Carbonara',
        cookTime: '25 minutes',
        difficulty: 'Medium',
        categories: ['Főétel'],
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
        difficulty: 'Medium',
        categories: ['Desszert'],
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
    }
]);