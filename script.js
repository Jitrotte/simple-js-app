let pokemonList = [
  {
    name: "pikachu",
    height: 5,
    type: ["electric", "ground"],
  },
  {
    name: "bulbasaur",
    height: 6,
    type: ["grass", "poison"],
  },
  {
    name: "squirtle",
    height: 7,
    type: ["water", "ground"],
  },
];

for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 6) {
    document.write(
      pokemonList[i].name +
        " (height: " +
        pokemonList[i].height +
        ") WOW thats BIG!"
    );
  } else {
    document.write(
      pokemonList[i].name + " (height: " + pokemonList[i].height + ") <br/>"
    );
  }
}
