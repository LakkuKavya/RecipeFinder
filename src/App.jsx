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

  // filter recipes based on search text
  const filteredRecipes = recipes.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <h1>Recipes</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Found: {filteredRecipes.length}</h3>

      <div>
        {filteredRecipes.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} width="200" />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
