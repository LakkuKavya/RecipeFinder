import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://dummyjson.com/recipes");
      const data = await resp.json();
      setRecipes(data.recipes);
    };

    fetchData();
  }, []);

  // Filter recipes
  const filteredRecipes = recipes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h1>Recipes</h1>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Found: {filteredRecipes.length}</h3>

      {/* Flex Container */}
      <section className="recipes-container">
        {filteredRecipes.map((item) => (
          <article className="recipe-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
          </article>
        ))}
      </section>
    </>
  );
}

export default App;
