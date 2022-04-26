let pokemonList = [
  {
    name: "pikachu",
    height: 5,
    type: ["electric", " ground"],
  },
  {
    name: "bulbasaur",
    height: 6,
    type: ["grass", " poison"],
  },
  {
    name: "squirtle",
    height: 7,
    type: ["water", " ground"],
  },
];

let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonList.forEach(function (getAll) {
  document.write(
    "<p>" +
      getAll.name +
      " (height: " +
      getAll.height +
      ") " +
      "type: " +
      getAll.type +
      "</p>"
  );
});
