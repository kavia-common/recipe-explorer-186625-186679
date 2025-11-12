export type Ingredient = {
  name: string;
  amount?: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  rating: number;
  cookTimeMins: number;
  servings: number;
  ingredients: Ingredient[];
  steps: string[];
};

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Lemon Herb Grilled Chicken",
    description:
      "Juicy grilled chicken marinated in lemon, garlic, and fresh herbs for a bright, savory flavor.",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    tags: ["Grill", "Chicken", "Healthy"],
    rating: 4.6,
    cookTimeMins: 35,
    servings: 4,
    ingredients: [
      { name: "Chicken breasts", amount: "4" },
      { name: "Lemon", amount: "1, juiced" },
      { name: "Garlic", amount: "3 cloves, minced" },
      { name: "Olive oil", amount: "2 tbsp" },
      { name: "Fresh thyme", amount: "1 tsp" },
      { name: "Salt & pepper" },
    ],
    steps: [
      "Whisk lemon juice, garlic, oil, thyme, salt, and pepper.",
      "Marinate chicken for 20 minutes.",
      "Grill over medium-high heat for 5-6 minutes per side.",
      "Rest 5 minutes, then slice and serve.",
    ],
  },
  {
    id: "2",
    title: "Creamy Mushroom Pasta",
    description:
      "A rich and velvety sauce with mushrooms and parmesan tossed with al dente pasta.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
    tags: ["Pasta", "Vegetarian"],
    rating: 4.8,
    cookTimeMins: 25,
    servings: 3,
    ingredients: [
      { name: "Pasta", amount: "300 g" },
      { name: "Mushrooms", amount: "250 g, sliced" },
      { name: "Garlic", amount: "2 cloves, minced" },
      { name: "Cream", amount: "200 ml" },
      { name: "Parmesan", amount: "40 g, grated" },
      { name: "Butter", amount: "1 tbsp" },
      { name: "Salt & pepper" },
    ],
    steps: [
      "Cook pasta per package instructions.",
      "Sauté mushrooms and garlic in butter until golden.",
      "Add cream and simmer to thicken, then stir in parmesan.",
      "Toss with pasta; season to taste.",
    ],
  },
  {
    id: "3",
    title: "Avocado Toast Deluxe",
    description:
      "Crunchy sourdough with creamy avocado, cherry tomatoes, and a drizzle of olive oil.",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1200&auto=format&fit=crop",
    tags: ["Breakfast", "Vegetarian", "Quick"],
    rating: 4.2,
    cookTimeMins: 10,
    servings: 2,
    ingredients: [
      { name: "Sourdough bread", amount: "4 slices" },
      { name: "Avocados", amount: "2, ripe" },
      { name: "Cherry tomatoes", amount: "8, halved" },
      { name: "Lemon", amount: "1/2, juiced" },
      { name: "Olive oil", amount: "1 tbsp" },
      { name: "Salt, pepper, chili flakes" },
    ],
    steps: [
      "Toast sourdough until golden.",
      "Mash avocado with lemon, salt, and pepper.",
      "Spread on toast, top with tomatoes and chili flakes.",
      "Finish with olive oil drizzle.",
    ],
  },
  {
    id: "4",
    title: "Spicy Tuna Poke Bowl",
    description:
      "Fresh tuna with a spicy mayo, served over rice with crisp veggies and avocado.",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200&auto=format&fit=crop",
    tags: ["Seafood", "Bowl", "Gluten-Free"],
    rating: 4.7,
    cookTimeMins: 20,
    servings: 2,
    ingredients: [
      { name: "Sushi rice", amount: "2 cups cooked" },
      { name: "Fresh tuna", amount: "250 g, cubed" },
      { name: "Cucumber", amount: "1/2, sliced" },
      { name: "Avocado", amount: "1, sliced" },
      { name: "Green onions", amount: "2, chopped" },
      { name: "Spicy mayo", amount: "2 tbsp" },
      { name: "Soy sauce", amount: "1 tbsp" },
    ],
    steps: [
      "Toss tuna with spicy mayo and soy sauce.",
      "Assemble bowl with rice, tuna, veggies, and avocado.",
      "Garnish with green onions.",
    ],
  },
  {
    id: "5",
    title: "Mediterranean Quinoa Salad",
    description:
      "Light and zesty quinoa with cucumbers, tomatoes, feta, and olives.",
    image:
      "https://images.unsplash.com/photo-1544025162-8cf4a5c00f53?q=80&w=1200&auto=format&fit=crop",
    tags: ["Salad", "Healthy", "Vegetarian"],
    rating: 4.4,
    cookTimeMins: 20,
    servings: 4,
    ingredients: [
      { name: "Quinoa", amount: "1 cup" },
      { name: "Cucumber", amount: "1, diced" },
      { name: "Cherry tomatoes", amount: "1 cup, halved" },
      { name: "Feta", amount: "1/2 cup, crumbled" },
      { name: "Kalamata olives", amount: "1/3 cup, sliced" },
      { name: "Lemon vinaigrette", amount: "3 tbsp" },
    ],
    steps: [
      "Cook quinoa; cool.",
      "Combine with veggies, feta, and olives.",
      "Toss with vinaigrette and serve.",
    ],
  },
  {
    id: "6",
    title: "Beef Stir-Fry with Broccoli",
    description:
      "Tender beef and crisp broccoli in a savory garlic sauce with ginger.",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Beef", "Quick"],
    rating: 4.5,
    cookTimeMins: 18,
    servings: 3,
    ingredients: [
      { name: "Beef sirloin", amount: "300 g, sliced" },
      { name: "Broccoli", amount: "2 cups, florets" },
      { name: "Garlic", amount: "2 cloves, minced" },
      { name: "Ginger", amount: "1 tsp, grated" },
      { name: "Soy sauce", amount: "2 tbsp" },
      { name: "Cornstarch", amount: "1 tsp" },
    ],
    steps: [
      "Sear beef over high heat; remove.",
      "Stir-fry broccoli, garlic, and ginger.",
      "Add sauce and return beef to coat; serve with rice.",
    ],
  },
  {
    id: "7",
    title: "Classic Margherita Pizza",
    description:
      "Simple and delicious pizza with tomatoes, mozzarella, and fresh basil.",
    image:
      "https://images.unsplash.com/photo-1541745537413-b8046259b86b?q=80&w=1200&auto=format&fit=crop",
    tags: ["Pizza", "Vegetarian"],
    rating: 4.9,
    cookTimeMins: 30,
    servings: 2,
    ingredients: [
      { name: "Pizza dough", amount: "1 ball" },
      { name: "Tomato sauce", amount: "1/2 cup" },
      { name: "Mozzarella", amount: "150 g" },
      { name: "Fresh basil", amount: "a handful" },
      { name: "Olive oil", amount: "1 tbsp" },
    ],
    steps: [
      "Stretch dough; top with sauce and mozzarella.",
      "Bake at 500°F/260°C until bubbly.",
      "Finish with basil and olive oil.",
    ],
  },
  {
    id: "8",
    title: "Blueberry Oatmeal Muffins",
    description:
      "Wholesome muffins with oats and fresh blueberries for a hearty snack.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop",
    tags: ["Baking", "Snack"],
    rating: 4.3,
    cookTimeMins: 28,
    servings: 12,
    ingredients: [
      { name: "All-purpose flour", amount: "1 1/2 cups" },
      { name: "Rolled oats", amount: "1 cup" },
      { name: "Blueberries", amount: "1 cup" },
      { name: "Eggs", amount: "2" },
      { name: "Milk", amount: "3/4 cup" },
      { name: "Sugar", amount: "1/2 cup" },
      { name: "Baking powder", amount: "2 tsp" },
    ],
    steps: [
      "Mix dry ingredients; add wet ingredients until combined.",
      "Fold in blueberries.",
      "Bake at 375°F/190°C for ~18-20 minutes.",
    ],
  },
];
