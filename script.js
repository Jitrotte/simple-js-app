let pokemonRepository = (function () {
  let repository = [
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

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener("click", function showDetails() {
      console.log(pokemon.name);
    });

    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
